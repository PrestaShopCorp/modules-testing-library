const BOBasePage = require('../../BObasePage.js');

/**
 * BO products listing page
 * @class
 * @extends BOBasePage
 */
class Product extends BOBasePage {
  /**
   * @constructs
   * Creating products page (selectors and static messages)
   */
  constructor() {
    super();

    this.pageTitle = 'Products •';
    this.productDeletedSuccessfulMessage = 'Product successfully deleted.';
    this.productMultiDeletedSuccessfulMessage = 'Product(s) successfully deleted.';
    this.productDeactivatedSuccessfulMessage = 'Product successfully deactivated.';
    this.productActivatedSuccessfulMessage = 'Product successfully activated.';
    this.productMultiActivatedSuccessfulMessage = 'Product(s) successfully activated.';
    this.productMultiDeactivatedSuccessfulMessage = 'Product(s) successfully deactivated.';

    // Selectors
    // List of products
    this.productListForm = '#product_catalog_list';
    this.productTable = `${this.productListForm} table`;
    this.productRow = `${this.productTable} tbody tr`;
    this.productListfooterRow = `${this.productListForm} div.row:nth-of-type(3)`;
    this.productNumberBloc = `${this.productListfooterRow} ul.pagination + div`;
    this.dropdownToggleButton = row => `${this.productRow}:nth-of-type(${row}) button.dropdown-toggle`;
    this.dropdownMenu = row => `${this.productRow}:nth-of-type(${row}) div.dropdown-menu`;
    this.dropdownMenuDeleteLink = row => `${this.dropdownMenu(row)} a.product-edit[onclick*='delete']`;
    this.dropdownMenuPreviewLink = row => `${this.dropdownMenu(row)} a.product-edit:not([onclick])`;
    this.dropdownMenuDuplicateLink = row => `${this.dropdownMenu(row)} a.product-edit[onclick*='duplicate']`;
    this.productRowEditLink = row => `${this.productRow}:nth-of-type(${row}) a.tooltip-link.product-edit`;
    this.selectAllBulkCheckboxLabel = '#catalog-actions div.md-checkbox label';
    this.productBulkMenuButton = '#product_bulk_menu:not([disabled])';
    this.productBulkMenuButtonState = state => `${this.productBulkMenuButton}[aria-expanded='${state}']`;
    this.productBulkDropdownMenu = 'div.bulk-catalog div.dropdown-menu.show';
    this.productBulkDeleteLink = `${this.productBulkDropdownMenu} a[onclick*='delete_all']`;
    this.productBulkEnableLink = `${this.productBulkDropdownMenu} a[onclick*='activate_all']`;
    this.productBulkDisableLink = `${this.productBulkDropdownMenu} a[onclick*='deactivate_all']`;
    // Filters input
    this.productFilterIDMinInput = `${this.productListForm} #filter_column_id_product_min`;
    this.productFilterIDMaxInput = `${this.productListForm} #filter_column_id_product_max`;
    this.productFilterInput = filterBy => `${this.productListForm} input[name='filter_column_${filterBy}']`;
    this.productFilterSelect = filterBy => `${this.productListForm} select[name='filter_column_${filterBy}']`;
    this.productFilterPriceMinInput = `${this.productListForm} #filter_column_price_min`;
    this.productFilterPriceMaxInput = `${this.productListForm} #filter_column_price_max`;
    this.productFilterQuantityMinInput = `${this.productListForm} #filter_column_sav_quantity_min`;
    this.productFilterQuantityMaxInput = `${this.productListForm} #filter_column_sav_quantity_max`;
    this.filterSearchButton = `${this.productListForm} button[name='products_filter_submit']`;
    this.filterResetButton = `${this.productListForm} button[name='products_filter_reset']`;
    // Products list
    this.productsListTableRow = row => `${this.productRow}:nth-child(${row})`;
    this.productsListTableColumnID = row => `${this.productsListTableRow(row)}[data-product-id]`;
    this.productsListTableColumnName = row => `${this.productsListTableRow(row)} td:nth-child(4) a`;
    this.productsListTableColumnReference = row => `${this.productsListTableRow(row)} td:nth-child(5)`;
    this.productsListTableColumnCategory = row => `${this.productsListTableRow(row)} td:nth-child(6)`;
    this.productsListTableColumnPrice = row => `${this.productsListTableRow(row)} td:nth-child(7)`;
    this.productsListTableColumnQuantity = row => `${this.productsListTableRow(row)} td.product-sav-quantity`;
    this.productsListTableColumnStatus = row => `${this.productsListTableRow(row)} td:nth-child(10) .ps-switch`;
    this.productsListTableColumnStatusInput = row => `${this.productsListTableColumnStatus(row)} input`;
    // Filter Category
    this.treeCategoriesBloc = '#tree-categories';
    this.filterByCategoriesButton = '#product_catalog_category_tree_filter button';
    this.filterByCategoriesUnselectButton = `${this.treeCategoriesBloc} a#product_catalog_category_tree_filter_reset`;
    // HEADER buttons
    this.addProductButton = '#page-header-desc-configuration-add';
    // pagination
    this.paginationNextLink = '.page-item.next:not(.disabled) #pagination_next_url';
    // Modal Dialog
    this.catalogDeletionModalDialog = '#catalog_deletion_modal div.modal-dialog';
    this.modalDialogDeleteNowButton = `${this.catalogDeletionModalDialog} button[value='confirm']`;
  }

