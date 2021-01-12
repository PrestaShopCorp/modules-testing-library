<a name="Login"></a>

## Login ⇐ <code>BOBasePage</code>
BO dashboard page

**Kind**: global class  
**Extends**: <code>BOBasePage</code>  

* [Login](#Login) ⇐ <code>BOBasePage</code>
    * [.login(page, email, password, waitForNavigation)](#Login+login) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.getLoginError(page)](#Login+getLoginError) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.getPrestashopVersion(page)](#Login+getPrestashopVersion) ⇒ <code>Promise.&lt;string&gt;</code>

<a name="Login+login"></a>

### login.login(page, email, password, waitForNavigation) ⇒ <code>Promise.&lt;void&gt;</code>
Enter credentials and submit login form

**Kind**: instance method of [<code>Login</code>](#Login)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| page | <code>Page</code> |  | Browser tab |
| email | <code>string</code> |  | Email to set for login |
| password | <code>string</code> |  | Password to set for login |
| waitForNavigation | <code>boolean</code> | <code>true</code> | False if login should fail (No navigation needed) |

<a name="Login+getLoginError"></a>

### login.getLoginError(page) ⇒ <code>Promise.&lt;string&gt;</code>
Get login error

**Kind**: instance method of [<code>Login</code>](#Login)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |

<a name="Login+getPrestashopVersion"></a>

### login.getPrestashopVersion(page) ⇒ <code>Promise.&lt;string&gt;</code>
Get prestashop version from login page

**Kind**: instance method of [<code>Login</code>](#Login)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |

