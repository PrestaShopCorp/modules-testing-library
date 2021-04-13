<a name="CommonPage"></a>

## CommonPage
Parent page, contains functions that can be used in every page (BO, FO ...)

**Kind**: global class  

* [CommonPage](#CommonPage)
    * [.getPageTitle(page)](#CommonPage+getPageTitle) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.goTo(page, url)](#CommonPage+goTo) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.getCurrentURL(page)](#CommonPage+getCurrentURL) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.waitForSelector(page, selector, state, timeout)](#CommonPage+waitForSelector) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.waitForVisibleSelector(page, selector, timeout)](#CommonPage+waitForVisibleSelector) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.waitForHiddenSelector(page, selector, timeout)](#CommonPage+waitForHiddenSelector) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.waitForAttachedSelector(page, selector, timeout)](#CommonPage+waitForAttachedSelector) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.waitForDetachedSelector(page, selector, timeout)](#CommonPage+waitForDetachedSelector) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.getTextContent(page, selector, waitForSelector, timeout)](#CommonPage+getTextContent) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.getAttributeContent(page, selector, attribute)](#CommonPage+getAttributeContent) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.elementVisible(page, selector, timeout)](#CommonPage+elementVisible) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.elementNotVisible(page, selector, timeout)](#CommonPage+elementNotVisible) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.openLinkWithTargetBlank(page, selector, newPageSelector)](#CommonPage+openLinkWithTargetBlank) ⇒
    * [.reloadPage(page)](#CommonPage+reloadPage) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.setValue(page, selector, value)](#CommonPage+setValue) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.dialogListener(page, accept)](#CommonPage+dialogListener) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.closePage(browserContext, page, tabId)](#CommonPage+closePage) ⇒ <code>Promise.&lt;Page&gt;</code>
    * [.scrollTo(page, selector)](#CommonPage+scrollTo) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.selectByVisibleText(page, selector, textValue)](#CommonPage+selectByVisibleText) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.getNumberFromText(page, selector, timeout)](#CommonPage+getNumberFromText) ⇒ <code>Promise.&lt;number&gt;</code>
    * [.clickAndWaitForNavigation(page, selector, waitUntil)](#CommonPage+clickAndWaitForNavigation) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.goToPreviousPage(page, waitUntil)](#CommonPage+goToPreviousPage) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.isCheckboxSelected(page, selector)](#CommonPage+isCheckboxSelected) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.changeCheckboxValue(page, selector, valueWanted)](#CommonPage+changeCheckboxValue) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.dragAndDrop(page, selectorToDrag, selectorWhereToDrop)](#CommonPage+dragAndDrop) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.uploadFile(page, selector, filePath)](#CommonPage+uploadFile) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="CommonPage+getPageTitle"></a>

### commonPage.getPageTitle(page) ⇒ <code>Promise.&lt;string&gt;</code>
Get page title

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |

<a name="CommonPage+goTo"></a>

### commonPage.goTo(page, url) ⇒ <code>Promise.&lt;void&gt;</code>
Go to URL

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| url | <code>string</code> | URL to navigate to |

<a name="CommonPage+getCurrentURL"></a>

### commonPage.getCurrentURL(page) ⇒ <code>Promise.&lt;string&gt;</code>
Get current url

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |

<a name="CommonPage+waitForSelector"></a>

### commonPage.waitForSelector(page, selector, state, timeout) ⇒ <code>Promise.&lt;void&gt;</code>
Wait for selector to have a state

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| page | <code>Page</code> |  | Browser tab |
| selector | <code>string</code> |  | String to locate the element |
| state | <code>string</code> |  | State of the element to locate (visible / hidden / attached / detached) |
| timeout | <code>number</code> | <code>10000</code> | Time to wait in milliseconds |

<a name="CommonPage+waitForVisibleSelector"></a>

### commonPage.waitForVisibleSelector(page, selector, timeout) ⇒ <code>Promise.&lt;void&gt;</code>
Wait for selector to be visible

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| page | <code>Page</code> |  | Browser tab |
| selector | <code>string</code> |  | String to locate the element |
| timeout | <code>number</code> | <code>10000</code> | Time to wait in milliseconds |

<a name="CommonPage+waitForHiddenSelector"></a>

### commonPage.waitForHiddenSelector(page, selector, timeout) ⇒ <code>Promise.&lt;void&gt;</code>
Wait for selector to be visible

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| page | <code>Page</code> |  | Browser tab |
| selector | <code>string</code> |  | String to locate the element |
| timeout | <code>number</code> | <code>10000</code> | Time to wait in milliseconds |

<a name="CommonPage+waitForAttachedSelector"></a>

### commonPage.waitForAttachedSelector(page, selector, timeout) ⇒ <code>Promise.&lt;void&gt;</code>
Wait for selector to be attached

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| page | <code>Page</code> |  | Browser tab |
| selector | <code>string</code> |  | String to locate the element |
| timeout | <code>number</code> | <code>10000</code> | Time to wait in milliseconds |

<a name="CommonPage+waitForDetachedSelector"></a>

### commonPage.waitForDetachedSelector(page, selector, timeout) ⇒ <code>Promise.&lt;void&gt;</code>
Wait for selector to be detached

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| page | <code>Page</code> |  | Browser tab |
| selector | <code>string</code> |  | String to locate the element |
| timeout | <code>number</code> | <code>10000</code> | Time to wait in milliseconds |

<a name="CommonPage+getTextContent"></a>

### commonPage.getTextContent(page, selector, waitForSelector, timeout) ⇒ <code>Promise.&lt;string&gt;</code>
Get Text from element

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| page | <code>Page</code> |  | Browser tab |
| selector | <code>string</code> |  | String to locate the element |
| waitForSelector | <code>boolean</code> | <code>true</code> | True to wait for selector before |
| timeout | <code>number</code> | <code>10000</code> | Time to wait in milliseconds |

<a name="CommonPage+getAttributeContent"></a>

### commonPage.getAttributeContent(page, selector, attribute) ⇒ <code>Promise.&lt;string&gt;</code>
Get attribute content from an element

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| selector | <code>string</code> | String to locate the element |
| attribute | <code>string</code> | Name of the attribute |

<a name="CommonPage+elementVisible"></a>

### commonPage.elementVisible(page, selector, timeout) ⇒ <code>Promise.&lt;boolean&gt;</code>
Is element visible

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| page | <code>Page</code> |  | Browser tab |
| selector | <code>string</code> |  | String to locate the element |
| timeout | <code>number</code> | <code>10</code> | Time to wait in milliseconds |

<a name="CommonPage+elementNotVisible"></a>

### commonPage.elementNotVisible(page, selector, timeout) ⇒ <code>Promise.&lt;boolean&gt;</code>
Is element not visible

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| page | <code>Page</code> |  | Browser tab |
| selector | <code>string</code> |  | String to locate the element |
| timeout | <code>number</code> | <code>10</code> | Time to wait in milliseconds |

<a name="CommonPage+openLinkWithTargetBlank"></a>

### commonPage.openLinkWithTargetBlank(page, selector, newPageSelector) ⇒
Open link in new Tab and get opened tab

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  
**Returns**: newPage, what was opened by the browser  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| page | <code>Page</code> |  | Browser tab |
| selector | <code>string</code> |  | String to locate the element |
| newPageSelector | <code>string</code> | <code>&quot;body .logo&quot;</code> | String for the element to locate in the opened tab |

<a name="CommonPage+reloadPage"></a>

### commonPage.reloadPage(page) ⇒ <code>Promise.&lt;void&gt;</code>
Reload actual browser page

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |

<a name="CommonPage+setValue"></a>

### commonPage.setValue(page, selector, value) ⇒ <code>Promise.&lt;void&gt;</code>
Delete the existing text then type new value on input

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| selector | <code>string</code> | String to locate the element |
| value | <code>string</code> | String to type on input |

<a name="CommonPage+dialogListener"></a>

### commonPage.dialogListener(page, accept) ⇒ <code>Promise.&lt;void&gt;</code>
To accept or dismiss a navigator dialog

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| page | <code>Page</code> |  | Browser tab |
| accept | <code>boolean</code> | <code>true</code> | True to perform 'Ok' action, and false to perform 'cancel' action |

<a name="CommonPage+closePage"></a>

### commonPage.closePage(browserContext, page, tabId) ⇒ <code>Promise.&lt;Page&gt;</code>
Close actual tab and goto another tab if wanted

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  

| Param | Type | Description |
| --- | --- | --- |
| browserContext | <code>BrowserContext</code> | Actual browser context |
| page | <code>Page</code> | Browser tab |
| tabId | <code>number</code> | Tab id/position to go to after closing page |

<a name="CommonPage+scrollTo"></a>

### commonPage.scrollTo(page, selector) ⇒ <code>Promise.&lt;void&gt;</code>
Scroll to element

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| selector | <code>string</code> | String to locate the element |

<a name="CommonPage+selectByVisibleText"></a>

### commonPage.selectByVisibleText(page, selector, textValue) ⇒ <code>Promise.&lt;void&gt;</code>
Choose option in select element by its visible text

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| selector | <code>string</code> | String to locate the element |
| textValue | <code>string</code> | Value to the option to select in the select |

<a name="CommonPage+getNumberFromText"></a>

### commonPage.getNumberFromText(page, selector, timeout) ⇒ <code>Promise.&lt;number&gt;</code>
To get a number from text

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| page | <code>Page</code> |  | Browser tab |
| selector | <code>string</code> |  | String to locate the element |
| timeout | <code>number</code> | <code>0</code> | Time to wait in milliseconds |

<a name="CommonPage+clickAndWaitForNavigation"></a>

### commonPage.clickAndWaitForNavigation(page, selector, waitUntil) ⇒ <code>Promise.&lt;void&gt;</code>
Go to Page and wait for navigation

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| page | <code>Page</code> |  | Browser tab |
| selector | <code>string</code> |  | String to locate the element |
| waitUntil | <code>string</code> | <code>&quot;networkidle&quot;</code> | The event to wait after click (load/networkidle/domcontentloaded) |

<a name="CommonPage+goToPreviousPage"></a>

### commonPage.goToPreviousPage(page, waitUntil) ⇒ <code>Promise.&lt;void&gt;</code>
Navigate to the previous page in history

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| page | <code>Page</code> |  | Browser tab |
| waitUntil | <code>string</code> | <code>&quot;load&quot;</code> | The event to wait after going back (load/networkidle/domcontentloaded) |

<a name="CommonPage+isCheckboxSelected"></a>

### commonPage.isCheckboxSelected(page, selector) ⇒ <code>Promise.&lt;boolean&gt;</code>
Get selected value from a checkbox

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| selector | <code>string</code> | String to locate the element |

<a name="CommonPage+changeCheckboxValue"></a>

### commonPage.changeCheckboxValue(page, selector, valueWanted) ⇒ <code>Promise.&lt;void&gt;</code>
Set checkbox selected value

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| page | <code>Page</code> |  | Browser tab |
| selector | <code>string</code> |  | String to locate the element |
| valueWanted | <code>boolean</code> | <code>true</code> | True if we want to select checkBox, False to unselect |

<a name="CommonPage+dragAndDrop"></a>

### commonPage.dragAndDrop(page, selectorToDrag, selectorWhereToDrop) ⇒ <code>Promise.&lt;void&gt;</code>
Drag and drop element

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| selectorToDrag | <code>string</code> | String to locate the element to drag |
| selectorWhereToDrop | <code>string</code> | String to locate the element where to drop |

<a name="CommonPage+uploadFile"></a>

### commonPage.uploadFile(page, selector, filePath) ⇒ <code>Promise.&lt;void&gt;</code>
Upload file in input type=file

**Kind**: instance method of [<code>CommonPage</code>](#CommonPage)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| selector | <code>string</code> | String to locate the element |
| filePath | <code>string</code> | File path of the file to import |

