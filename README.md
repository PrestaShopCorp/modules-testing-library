<div align="center">
<h1>PrestaShop modules Testing Library</h1>
<p>Simple library to test PrestaShop modules.</p>
</div>
<hr/>

## Table of contents
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Problems](#the-problem)
- [This solution](#this-solution)
- [Usage](#usage)
  - [Technical stack](#technical-stack)
  - [Installation](#installation)
  - [Available pages](#available-pages)
  - [Architecture](#architecture)
    - [The `kernel/resolvers` directory](#the-kernelresolvers-directory)
    - [The `utils` directory](#the-utils-directory)
    - [The `versions` directory](#the-versions-directory)
  - [Using the library in your project](#using-the-library-in-your-project)
    - [Adding new pages](#adding-new-pages)
    - [Calling right pages in tests](#calling-right-pages-in-tests)
    - [Example](#example)
- [Contribution](#contribution)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## The problem

- You want to write maintainable tests for your module, and you have no knowledge of how to write them and which stack to use.
- Your module must be tested in multiple PrestaShop 1.7 versions.

## This solution

The PrestaShop test library is a very lightweight solution for testing modules. It uses the same stack than the one 
used for [UI tests](https://github.com/PrestaShop/PrestaShop/tree/develop/tests/UI) in the core project. It also 
provides basic pages for the back office on PrestaShop versions 1.7.4, 1.7.5, 1.7.6, 1.7.7, 1.7.8 (support last patch version for all minor ones), 
including `develop`. 

## Usage

### Technical stack
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) as a programming language,
- [Playwright](https://playwright.dev) as a browser automation Node library,
- [Mocha](https://mochajs.org/) as a testing framework,
- [Chai](https://www.chaijs.com/) as an assertion library,

### Installation

This module is distributed via [npm](https://www.npmjs.com/) which is bundled with [node](https://nodejs.org/) 
and should be installed as one of your project's devDependencies :

```
npm install --save-dev prestashop_test_lib
```

### Available pages

The list of pages available is the following : 
* BO -> Login
* BO -> dashboard
* BO -> Products listing
* BO -> Add product
* BO -> Module manager / Module selection (depends on the PrestaShop version)
* BO -> Module catalog
* BO -> Module configuration (A base page for your module configuration page)

### Architecture

To help create your own pages, you might need to understand the architecture of the library.

#### The `kernel/resolvers` directory

This is the core of the library and what's make creating your tests easier. It contains 2 files : 

**`configClassMap.example`** :

This is an example of a custom classMap file you could create to give the resolver all the paths to your custom page classes.
Its structure is pretty simple: it's an array containing a few objects, organized like the following:
* a key `file` containing the virtual path of the page class 
* a `versions` key containing a dictionary which provides the path of the file for every version

This file takes precedence over the files bundled with this library, so if you wanted to extend an existing page class
you could definitely list it in your classMap. The example file shows this behavior with the `BO/dashboard/index.js` file.

**`versionSelectResolver`**

A class map designed to select which file to require for a specific version of PrestaShop. It could be extended with a 
custom configClassMap (see above) to give him more filepaths and more classes.
If it doesn't find the file you asked for in the configClassMap, it will search in the files bundled with this 
library.

#### The `utils` directory

The utils directory contains 3 files :

**`helpers`** : a browser helper that use Playwright functions to open / close browser and browser context and browser tab.

**`setup`** : A javascript file loaded before each tests run (find out more about this Mocha option [here](https://mochajs.org/#-file-filedirectoryglob)).

**`globals`** : Some command line parameters. Here is the list :

| Parameter           | Description      |
|---------------------|----------------- |
| PS_VERSION          | PrestaShop version to test on (default to **`1.7.7`**) |
| URL_FO              | URL of your PrestaShop website Front Office (default to **`http://localhost/`**) |
| URL_BO              | URL of your PrestaShop website Back Office (default to **`URL_FO + admin-dev/`**) |
| LOGIN               | LOGIN of your PrestaShop website (default to **`demo@prestashop.com`**) |
| PASSWD              | PASSWD of your PrestaShop website (default to **`prestashop_demo`**) |
| HEADLESS            | Browser parameter to run on [Headless mode](https://en.wikipedia.org/wiki/Headless_browser) (default to **`true`**)|

You can use them as environment variables to override them :

```bash
PS_VERSION=1.7.6 URL_FO=http://localhost/presta_1768/ LOGIN=prestadmin PASSWD=prestapasswd npm run ui-tests
```

:warning: Note: the `PS_VERSION` variable must not include the last digit (patch version). 

#### The `versions` directory
The version directory contains all the page classes files for every version of PrestaShop supported.

### Using the library in your project

#### Adding new pages

After creating new pages (same page for different versions or different pages), you have to add them on
 a `customClassMap` file. To create it, check the [`kernel/resolvers`](#the-kernelresolvers-directory) chapter.
This file will then be used by the library (at runtime) to find the correct file to use for your defined version.
It can override an existing file bundled with this library: for example, if you created a specific class for 
the ModuleManager page for PrestaShop 1.7.5.2 and referenced it in your `customClassMap`, it will overwrite 
the one in the library.

#### Calling right pages in tests

Before creating your scenario, you should require all the pages you need.
Your can start by require and initialize the resolver.

```js
// Require the resolver from the library
const VersionSelectResolver = require('@resolvers/versionSelectResolver');

// Init the resolver with the prestashop version, and the customer config class map
const versionSelectResolver = new VersionSelectResolver(global.INSTALL.PS_VERSION, 'path/to/your/classMap');
```
The path to the classMap is optional. If you don't provide one, you will only have access to the files bundled
with this library.

After that, you can use the resolver to require the pages needed using the virtual filepath attribute (like `BO/login/index`).

```js
// Import BO login page
const loginPage = versionSelectResolver.require('BO/login/index.js');
```
### Logic for requiring

The library will try to get the `filepath` for the class and the version you requested, first in the custom classMap you
provided, then (or if you didn't provide any) in its own bundled page classes.
If it doesn't find your class, it will throw an error.

#### Example

You can find an example of the implementation of this library on [this module](https://github.com/PrestaShopCorp/prestashop_test_example).


## JS docs
You can find the functions to use and their its description On this [directory](./docs).

To update docs, you can update the `jsdocScript/updateDocs.sh` and add more sources and destinations, then you should run:

```shell
npm run update-docs
```

## Contribution

You can contribute to this library by adding new pages, providing new units and UI tests, by submitting a PR.
