## Members

<dl>
<dt><a href="#PS_VERSION">PS_VERSION</a> : <code>string</code></dt>
<dd><p>PrestaShop version to test (minor version)</p>
</dd>
</dl>

## Objects

<dl>
<dt><a href="#FO">FO</a> : <code>object</code></dt>
<dd><p>FO global vars</p>
</dd>
<dt><a href="#BO">BO</a> : <code>object</code></dt>
<dd><p>BO global vars</p>
</dd>
<dt><a href="#BROWSER">BROWSER</a> : <code>object</code></dt>
<dd><p>Global vars for browser to create</p>
</dd>
</dl>

<a name="PS_VERSION"></a>

## PS\_VERSION : <code>string</code>
PrestaShop version to test (minor version)

**Kind**: global variable  
**Default**: <code>&quot;1.7.7&quot;</code>  
<a name="FO"></a>

## FO : <code>object</code>
FO global vars

**Kind**: global namespace  
<a name="FO.URL"></a>

### FO.URL : <code>string</code>
FO shop URL

**Kind**: static property of [<code>FO</code>](#FO)  
**Default**: <code>&quot;localhost/&quot;</code>  
<a name="BO"></a>

## BO : <code>object</code>
BO global vars

**Kind**: global namespace  

* [BO](#BO) : <code>object</code>
    * [.URL](#BO.URL) : <code>string</code>
    * [.EMAIL](#BO.EMAIL) : <code>string</code>
    * [.PASSWD](#BO.PASSWD) : <code>string</code>
    * [.FIRSTNAME](#BO.FIRSTNAME) : <code>string</code>
    * [.LASTNAME](#BO.LASTNAME) : <code>string</code>

<a name="BO.URL"></a>

### BO.URL : <code>string</code>
BO shop URL

**Kind**: static property of [<code>BO</code>](#BO)  
**Default**: <code>&quot;localhost/admin-dev/&quot;</code>  
<a name="BO.EMAIL"></a>

### BO.EMAIL : <code>string</code>
BO default email account

**Kind**: static property of [<code>BO</code>](#BO)  
**Default**: <code>&quot;demo@prestashop.com&quot;</code>  
<a name="BO.PASSWD"></a>

### BO.PASSWD : <code>string</code>
BO default password account

**Kind**: static property of [<code>BO</code>](#BO)  
**Default**: <code>&quot;prestashop_demo&quot;</code>  
<a name="BO.FIRSTNAME"></a>

### BO.FIRSTNAME : <code>string</code>
BO default firstname account

**Kind**: static property of [<code>BO</code>](#BO)  
**Default**: <code>&quot;demo&quot;</code>  
<a name="BO.LASTNAME"></a>

### BO.LASTNAME : <code>string</code>
BO default lastname account

**Kind**: static property of [<code>BO</code>](#BO)  
**Default**: <code>&quot;demo&quot;</code>  
<a name="BROWSER"></a>

## BROWSER : <code>object</code>
Global vars for browser to create

**Kind**: global namespace  

* [BROWSER](#BROWSER) : <code>object</code>
    * [.name](#BROWSER.name) : <code>string</code>
    * [.lang](#BROWSER.lang) : <code>string</code>
    * [.config](#BROWSER.config) : <code>object</code>
    * [.width](#BROWSER.width) : <code>int</code>
    * [.height](#BROWSER.height) : <code>int</code>
    * [.sandboxArgs](#BROWSER.sandboxArgs) : <code>Array</code>
    * [.acceptDownloads](#BROWSER.acceptDownloads) : <code>boolean</code>

<a name="BROWSER.name"></a>

### BROWSER.name : <code>string</code>
Browser type to create (chromium | webkit | firefox)

**Kind**: static property of [<code>BROWSER</code>](#BROWSER)  
**Default**: <code>&quot;chromium&quot;</code>  
<a name="BROWSER.lang"></a>

### BROWSER.lang : <code>string</code>
Language for the browser to create

**Kind**: static property of [<code>BROWSER</code>](#BROWSER)  
**Default**: <code>&quot;en-GB&quot;</code>  
<a name="BROWSER.config"></a>

### BROWSER.config : <code>object</code>
**Kind**: static namespace of [<code>BROWSER</code>](#BROWSER)  
<a name="BROWSER.width"></a>

### BROWSER.width : <code>int</code>
Width size of the browser to create

**Kind**: static constant of [<code>BROWSER</code>](#BROWSER)  
<a name="BROWSER.height"></a>

### BROWSER.height : <code>int</code>
Height size of the browser to create

**Kind**: static constant of [<code>BROWSER</code>](#BROWSER)  
<a name="BROWSER.sandboxArgs"></a>

### BROWSER.sandboxArgs : <code>Array</code>
Array to disable sandbox for the browser

**Kind**: static constant of [<code>BROWSER</code>](#BROWSER)  
<a name="BROWSER.acceptDownloads"></a>

### BROWSER.acceptDownloads : <code>boolean</code>
To enable download on tests

**Kind**: static constant of [<code>BROWSER</code>](#BROWSER)  
