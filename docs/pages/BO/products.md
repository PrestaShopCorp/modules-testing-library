<a name="Product"></a>

## Product ⇐ <code>BOBasePage</code>
BO products listing page

**Kind**: global class  
**Extends**: <code>BOBasePage</code>  

* [Product](#Product) ⇐ <code>BOBasePage</code>
    * [.filterIDProducts(page, min, max)](#Product+filterIDProducts) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.getProductIDFromList(page, row)](#Product+getProductIDFromList) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.getProductNameFromList(page, row)](#Product+getProductNameFromList) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.getProductReferenceFromList(page, row)](#Product+getProductReferenceFromList) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.getProductCategoryFromList(page, row)](#Product+getProductCategoryFromList) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.filterPriceProducts(page, min, max)](#Product+filterPriceProducts) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.getProductPriceFromList(page, row)](#Product+getProductPriceFromList) ⇒ <code>Promise.&lt;number&gt;</code>
    * [.filterQuantityProducts(page, min, max)](#Product+filterQuantityProducts) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.getProductQuantityFromList(page, row)](#Product+getProductQuantityFromList) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.filterProducts(page, filterBy, value, filterType)](#Product+filterProducts) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.getTextColumn(page, column, row)](#Product+getTextColumn) ⇒ <code>Promise.&lt;(string\|number)&gt;</code>
    * [.getAllRowsColumnContent(page, column)](#Product+getAllRowsColumnContent) ⇒ <code>Promise.&lt;Array&gt;</code>
    * [.getNumberOfProductsFromList(page)](#Product+getNumberOfProductsFromList) ⇒ <code>Promise.&lt;number&gt;</code>
    * [.resetFilter(page)](#Product+resetFilter) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.resetAndGetNumberOfLines(page)](#Product+resetAndGetNumberOfLines) ⇒ <code>Promise.&lt;number&gt;</code>
    * [.resetFilterCategory(page)](#Product+resetFilterCategory) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.goToAddProductPage(page)](#Product+goToAddProductPage) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.goToEditProductPage(page, row)](#Product+goToEditProductPage) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.openProductDropdown(page, row)](#Product+openProductDropdown) ⇒ <code>Promise.&lt;void&gt;</code>
    * [.duplicateProduct(page, row)](#Product+duplicateProduct) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.deleteProduct(page, productData)](#Product+deleteProduct) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.deleteAllProductsWithBulkActions(page)](#Product+deleteAllProductsWithBulkActions) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.bulkSetStatus(page, status)](#Product+bulkSetStatus) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.getProductStatusFromList(page, row)](#Product+getProductStatusFromList) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.setProductStatus(page, row, status)](#Product+setProductStatus) ⇒ <code>Promise.&lt;boolean&gt;</code>

<a name="Product+filterIDProducts"></a>

### product.filterIDProducts(page, min, max) ⇒ <code>Promise.&lt;void&gt;</code>
Filter products Min - Max

**Kind**: instance method of [<code>Product</code>](#Product)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| min | <code>number</code> | Minimum id to search |
| max | <code>number</code> | Maximum id to search |

<a name="Product+getProductIDFromList"></a>

### product.getProductIDFromList(page, row) ⇒ <code>Promise.&lt;string&gt;</code>
Get Product ID

**Kind**: instance method of [<code>Product</code>](#Product)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| row | <code>number</code> | Product row number in table |

<a name="Product+getProductNameFromList"></a>

### product.getProductNameFromList(page, row) ⇒ <code>Promise.&lt;string&gt;</code>
Get Product Name

**Kind**: instance method of [<code>Product</code>](#Product)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| row | <code>number</code> | Product row number in table |

<a name="Product+getProductReferenceFromList"></a>

### product.getProductReferenceFromList(page, row) ⇒ <code>Promise.&lt;string&gt;</code>
Get Product Reference

**Kind**: instance method of [<code>Product</code>](#Product)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| row | <code>number</code> | Product row number in table |

<a name="Product+getProductCategoryFromList"></a>

### product.getProductCategoryFromList(page, row) ⇒ <code>Promise.&lt;string&gt;</code>
Get Product Category

**Kind**: instance method of [<code>Product</code>](#Product)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| row | <code>number</code> | Product row number in table |

<a name="Product+filterPriceProducts"></a>

### product.filterPriceProducts(page, min, max) ⇒ <code>Promise.&lt;void&gt;</code>
Filter price Min - Max

**Kind**: instance method of [<code>Product</code>](#Product)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| min | <code>number</code> | Minimum price to search |
| max | <code>number</code> | Maximum price to search |

<a name="Product+getProductPriceFromList"></a>

### product.getProductPriceFromList(page, row) ⇒ <code>Promise.&lt;number&gt;</code>
Get Product Price

**Kind**: instance method of [<code>Product</code>](#Product)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| row | <code>number</code> | Product row number in table |

<a name="Product+filterQuantityProducts"></a>

### product.filterQuantityProducts(page, min, max) ⇒ <code>Promise.&lt;void&gt;</code>
Filter Quantity Min - Max

**Kind**: instance method of [<code>Product</code>](#Product)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| min | <code>number</code> | Minimum quantity to search |
| max | <code>number</code> | Maximum quantity to search |

<a name="Product+getProductQuantityFromList"></a>

### product.getProductQuantityFromList(page, row) ⇒ <code>Promise.&lt;string&gt;</code>
Get Product Quantity

**Kind**: instance method of [<code>Product</code>](#Product)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| row | <code>number</code> | Product row number in table |

<a name="Product+filterProducts"></a>

### product.filterProducts(page, filterBy, value, filterType) ⇒ <code>Promise.&lt;void&gt;</code>
Filter products

**Kind**: instance method of [<code>Product</code>](#Product)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| page | <code>Page</code> |  | Browser tab |
| filterBy | <code>string</code> |  | Column name to filter with |
| value | <code>string</code> |  | String value to search |
| filterType | <code>string</code> | <code>&quot;input&quot;</code> | type of the filter (input / select) |

<a name="Product+getTextColumn"></a>

### product.getTextColumn(page, column, row) ⇒ <code>Promise.&lt;(string\|number)&gt;</code>
Get Text Column

**Kind**: instance method of [<code>Product</code>](#Product)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| column | <code>string</code> | Column name to get text from |
| row | <code>number</code> | Product row number in table |

<a name="Product+getAllRowsColumnContent"></a>

### product.getAllRowsColumnContent(page, column) ⇒ <code>Promise.&lt;Array&gt;</code>
Get content from all rows

**Kind**: instance method of [<code>Product</code>](#Product)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| column | <code>string</code> | Column name to get text from |

<a name="Product+getNumberOfProductsFromList"></a>

### product.getNumberOfProductsFromList(page) ⇒ <code>Promise.&lt;number&gt;</code>
Get number of products displayed in list

**Kind**: instance method of [<code>Product</code>](#Product)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |

<a name="Product+resetFilter"></a>

### product.resetFilter(page) ⇒ <code>Promise.&lt;void&gt;</code>
Reset input filters

**Kind**: instance method of [<code>Product</code>](#Product)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |

<a name="Product+resetAndGetNumberOfLines"></a>

### product.resetAndGetNumberOfLines(page) ⇒ <code>Promise.&lt;number&gt;</code>
Reset Filter And get number of elements in list

**Kind**: instance method of [<code>Product</code>](#Product)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |

<a name="Product+resetFilterCategory"></a>

### product.resetFilterCategory(page) ⇒ <code>Promise.&lt;void&gt;</code>
Reset DropDown Filter Category

**Kind**: instance method of [<code>Product</code>](#Product)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |

<a name="Product+goToAddProductPage"></a>

### product.goToAddProductPage(page) ⇒ <code>Promise.&lt;void&gt;</code>
GOTO form Add Product

**Kind**: instance method of [<code>Product</code>](#Product)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |

<a name="Product+goToEditProductPage"></a>

### product.goToEditProductPage(page, row) ⇒ <code>Promise.&lt;void&gt;</code>
GOTO edit products page from row

**Kind**: instance method of [<code>Product</code>](#Product)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| row | <code>number</code> | Product row number in table |

<a name="Product+openProductDropdown"></a>

### product.openProductDropdown(page, row) ⇒ <code>Promise.&lt;void&gt;</code>
Open row dropdown for a products

**Kind**: instance method of [<code>Product</code>](#Product)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| row | <code>number</code> | Product row number in table |

<a name="Product+duplicateProduct"></a>

### product.duplicateProduct(page, row) ⇒ <code>Promise.&lt;string&gt;</code>
Duplicate products

**Kind**: instance method of [<code>Product</code>](#Product)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| row | <code>number</code> | Product row number in table |

<a name="Product+deleteProduct"></a>

### product.deleteProduct(page, productData) ⇒ <code>Promise.&lt;string&gt;</code>
Delete products with dropdown Menu

**Kind**: instance method of [<code>Product</code>](#Product)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| productData |  |  |

<a name="Product+deleteAllProductsWithBulkActions"></a>

### product.deleteAllProductsWithBulkActions(page) ⇒ <code>Promise.&lt;string&gt;</code>
Delete All products with Bulk Actions

**Kind**: instance method of [<code>Product</code>](#Product)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |

<a name="Product+bulkSetStatus"></a>

### product.bulkSetStatus(page, status) ⇒ <code>Promise.&lt;string&gt;</code>
Bulk set status

**Kind**: instance method of [<code>Product</code>](#Product)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| status | <code>boolean</code> | Wanted status of products |

<a name="Product+getProductStatusFromList"></a>

### product.getProductStatusFromList(page, row) ⇒ <code>Promise.&lt;boolean&gt;</code>
Get Value of column Displayed

**Kind**: instance method of [<code>Product</code>](#Product)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Page</code> | Browser tab |
| row | <code>number</code> | Product row number in table, row in table |

<a name="Product+setProductStatus"></a>

### product.setProductStatus(page, row, status) ⇒ <code>Promise.&lt;boolean&gt;</code>
Quick edit toggle column value

**Kind**: instance method of [<code>Product</code>](#Product)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - return true if action is done, false otherwise  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| page | <code>Page</code> |  | Browser tab |
| row | <code>number</code> |  | Product row number in table, row in table |
| status | <code>boolean</code> | <code>true</code> | Value wanted in column |

