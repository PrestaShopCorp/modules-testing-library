<a name="ModuleManager"></a>

## ModuleManager ⇐ <code>BOBasePage</code>
BO module manager page

**Kind**: global class  
**Extends**: <code>BOBasePage</code>  

* [ModuleManager](#ModuleManager) ⇐ <code>BOBasePage</code>
    * [.goToSelectionPage(page)](#ModuleManager+goToSelectionPage) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.searchModule(page, moduleTag, moduleName)](#ModuleManager+searchModule) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.goToConfigurationPage(page, moduleName)](#ModuleManager+goToConfigurationPage) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.isModuleEnabled(page, moduleName)](#ModuleManager+isModuleEnabled) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.uploadModule(page, filePath)](#ModuleManager+uploadModule) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.closeUploadModuleModal(page)](#ModuleManager+closeUploadModuleModal) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.disableModule(page, moduleTag, moduleName)](#ModuleManager+disableModule) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.enableModule(page, moduleName)](#ModuleManager+enableModule) ⇒ <code>Promise.&lt;string&gt;</code>

<a name="ModuleManager+goToSelectionPage"></a>

### moduleManager.goToSelectionPage(page) ⇒ <code>Promise.&lt;void&gt;</code>
Go to selection subTab

**Kind**: instance method of [<code>ModuleManager</code>](#ModuleManager)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |

<a name="ModuleManager+searchModule"></a>

### moduleManager.searchModule(page, moduleTag, moduleName) ⇒ <code>Promise.&lt;void&gt;</code>
Search Module in Page module Catalog

**Kind**: instance method of [<code>ModuleManager</code>](#ModuleManager)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| moduleTag | <code>string</code> | Tag of the module |
| moduleName | <code>string</code> | Name of the module |

<a name="ModuleManager+goToConfigurationPage"></a>

### moduleManager.goToConfigurationPage(page, moduleName) ⇒ <code>Promise.&lt;void&gt;</code>
Click on button configure of a module

**Kind**: instance method of [<code>ModuleManager</code>](#ModuleManager)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| moduleName | <code>string</code> | Name of the module |

<a name="ModuleManager+isModuleEnabled"></a>

### moduleManager.isModuleEnabled(page, moduleName) ⇒ <code>Promise.&lt;boolean&gt;</code>
Get status of module (enable/disable)

**Kind**: instance method of [<code>ModuleManager</code>](#ModuleManager)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| moduleName | <code>string</code> | Name of the module |

<a name="ModuleManager+uploadModule"></a>

### moduleManager.uploadModule(page, filePath) ⇒ <code>Promise.&lt;boolean&gt;</code>
Upload a module and returns a success or failure

**Kind**: instance method of [<code>ModuleManager</code>](#ModuleManager)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| filePath | <code>string</code> | Module file path |

<a name="ModuleManager+closeUploadModuleModal"></a>

### moduleManager.closeUploadModuleModal(page) ⇒ <code>Promise.&lt;void&gt;</code>
Close upload module modal

**Kind**: instance method of [<code>ModuleManager</code>](#ModuleManager)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |

<a name="ModuleManager+disableModule"></a>

### moduleManager.disableModule(page, moduleTag, moduleName) ⇒ <code>Promise.&lt;string&gt;</code>
Disable module

**Kind**: instance method of [<code>ModuleManager</code>](#ModuleManager)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| moduleTag | <code>string</code> | Tag of the module |
| moduleName | <code>string</code> | Name of the module |

<a name="ModuleManager+enableModule"></a>

### moduleManager.enableModule(page, moduleName) ⇒ <code>Promise.&lt;string&gt;</code>
Enable module

**Kind**: instance method of [<code>ModuleManager</code>](#ModuleManager)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| moduleName | <code>string</code> | Name of the module |