  /*
  Methods
   */
  /**
   * Filter products Min - Max
   * @param page {Page} Browser tab
   * @param min {number} Minimum id to search
   * @param max {number} Maximum id to search
   * @return {Promise<void>}
   */
  async filterIDProducts(page, min, max) {
    await page.type(this.productFilterIDMinInput, min.toString());
    await page.type(this.productFilterIDMaxInput, max.toString());
    await this.clickAndWaitForNavigation(page, this.filterSearchButton);
  }

  /**
   * Get Product ID
   * @param page {Page} Browser tab
   * @param row {number} Product row number in table
   * @returns {Promise<string>}
   */
  async getProductIDFromList(page, row) {
    return this.getNumberFromText(page, this.productsListTableColumnID(row));
  }

  /**
   * Get Product Name
   * @param page {Page} Browser tab
   * @param row {number} Product row number in table
   * @returns {Promise<string>}
   */
  async getProductNameFromList(page, row) {
    return this.getTextContent(page, this.productsListTableColumnName(row));
  }

  /**
   * Get Product Reference
   * @param page {Page} Browser tab
   * @param row {number} Product row number in table
   * @returns {Promise<string>}
   */
  async getProductReferenceFromList(page, row) {
    return this.getTextContent(page, this.productsListTableColumnReference(row));
  }

  /**
   * Get Product Category
   * @param page {Page} Browser tab
   * @param row {number} Product row number in table
   * @returns {Promise<string>}
   */
  async getProductCategoryFromList(page, row) {
    return this.getTextContent(page, this.productsListTableColumnCategory(row));
  }

  /**
   * Filter price Min - Max
   * @param page {Page} Browser tab
   * @param min {number} Minimum price to search
   * @param max {number} Maximum price to search
   * @return {Promise<void>}
   */
  async filterPriceProducts(page, min, max) {
    await page.type(this.productFilterPriceMinInput, min.toString());
    await page.type(this.productFilterPriceMaxInput, max.toString());
    await this.clickAndWaitForNavigation(page, this.filterSearchButton);
  }

  /**
   * Get Product Price
   * @param page {Page} Browser tab
   * @param row {number} Product row number in table
   * @returns {Promise<number>}
   */
  async getProductPriceFromList(page, row) {
    const text = await this.getTextContent(page, this.productsListTableColumnPrice(row));
    const price = /\d+(\.\d+)?/g.exec(text).toString();

    return parseFloat(price);
  }

  /**
   * Filter Quantity Min - Max
   * @param page {Page} Browser tab
   * @param min {number} Minimum quantity to search
   * @param max {number} Maximum quantity to search
   * @return {Promise<void>}
   */
  async filterQuantityProducts(page, min, max) {
    await page.type(this.productFilterQuantityMinInput, min.toString());
    await page.type(this.productFilterQuantityMaxInput, max.toString());
    await this.clickAndWaitForNavigation(page, this.filterSearchButton);
  }

  /**
   * Get Product Quantity
   * @param page {Page} Browser tab
   * @param row {number} Product row number in table
   * @returns {Promise<string>}
   */
  async getProductQuantityFromList(page, row) {
    return this.getNumberFromText(page, this.productsListTableColumnQuantity(row));
  }

