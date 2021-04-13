<a name="AddProduct"></a>

## AddProduct ⇐ <code>BOBasePage</code>
BO add product page

**Kind**: global class  
**Extends**: <code>BOBasePage</code>  

* [AddProduct](#AddProduct) ⇐ <code>BOBasePage</code>
    * [.setValueOnTinymceInput(page, selector, value)](#AddProduct+setValueOnTinymceInput) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.setBasicSetting(page, productData)](#AddProduct+setBasicSetting) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.setProductStatus(page, wantedStatus)](#AddProduct+setProductStatus) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.saveProduct(page)](#AddProduct+saveProduct) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.createEditBasicProduct(page, productData)](#AddProduct+createEditBasicProduct) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.changeCheckboxValue(page, checkboxSelector, valueWanted)](#AddProduct+changeCheckboxValue) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.deleteProduct(page)](#AddProduct+deleteProduct) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.getErrorMessageWhenSummaryIsTooLong(page)](#AddProduct+getErrorMessageWhenSummaryIsTooLong) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.getOnlineButtonStatus(page)](#AddProduct+getOnlineButtonStatus) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.getProductName(page)](#AddProduct+getProductName) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.setProduct(page, productData)](#AddProduct+setProduct) ⇒ <code>Promise.&lt;string&gt;</code>

<a name="AddProduct+setValueOnTinymceInput"></a>

### addProduct.setValueOnTinymceInput(page, selector, value) ⇒ <code>Promise.&lt;void&gt;</code>
Set value on tinyMce textarea

**Kind**: instance method of [<code>AddProduct</code>](#AddProduct)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| selector | <code>string</code> | Selector of the tinymce input |
| value | <code>string</code> | Value to set on the input |

<a name="AddProduct+setBasicSetting"></a>

### addProduct.setBasicSetting(page, productData) ⇒ <code>Promise.&lt;void&gt;</code>
Set Name, type of product, Reference, price ATI, description and short description

**Kind**: instance method of [<code>AddProduct</code>](#AddProduct)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| productData | <code>json</code> | Product attributes to set on inputs |

<a name="AddProduct+setProductStatus"></a>

### addProduct.setProductStatus(page, wantedStatus) ⇒ <code>Promise.&lt;void&gt;</code>
Set product online or offline

**Kind**: instance method of [<code>AddProduct</code>](#AddProduct)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| wantedStatus | <code>boolean</code> | wanted status to set on product |

<a name="AddProduct+saveProduct"></a>

### addProduct.saveProduct(page) ⇒ <code>Promise.&lt;string&gt;</code>
Save product and close the growl message linked to

**Kind**: instance method of [<code>AddProduct</code>](#AddProduct)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |

<a name="AddProduct+createEditBasicProduct"></a>

### addProduct.createEditBasicProduct(page, productData) ⇒ <code>Promise.&lt;string&gt;</code>
Create basic product

**Kind**: instance method of [<code>AddProduct</code>](#AddProduct)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| productData | <code>json</code> | Product attributes to set on inputs |

<a name="AddProduct+changeCheckboxValue"></a>

### addProduct.changeCheckboxValue(page, checkboxSelector, valueWanted) ⇒ <code>Promise.&lt;void&gt;</code>
**Kind**: instance method of [<code>AddProduct</code>](#AddProduct)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| page | <code>Page</code> |  | Browser tab |
| checkboxSelector | <code>string</code> |  | selector of checkbox |
| valueWanted | <code>boolean</code> | <code>true</code> | true if we want to select checkBox, false otherwise |

<a name="AddProduct+deleteProduct"></a>

### addProduct.deleteProduct(page) ⇒ <code>Promise.&lt;string&gt;</code>
Delete product

**Kind**: instance method of [<code>AddProduct</code>](#AddProduct)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |

<a name="AddProduct+getErrorMessageWhenSummaryIsTooLong"></a>

### addProduct.getErrorMessageWhenSummaryIsTooLong(page) ⇒ <code>Promise.&lt;string&gt;</code>
Get the error message when short description is too long

**Kind**: instance method of [<code>AddProduct</code>](#AddProduct)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |

<a name="AddProduct+getOnlineButtonStatus"></a>

### addProduct.getOnlineButtonStatus(page) ⇒ <code>Promise.&lt;boolean&gt;</code>
Get online product status

**Kind**: instance method of [<code>AddProduct</code>](#AddProduct)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |

<a name="AddProduct+getProductName"></a>

### addProduct.getProductName(page) ⇒ <code>Promise.&lt;string&gt;</code>
Get product name from input

**Kind**: instance method of [<code>AddProduct</code>](#AddProduct)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |

<a name="AddProduct+setProduct"></a>

### addProduct.setProduct(page, productData) ⇒ <code>Promise.&lt;string&gt;</code>
Set product

**Kind**: instance method of [<code>AddProduct</code>](#AddProduct)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| productData | <code>json</code> | Product attributes to set on inputs |

