<div align="center">
<h1>PrestaShop modules Testing Library</h1>
<p>Simple library to test PrestaShop modules.</p>
</div>
<hr/>

## Table of contents
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Problems](#problems)
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
provides basic pages for the back office in all 1.7 versions (support last patch version for all minor ones), 
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
* BO -> Module manager / Module selection (depends on the PrestaShop version)
* BO -> Module catalog
* BO -> Module configuration (A base page for your module configuration page) 

### Architecture

To help create your own pages, you might need to understand the architecture of the library.

#### The `kernel/resolvers` directory

This is the core of the library and what's make creating your tests easier. It contains 2 files : 

**`configClassMap`** :

An array with the map to the pages, for each file, ordered by PrestaShop version.
Each entry contains two elements :
* `file` : the page class you need to manipulate
* `combinations` : a collection of objects, ordered by PrestaShop version, containing :
    * an entry named `filepath` if it's a direct reference to a file
    * an entry named `version` if it's a reference to another version (to help organize hierarchy and not duplicate 
    every filepath)

Example: the Module manager class. Let's read it from top to bottom:
* the entry for the `1.7.0.x` branch points to the `1.7.1.x` branch, which references a filepath,
* the entry for the `1.7.3.x` branch has its own filepath entry,
* same for the `1.7.4.x` branch,
* `1.7.5.x` and `1.7.6.x` entries are pointing to the 1.7.7.x entry, which has a filepath,
* finally, we have the `latest` entry, which is for the `develop` branch and shouldn't be a target for another entry 
since it's frequently changing and could break for an earlier version if it was referenced.
For example, if the 1.7.7.x branch references the `latest` entry, then the day the PrestaShop page changes 
on `develop` and we update the `latest` class file => the `1.7.7.x` entry would reference it and any test using 
it wouldn't work.  


```js
{
    file: 'BO/modules/moduleManager/index.js',
    combinations: {
      latest: {
        filepath: '@versions/latest/BO/modules/moduleManager/index.js',
      },
      '1.7.7.0': {
        filepath: '@versions/v177/BO/modules/moduleManager/index.js',
      },
      '1.7.6.8': {
        version: '1.7.7.0',
      },
      '1.7.5.2': {
        version: '1.7.7.0',
      },
      '1.7.4.4': {
        filepath: '@versions/v174/BO/modules/moduleManager/index.js',
      },
      '1.7.3.4': {
        filepath: '@versions/v173/BO/modules/moduleManager/index.js',
      },
      '1.7.2.5': {
        version: '1.7.3.4',
      },
      '1.7.1.2': {
        filepath: '@versions/v171/BO/modules/moduleManager/index.js',
      },
      '1.7.0.6': {
        version: '1.7.1.2',
      },
    },
  }
```

**`versionSelectResolver`**

A class map designed to select which file to require for a specific version of PrestaShop. It uses 
the config class map file merged with a custom one (created by yourself).

#### The `utils` directory

The utils directory contains 3 files :

**`helpers`** : a browser helper that use Playwright functions to open / close browser and browser context and browser tab.

**`setup`** : A javascript file loaded before each tests run (find out more about this Mocha option [here](https://mochajs.org/#-file-filedirectoryglob)).

**`globals`** : Some command line parameters. Here is the list :

| Parameter           | Description      |
|---------------------|----------------- |
| PS_VERSION          | PrestaShop version to test on (default to **`1.7.7.0`**) |
| URL_FO              | URL of your PrestaShop website Front Office (default to **`http://localhost/`**) |
| URL_BO              | URL of your PrestaShop website Back Office (default to **`URL_FO + admin-dev/`**) |
| LOGIN               | LOGIN of your PrestaShop website (default to **`demo@prestashop.com`**) |
| PASSWD              | PASSWD of your PrestaShop website (default to **`prestashop_demo`**) |
| HEADLESS            | Browser parameter to run on [Headless mode](https://en.wikipedia.org/wiki/Headless_browser) (default to **`true`**)|

You can use them as environment variables to override them :

```bash
PS_VERSION=1.7.6.8 URL_FO=http://localhost/presta_1768/ LOGIN=prestadmin PASSWD=prestapasswd npm run tests
```

#### The `versions` directory
The version directory contains sub-directories for each version supported (if an override is needed).

### Using the library in your project

#### Adding new pages

After creating new pages (same page for different versions or different pages), you have to add them on a `customClassMap` file which you will create.
It MUST have the same architecture than `configClassMap`.
This file will then be merged by the library (at runtime) with the `configClassMap` from the library, and 
any entry from the library class map will be overriden by your entry if it exists.
For example, if you created a specific class for the ModuleManager page for PrestaShop 1.7.5.2 and referenced it in your
`customClassMap`, it will overwrite the one in the library class map.

#### Calling right pages in tests

Before creating your scenario, you should require allt the pages you need.
Your can start by require and initialize the resolver.

```js
// Require the resolver from the library
const VersionSelectResolver = require('@resolvers/versionSelectResolver');

// Init the resolver with the prestashop version, and the customer config class map
const versionSelectResolver = new VersionSelectResolver(global.INSTALL.PS_VERSION, 'Path of custom class Map');
```

After that, you can use the resolver to require the pages needed using the selector attribute from the config class map.

```js
// Import BO login page
const loginPage = versionSelectResolver.require('BO/login/index.js');
```
### Logic for requiring

The library will try to get the `filepath` for the class and the version you requested.
If it doesn't find your class, it will throw an error.
If the version you requested rebounds on another version, it will then follow the lead until it finds a `filepath` entry
OR rebounds more than 5 times (that's why you should always target the higher version filepath you can, and not ping-pong
from version to version).
If it doesn't find a specific version entry for your class, it will require the `latest` one.
Be careful: the `latest` entry CANNOT have a `version`, it MUST be a `filepath` since it's the default fallback. It will
throw an error if that's the case.

#### Example

You can found an example of the implementation of this library on [this module](https://github.com/PrestaShopCorp/prestashop_test_example).

## Contribution

You can Contribute to this library by adding new pages, providing new units and UI tests, by submitting a PR.
