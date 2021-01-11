<a name="ModuleCatalog"></a>

## ModuleCatalog ⇐ <code>BOBasePage</code>
BO module catalog page

**Kind**: global class  
**Extends**: <code>BOBasePage</code>  

* [ModuleCatalog](#ModuleCatalog) ⇐ <code>BOBasePage</code>
    * [.searchModule(page, moduleTag, moduleName)](#ModuleCatalog+searchModule) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.installModule(page, moduleName)](#ModuleCatalog+installModule) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.goToConfigurationPage(page, moduleName)](#ModuleCatalog+goToConfigurationPage) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="ModuleCatalog+searchModule"></a>

### moduleCatalog.searchModule(page, moduleTag, moduleName) ⇒ <code>Promise.&lt;boolean&gt;</code>
Search Module in Page module Catalog

**Kind**: instance method of [<code>ModuleCatalog</code>](#ModuleCatalog)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| moduleTag | <code>string</code> | Tag of the module |
| moduleName | <code>string</code> | Name of the module |

<a name="ModuleCatalog+installModule"></a>

### moduleCatalog.installModule(page, moduleName) ⇒ <code>Promise.&lt;string&gt;</code>
Install Module and waiting for successful massage

**Kind**: instance method of [<code>ModuleCatalog</code>](#ModuleCatalog)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| moduleName | <code>string</code> | Name of the module |

<a name="ModuleCatalog+goToConfigurationPage"></a>

### moduleCatalog.goToConfigurationPage(page, moduleName) ⇒ <code>Promise.&lt;void&gt;</code>
Go to module configuration page

**Kind**: instance method of [<code>ModuleCatalog</code>](#ModuleCatalog)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| moduleName | <code>string</code> | Name of the module |

