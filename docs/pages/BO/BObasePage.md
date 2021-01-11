<a name="BOBasePage"></a>

## BOBasePage ⇐ <code>CommonPage</code>
BO parent page, contains functions that can be used in every BO page

**Kind**: global class  
**Extends**: <code>CommonPage</code>  

* [BOBasePage](#BOBasePage) ⇐ <code>CommonPage</code>
    * [.goToSubMenu(page, parentSelector, linkSelector)](#BOBasePage+goToSubMenu) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.logoutBO(page)](#BOBasePage+logoutBO) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.closeOnboardingModal(page)](#BOBasePage+closeOnboardingModal) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.viewMyShop(page)](#BOBasePage+viewMyShop) ⇒
    * [.setValueOnTinymceInput(page, iFrameSelector, value)](#BOBasePage+setValueOnTinymceInput) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.closeSfToolBar(page)](#BOBasePage+closeSfToolBar) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.isSubmenuVisible(page, parentSelector, linkSelector)](#BOBasePage+isSubmenuVisible) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.getGrowlMessageContent(page)](#BOBasePage+getGrowlMessageContent) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.closeGrowlMessage(page)](#BOBasePage+closeGrowlMessage) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.getAlertDangerMessage(page)](#BOBasePage+getAlertDangerMessage) ⇒ <code>Promise.&lt;string&gt;</code>

<a name="BOBasePage+goToSubMenu"></a>

### boBasePage.goToSubMenu(page, parentSelector, linkSelector) ⇒ <code>Promise.&lt;void&gt;</code>
Open a subMenu if closed and click on a sublink

**Kind**: instance method of [<code>BOBasePage</code>](#BOBasePage)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| parentSelector | <code>string</code> | String of the parent element on menu |
| linkSelector | <code>string</code> | String of the child element to click on |

<a name="BOBasePage+logoutBO"></a>

### boBasePage.logoutBO(page) ⇒ <code>Promise.&lt;void&gt;</code>
Returns to the dashboard then logout

**Kind**: instance method of [<code>BOBasePage</code>](#BOBasePage)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |

<a name="BOBasePage+closeOnboardingModal"></a>

### boBasePage.closeOnboardingModal(page) ⇒ <code>Promise.&lt;void&gt;</code>
Close the onboarding modal if exists

**Kind**: instance method of [<code>BOBasePage</code>](#BOBasePage)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |

<a name="BOBasePage+viewMyShop"></a>

### boBasePage.viewMyShop(page) ⇒
Click on View My Shop and wait for page to open in a new Tab

**Kind**: instance method of [<code>BOBasePage</code>](#BOBasePage)  
**Returns**: FOPage, page opened  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |

<a name="BOBasePage+setValueOnTinymceInput"></a>

### boBasePage.setValueOnTinymceInput(page, iFrameSelector, value) ⇒ <code>Promise.&lt;void&gt;</code>
Set value on tinyMce textarea

**Kind**: instance method of [<code>BOBasePage</code>](#BOBasePage)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| iFrameSelector | <code>string</code> | String to locate the iFrame |
| value | <code>string</code> | The value to put on input |

<a name="BOBasePage+closeSfToolBar"></a>

### boBasePage.closeSfToolBar(page) ⇒ <code>Promise.&lt;void&gt;</code>
Close symfony Toolbar

**Kind**: instance method of [<code>BOBasePage</code>](#BOBasePage)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |

<a name="BOBasePage+isSubmenuVisible"></a>

### boBasePage.isSubmenuVisible(page, parentSelector, linkSelector) ⇒ <code>Promise.&lt;boolean&gt;</code>
Check if Submenu is visible

**Kind**: instance method of [<code>BOBasePage</code>](#BOBasePage)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| parentSelector | <code>string</code> | String of the parent element on menu |
| linkSelector | <code>string</code> | String of the child element to click on |

<a name="BOBasePage+getGrowlMessageContent"></a>

### boBasePage.getGrowlMessageContent(page) ⇒ <code>Promise.&lt;string&gt;</code>
Get growl message content

**Kind**: instance method of [<code>BOBasePage</code>](#BOBasePage)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |

<a name="BOBasePage+closeGrowlMessage"></a>

### boBasePage.closeGrowlMessage(page) ⇒ <code>Promise.&lt;void&gt;</code>
Close growl message and return its value

**Kind**: instance method of [<code>BOBasePage</code>](#BOBasePage)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |

<a name="BOBasePage+getAlertDangerMessage"></a>

### boBasePage.getAlertDangerMessage(page) ⇒ <code>Promise.&lt;string&gt;</code>
Get error message from alert danger block

**Kind**: instance method of [<code>BOBasePage</code>](#BOBasePage)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |

