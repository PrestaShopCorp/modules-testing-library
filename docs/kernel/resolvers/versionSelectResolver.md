<a name="VersionSelectResolver"></a>

## VersionSelectResolver
Class to get import needed files for the given version

**Kind**: global class  

* [VersionSelectResolver](#VersionSelectResolver)
    * [new VersionSelectResolver(version, ConfigClassMap)](#new_VersionSelectResolver_new)
    * [.getFilePath(selector)](#VersionSelectResolver+getFilePath) ⇒ <code>string</code>
    * [.require(selector)](#VersionSelectResolver+require) ⇒ <code>Module</code>

<a name="new_VersionSelectResolver_new"></a>

### new VersionSelectResolver(version, ConfigClassMap)

| Param | Type | Description |
| --- | --- | --- |
| version | <code>string</code> | PrestaShop version |
| ConfigClassMap | <code>json</code> | Optional parameter for added or override classes |

<a name="VersionSelectResolver+getFilePath"></a>

### versionSelectResolver.getFilePath(selector) ⇒ <code>string</code>
Get file path to require

**Kind**: instance method of [<code>VersionSelectResolver</code>](#VersionSelectResolver)  
**Returns**: <code>string</code> - Final path of the file to import  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>string</code> | Base path of the file to import |

<a name="VersionSelectResolver+require"></a>

### versionSelectResolver.require(selector) ⇒ <code>Module</code>
Get file path and require it

**Kind**: instance method of [<code>VersionSelectResolver</code>](#VersionSelectResolver)  
**Returns**: <code>Module</code> - Object of the path given  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>string</code> | Base path of the file to import |

