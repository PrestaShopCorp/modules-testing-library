<div align="center">
<h1>React Testing Library</h1>
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

## Problems

- You want to write maintainable tests for your module, and you have no knowledge of how to write them and which stack to use.
- The module must be tested in multiple PrestaShop 1.7 versions.

## This solution

The PrestaShop test library is a very lightweight solution for testing modules. It uses the same stack than the one used for [UI tests](https://github.com/PrestaShop/PrestaShop/tree/develop/tests/UI) in the core project.
It also provides basic pages for the back office in all 1.7 versions (support last patch version for all minor ones). 

## Usage

### Technical stack
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) as a programming language.
- [Playwright](https://playwright.dev) as a browser automation library.
- [mocha](https://mochajs.org/) as a testing framework.

### Installation

This module is distributed via [npm](https://www.npmjs.com/) which is bundled with [node](https://nodejs.org/) and could be installed as one of your project's devDependencies :

```
npm install --save-dev prestashop_test_lib
```

### Available pages

The list of pages available is the following : 
- BO -> Login
- BO -> dashboard
- BO -> Module manager / Module selection (depends on which PrestaShop version)
- BO -> Module catalog
- BO -> Module configuration (A base page for your module configuration page) 

### Architecture

To help create your own pages, you might need to understand the architecture of the library.

#### The `kernel/resolvers` directory

It's the core of library, the most important part, and what's make adding your tests easier. It contains 2 files : 

**`configClassMap`** :

An array with the map to the pages created in the library (classified by PrestaShop version).
Each element is an object that contains 3 strings :
- `version` : PrestaShop version of the file (common for default pages).
- `selector` : Page to require
- `filepath` : file path of the page to require

Example: Module manager page rewrited for ps_version 1.7.1.2

```json
{
    version: '1.7.1.2', // PrestaShop version
    selector: 'BO/modules/moduleManager/index.js', // Module manager page in BO
    filepath: '@versions/v171/BO/modules/moduleManager/index.js', // File path to require
}
```

**`versionSelectiResolver`**

A class map designed to select which file (page) to require (and require it), it uses the config class map file combined with a custom one to select pages to use.

#### The `utils` directory

The utils directory contains 3 files :

**`helpers`** : a browser helper that use playwright functions to open / close browser and browser context and browser tab.

**`setup`** : A javascript file which is loaded before each tests runs (find out more about this mocha option [here](https://mochajs.org/#-file-filedirectoryglob)).

**`globals`** : Available command line parameters are the following :

| Parameter           | Description      |
|---------------------|----------------- |
| PS_VERSION          | PrestaShop version to test on (default to **`1.7.7.0`**) |
| URL_FO              | URL of your PrestaShop website Front Office (default to **`http://localhost/`**) |
| URL_BO              | URL of your PrestaShop website Back Office (default to **`URL_FO + admin-dev/`**) |
| LOGIN               | LOGIN of your PrestaShop website (default to **`demo@prestashop.com`**) |
| PASSWD              | PASSWD of your PrestaShop website (default to **`prestashop_demo`**) |
| HEADLESS            | Browser parameter to run on [Headless mode](https://en.wikipedia.org/wiki/Headless_browser) (default to **`true`**)|

#### The `versions` directory
The version directory contains sub-directories for each version supported (if an override is needed).

### Using the library in your project

#### Adding new pages

After creating new pages (same page for different versions or different pages), you have to add them on a `customClassMap` file which you will create.
This file will be coupled with the `configClassMap` from the library, and served to require pages in tests.

#### Calling right pages in tests

Before creating your scenario, you should require the pages needed.
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

#### Example

You can found an example of the implementation of this library on [this module](https://github.com/PrestaShopCorp/prestashop_test_example).

## Contribution

You can Contribute to this library by adding new pages, provide new units and UI tests by submitting a PR.
