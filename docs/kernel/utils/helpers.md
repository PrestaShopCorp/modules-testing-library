## Modules

<dl>
<dt><a href="#module_helpers">helpers</a></dt>
<dd></dd>
<dt><a href="#module_helpers">helpers</a></dt>
<dd></dd>
</dl>

<a name="module_helpers"></a>

## helpers

* [helpers](#module_helpers)
    * [.createBrowser(attempt)](#module_helpers.createBrowser) ⇒ <code>Promise.&lt;Browser&gt;</code>
    * [.createBrowserContext(browser)](#module_helpers.createBrowserContext) ⇒ <code>Promise.&lt;BrowserContext&gt;</code>
    * [.newTab(context)](#module_helpers.newTab) ⇒ <code>Promise.&lt;Page&gt;</code>
    * [.closeBrowserContext(context)](#module_helpers.closeBrowserContext) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.closeBrowser(browser)](#module_helpers.closeBrowser) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="module_helpers.createBrowser"></a>

### helpers.createBrowser(attempt) ⇒ <code>Promise.&lt;Browser&gt;</code>
Create playwright browser

**Kind**: static method of [<code>helpers</code>](#module_helpers)  

| Param | Type | Description |
| --- | --- | --- |
| attempt | <code>number</code> | number of attempts to restart browser creation if function throw error |

<a name="module_helpers.createBrowserContext"></a>

### helpers.createBrowserContext(browser) ⇒ <code>Promise.&lt;BrowserContext&gt;</code>
Create a browser context

**Kind**: static method of [<code>helpers</code>](#module_helpers)  

| Param | Type | Description |
| --- | --- | --- |
| browser | <code>Browser</code> | Browser instance from playwright |

<a name="module_helpers.newTab"></a>

### helpers.newTab(context) ⇒ <code>Promise.&lt;Page&gt;</code>
Create new tab in browser

**Kind**: static method of [<code>helpers</code>](#module_helpers)  

| Param | Type | Description |
| --- | --- | --- |
| context | <code>BrowserContext</code> | Browser context instance created |

<a name="module_helpers.closeBrowserContext"></a>

### helpers.closeBrowserContext(context) ⇒ <code>Promise.&lt;void&gt;</code>
Destroy browser instance, that delete as well all files downloaded

**Kind**: static method of [<code>helpers</code>](#module_helpers)  

| Param | Type | Description |
| --- | --- | --- |
| context | <code>BrowserContext</code> | Browser context instance to close |

<a name="module_helpers.closeBrowser"></a>

### helpers.closeBrowser(browser) ⇒ <code>Promise.&lt;void&gt;</code>
Destroy browser instance, that delete as well all files downloaded

**Kind**: static method of [<code>helpers</code>](#module_helpers)  

| Param | Type | Description |
| --- | --- | --- |
| browser | <code>Browser</code> | Browser instance to close |

<a name="module_helpers"></a>

## helpers

* [helpers](#module_helpers)
    * [.createBrowser(attempt)](#module_helpers.createBrowser) ⇒ <code>Promise.&lt;Browser&gt;</code>
    * [.createBrowserContext(browser)](#module_helpers.createBrowserContext) ⇒ <code>Promise.&lt;BrowserContext&gt;</code>
    * [.newTab(context)](#module_helpers.newTab) ⇒ <code>Promise.&lt;Page&gt;</code>
    * [.closeBrowserContext(context)](#module_helpers.closeBrowserContext) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.closeBrowser(browser)](#module_helpers.closeBrowser) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="module_helpers.createBrowser"></a>

### helpers.createBrowser(attempt) ⇒ <code>Promise.&lt;Browser&gt;</code>
Create playwright browser

**Kind**: static method of [<code>helpers</code>](#module_helpers)  

| Param | Type | Description |
| --- | --- | --- |
| attempt | <code>number</code> | number of attempts to restart browser creation if function throw error |

<a name="module_helpers.createBrowserContext"></a>

### helpers.createBrowserContext(browser) ⇒ <code>Promise.&lt;BrowserContext&gt;</code>
Create a browser context

**Kind**: static method of [<code>helpers</code>](#module_helpers)  

| Param | Type | Description |
| --- | --- | --- |
| browser | <code>Browser</code> | Browser instance from playwright |

<a name="module_helpers.newTab"></a>

### helpers.newTab(context) ⇒ <code>Promise.&lt;Page&gt;</code>
Create new tab in browser

**Kind**: static method of [<code>helpers</code>](#module_helpers)  

| Param | Type | Description |
| --- | --- | --- |
| context | <code>BrowserContext</code> | Browser context instance created |

<a name="module_helpers.closeBrowserContext"></a>

### helpers.closeBrowserContext(context) ⇒ <code>Promise.&lt;void&gt;</code>
Destroy browser instance, that delete as well all files downloaded

**Kind**: static method of [<code>helpers</code>](#module_helpers)  

| Param | Type | Description |
| --- | --- | --- |
| context | <code>BrowserContext</code> | Browser context instance to close |

<a name="module_helpers.closeBrowser"></a>

### helpers.closeBrowser(browser) ⇒ <code>Promise.&lt;void&gt;</code>
Destroy browser instance, that delete as well all files downloaded

**Kind**: static method of [<code>helpers</code>](#module_helpers)  

| Param | Type | Description |
| --- | --- | --- |
| browser | <code>Browser</code> | Browser instance to close |