  /**
   * Filter products
   * @param page {Page} Browser tab
   * @param filterBy {string} Column name to filter with
   * @param value {string} String value to search
   * @param filterType {string} type of the filter (input / select)
   * @return {Promise<void>}
   */
  async filterProducts(page, filterBy, value = '', filterType = 'input') {
    switch (filterType) {
      case 'input':
        switch (filterBy) {
          case 'id_product':
            await this.filterIDProducts(page, value.min, value.max);
            break;
          case 'price':
            await this.filterPriceProducts(page, value.min, value.max);
            break;
          case 'sav_quantity':
            await this.filterQuantityProducts(page, value.min, value.max);
            break;
          default:
            await page.type(this.productFilterInput(filterBy), value);
        }
        break;
      case 'select':
        await this.selectByVisibleText(
          page,
          this.productFilterSelect(filterBy),
          value ? 'Active' : 'Inactive',
        );
        break;
      default:
      // Do nothing
    }
    // click on search
    await this.clickAndWaitForNavigation(page, this.filterSearchButton);
  }

  /**
   * Get Text Column
   * @param page {Page} Browser tab
   * @param column{string} Column name to get text from
   * @param row {number} Product row number in table
   * @returns {Promise<string|number>}
   */
  async getTextColumn(page, column, row) {
    switch (column) {
      case 'id_product':
        return this.getProductIDFromList(page, row);
      case 'name':
        return this.getProductNameFromList(page, row);
      case 'reference':
        return this.getProductReferenceFromList(page, row);
      case 'name_category':
        return this.getProductCategoryFromList(page, row);
      case 'price':
        return this.getProductPriceFromList(page, row);
      case 'sav_quantity':
        return this.getProductQuantityFromList(page, row);
      case 'active':
        return this.getProductStatusFromList(page, row);
      default:
      // Do nothing
    }
    throw new Error(`${column} was not found as column`);
  }

  /**
   * Get content from all rows
   * @param page {Page} Browser tab
   * @param column {string} Column name to get text from
   * @return {Promise<[]>}
   */
  async getAllRowsColumnContent(page, column) {
    const rowsNumber = await this.getNumberOfProductsFromList(page);
    const allRowsContentTable = [];
    for (let i = 1; i <= rowsNumber; i++) {
      const rowContent = await this.getTextColumn(page, column, i);
      await allRowsContentTable.push(rowContent);
    }
    return allRowsContentTable;
  }

  /**
   * Get number of products displayed in list
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async getNumberOfProductsFromList(page) {
    const found = await this.elementVisible(page, this.paginationNextLink, 1000);
    // In case we filter products and there is only one page, link next from pagination does not appear
    if (!found) {
      return (await page.$$(this.productRow)).length;
    }

    const footerText = await this.getTextContent(page, this.productNumberBloc);
    const numberOfProduct = /\d+/g.exec(footerText.match(/out of ([0-9]+)/)).toString();
    return parseInt(numberOfProduct, 10);
  }

  /**
   * Reset input filters
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async resetFilter(page) {
    if (!(await this.elementNotVisible(page, this.filterResetButton, 2000))) {
      await this.clickAndWaitForNavigation(page, this.filterResetButton);
    }
    await this.waitForVisibleSelector(page, this.filterSearchButton, 2000);
  }

  /**
   * Reset Filter And get number of elements in list
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async resetAndGetNumberOfLines(page) {
    await this.resetFilter(page);
    return this.getNumberOfProductsFromList(page);
  }

  /**
   * Reset DropDown Filter Category
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async resetFilterCategory(page) {
    // Click and wait to be open
    await page.click(this.filterByCategoriesButton);
    await this.waitForVisibleSelector(page, `${this.filterByCategoriesButton}[aria-expanded='true']`);
    await Promise.all([
      this.waitForVisibleSelector(page, `${this.filterByCategoriesButton}[aria-expanded='false']`),
      this.clickAndWaitForNavigation(page, this.filterByCategoriesUnselectButton),
    ]);
  }

  /**
   * GOTO form Add Product
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async goToAddProductPage(page) {
    await this.clickAndWaitForNavigation(page, this.addProductButton);
  }

  /**
   * GOTO edit products page from row
   * @param page {Page} Browser tab
   * @param row {number} Product row number in table
   * @returns {Promise<void>}
   */
  async goToEditProductPage(page, row) {
    await this.clickAndWaitForNavigation(page, this.productRowEditLink(row));
  }

  /**
   * Open row dropdown for a products
   * @param page {Page} Browser tab
   * @param row {number} Product row number in table
   * @return {Promise<void>}
   */
  async openProductDropdown(page, row) {
    await Promise.all([
      this.waitForVisibleSelector(page, `${this.dropdownToggleButton(row)}[aria-expanded='true']`),
      page.click(this.dropdownToggleButton(row)),
    ]);
  }

  /**
   * Duplicate products
   * @param page {Page} Browser tab
   * @param row {number} Product row number in table
   * @return {Promise<string>}
   */
  async duplicateProduct(page, row) {
    // Open dropdown
    await this.openProductDropdown(page, row);

    // Duplicate products and go to add products page
    await this.clickAndWaitForNavigation(page, this.dropdownMenuDuplicateLink(row));

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Delete products with dropdown Menu
   * @param page {Page} Browser tab
   * @param productData
   * @returns {Promise<string>}
   */
  async deleteProduct(page, productData) {
    // Filter By reference first
    await this.filterProducts(page, 'reference', productData.reference);

    // Then delete first products and only products shown
    await Promise.all([
      this.waitForVisibleSelector(page, `${this.dropdownToggleButton(1)}[aria-expanded='true']`),
      page.click(this.dropdownToggleButton(1)),
    ]);

    await Promise.all([
      this.waitForVisibleSelector(page, this.catalogDeletionModalDialog),
      page.click(this.dropdownMenuDeleteLink(1)),
    ]);

    await this.clickAndWaitForNavigation(page, this.modalDialogDeleteNowButton);
    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Delete All products with Bulk Actions
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async deleteAllProductsWithBulkActions(page) {
    // Then delete first products and only products shown
    await Promise.all([
      this.waitForVisibleSelector(page, this.productBulkMenuButton),
      page.click(this.selectAllBulkCheckboxLabel),
    ]);

    await Promise.all([
      this.waitForVisibleSelector(page, this.productBulkMenuButtonState('true')),
      page.click(this.productBulkMenuButton),
    ]);

    await Promise.all([
      this.waitForVisibleSelector(page, this.catalogDeletionModalDialog),
      page.click(this.productBulkDeleteLink),
    ]);

    await this.clickAndWaitForNavigation(page, this.modalDialogDeleteNowButton);
    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Bulk set status
   * @param page {Page} Browser tab
   * @param status {boolean} Wanted status of products
   * @return {Promise<string>}
   */
  async bulkSetStatus(page, status) {
    await Promise.all([
      this.waitForVisibleSelector(page, this.productBulkMenuButton),
      page.click(this.selectAllBulkCheckboxLabel),
    ]);

    await Promise.all([
      this.waitForVisibleSelector(page, this.productBulkMenuButtonState('true')),
      page.click(this.productBulkMenuButton),
    ]);

    await this.clickAndWaitForNavigation(page, status ? this.productBulkEnableLink : this.productBulkDisableLink);
    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Get Value of column Displayed
   * @param page {Page} Browser tab
   * @param row {number} Product row number in table, row in table
   * @return {Promise<boolean>}
   */
  async getProductStatusFromList(page, row) {
    const inputValue = await this.getAttributeContent(
      page,
      `${this.productsListTableColumnStatusInput(row)}[checked]`,
      'value',
    );

    return inputValue !== '0';
  }

  /**
   * Quick edit toggle column value
   * @param page {Page} Browser tab
   * @param row {number} Product row number in table, row in table
   * @param status {boolean} Value wanted in column
   * @return {Promise<boolean>} return true if action is done, false otherwise
   */
  async setProductStatus(page, row, status = true) {
    await this.waitForVisibleSelector(page, this.productsListTableColumnStatus(row), 2000);

    const actualStatus = await this.getProductStatusFromList(page, row);

    if (actualStatus !== status) {
      await this.clickAndWaitForNavigation(page, this.productsListTableColumnStatus(row));
      return true;
    }

    return false;
  }
}

module.exports = new Product();
