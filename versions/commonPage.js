/**
 * Parent page, contains functions that can be used in every page (BO, FO ...)
 * @class
 */
class CommonPage {
  /**
   * Get page title
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getPageTitle(page) {
    return page.title();
  }

  /**
   * Go to URL
   * @param page {Page} Browser tab
   * @param url {string} URL to navigate to
   * @returns {Promise<void>}
   */
  async goTo(page, url) {
    await page.goto(url);
  }

  /**
   * Get current url
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getCurrentURL(page) {
    return decodeURIComponent(page.url());
  }

  /**
   * Wait for selector to have a state
   * @param page {Page} Browser tab
   * @param selector {string} String to locate the element
   * @param state {string} State of the element to locate (visible / hidden / attached / detached)
   * @param timeout {number} Time to wait in milliseconds
   * @returns {Promise<void>}
   */
  async waitForSelector(page, selector, state, timeout = 10000) {
    await page.waitForSelector(selector, {state, timeout});
  }

  /**
   * Wait for selector to be visible
   * @param page {Page} Browser tab
   * @param selector {string} String to locate the element
   * @param timeout {number} Time to wait in milliseconds
   * @return {Promise<void>}
   */
  async waitForVisibleSelector(page, selector, timeout = 10000) {
    await this.waitForSelector(page, selector, 'visible', timeout);
  }

  /**
   * Wait for selector to be visible
   * @param page {Page} Browser tab
   * @param selector {string} String to locate the element
   * @param timeout {number} Time to wait in milliseconds
   * @return {Promise<void>}
   */
  async waitForHiddenSelector(page, selector, timeout = 10000) {
    await this.waitForSelector(page, selector, 'hidden', timeout);
  }

  /**
   * Wait for selector to be attached
   * @param page {Page} Browser tab
   * @param selector {string} String to locate the element
   * @param timeout {number} Time to wait in milliseconds
   * @return {Promise<void>}
   */
  async waitForAttachedSelector(page, selector, timeout = 10000) {
    await this.waitForSelector(page, selector, 'attached', timeout);
  }

  /**
   * Wait for selector to be detached
   * @param page {Page} Browser tab
   * @param selector {string} String to locate the element
   * @param timeout {number} Time to wait in milliseconds
   * @return {Promise<void>}
   */
  async waitForDetachedSelector(page, selector, timeout = 10000) {
    await this.waitForSelector(page, selector, 'detached', timeout);
  }

  /**
   * Get Text from element
   * @param page {Page} Browser tab
   * @param selector {string} String to locate the element
   * @param waitForSelector {boolean} True to wait for selector before
   * @param timeout {number} Time to wait in milliseconds
   * @return {Promise<string>}
   */
  async getTextContent(page, selector, waitForSelector = true, timeout = 10000) {
    if (waitForSelector) {
      await this.waitForVisibleSelector(page, selector, timeout);
    }
    const textContent = await page.$eval(selector, el => el.textContent);
    return textContent.replace(/\s+/g, ' ').trim();
  }

  /**
   * Get attribute content from an element
   * @param page {Page} Browser tab
   * @param selector {string} String to locate the element
   * @param attribute {string} Name of the attribute
   * @returns {Promise<string>}
   */
  async getAttributeContent(page, selector, attribute) {
    await page.waitForSelector(selector, {state: 'attached'});
    return page.$eval(selector, (el, attr) => el
      .getAttribute(attr), attribute);
  }

  /**
   * Is element visible
   * @param page {Page} Browser tab
   * @param selector {string} String to locate the element
   * @param timeout {number} Time to wait in milliseconds
   * @returns {Promise<boolean>}
   */
  async elementVisible(page, selector, timeout = 10) {
    try {
      await this.waitForVisibleSelector(page, selector, timeout);
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Is element not visible
   * @param page {Page} Browser tab
   * @param selector {string} String to locate the element
   * @param timeout {number} Time to wait in milliseconds
   * @returns {Promise<boolean>}
   */
  async elementNotVisible(page, selector, timeout = 10) {
    try {
      await page.waitForSelector(selector, {state: 'hidden', timeout});
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Open link in new Tab and get opened tab
   * @param page {Page} Browser tab
   * @param selector {string} String to locate the element
   * @param newPageSelector {string} String for the element to locate in the opened tab
   * @return newPage, what was opened by the browser
   */
  async openLinkWithTargetBlank(page, selector, newPageSelector = 'body .logo') {
    const [newPage] = await Promise.all([
      page.waitForEvent('popup'),
      page.click(selector),
    ]);

    await newPage.waitForLoadState('networkidle');

    await newPage.waitForSelector(newPageSelector, {state: 'visible'});
    return newPage;
  }

  /**
   * Reload actual browser page
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async reloadPage(page) {
    await page.reload();
  }

  /**
   * Delete the existing text then type new value on input
   * @param page {Page} Browser tab
   * @param selector {string} String to locate the element
   * @param value {string} String to type on input
   * @return {Promise<void>}
   */
  async setValue(page, selector, value) {
    await page.click(selector);
    await page.click(selector, {clickCount: 3});

    // Delete text from input before typing
    await page.press(selector, 'Delete');
    await page.type(selector, value);
  }

  /**
   * To accept or dismiss a navigator dialog
   * @param page {Page} Browser tab
   * @param accept {boolean} True to perform 'Ok' action, and false to perform 'cancel' action
   * @return {Promise<void>}
   */
  async dialogListener(page, accept = true) {
    page.once('dialog', (dialog) => {
      if (accept) dialog.accept();
      else dialog.dismiss();
    });
  }

  /**
   * Close actual tab and goto another tab if wanted
   * @param browserContext {BrowserContext} Actual browser context
   * @param page {Page} Browser tab
   * @param tabId {number} Tab id/position to go to after closing page
   * @return {Promise<Page>}
   */
  async closePage(browserContext, page, tabId = -1) {
    await page.close();
    let focusedPage;
    if (tabId !== -1) {
      focusedPage = (await browserContext.pages())[tabId];
    }
    return focusedPage;
  }

  /**
   * Scroll to element
   * @param page {Page} Browser tab
   * @param selector {string} String to locate the element
   * @return {Promise<void>}
   */
  async scrollTo(page, selector) {
    await page.$eval(selector, el => el.scrollIntoView());
  }

  /**
   * Choose option in select element by its visible text
   * @param page {Page} Browser tab
   * @param selector {string} String to locate the element
   * @param textValue {string} Value to the option to select in the select
   * @returns {Promise<void>}
   */
  async selectByVisibleText(page, selector, textValue) {
    let found = false;
    let options = await page.$$eval(
      `${selector} option`,
      all => all.map(
        option => ({
          textContent: option.textContent,
          value: option.value,
        })),
    );
    options = await options.filter(option => textValue === option.textContent.trim());
    if (options.length !== 0) {
      const elementValue = await options[0].value;
      await page.selectOption(selector, elementValue);
      found = true;
    }
    if (!found) throw new Error(`${textValue} was not found as option of select`);
  }

  /**
   * To get a number from text
   * @param page {Page} Browser tab
   * @param selector {string} String to locate the element
   * @param timeout {number} Time to wait in milliseconds
   * @returns {Promise<number>}
   */
  async getNumberFromText(page, selector, timeout = 0) {
    await page.waitForTimeout(timeout);
    const text = await this.getTextContent(page, selector);
    const number = /\d+/g.exec(text).toString();
    return parseInt(number, 10);
  }

  /**
   * Go to Page and wait for navigation
   * @param page {Page} Browser tab
   * @param selector {string} String to locate the element
   * @param waitUntil {string} The event to wait after click (load/networkidle/domcontentloaded)
   * @return {Promise<void>}
   */
  async clickAndWaitForNavigation(page, selector, waitUntil = 'networkidle') {
    await Promise.all([
      page.waitForNavigation({waitUntil}),
      page.click(selector),
    ]);
  }

  /**
   * Navigate to the previous page in history
   * @param page {Page} Browser tab
   * @param waitUntil {string} The event to wait after going back (load/networkidle/domcontentloaded)
   * @return {Promise<void>}
   */
  async goToPreviousPage(page, waitUntil = 'load') {
    await page.goBack({waitUntil});
  }

  /**
   * Get selected value from a checkbox
   * @param page {Page} Browser tab
   * @param selector {string} String to locate the element
   * @return {Promise<boolean>}
   */
  async isCheckboxSelected(page, selector) {
    return page.$eval(selector, el => el.checked);
  }

  /**
   * Set checkbox selected value
   * @param page {Page} Browser tab
   * @param selector {string} String to locate the element
   * @param valueWanted {boolean} True if we want to select checkBox, False to unselect
   * @return {Promise<void>}
   */
  async changeCheckboxValue(page, selector, valueWanted = true) {
    if (valueWanted !== (await this.isCheckboxSelected(page, selector))) {
      await page.click(selector);
    }
  }


  /**
   * Drag and drop element
   * @param page {Page} Browser tab
   * @param selectorToDrag {string} String to locate the element to drag
   * @param selectorWhereToDrop {string} String to locate the element where to drop
   * @return {Promise<void>}
   */
  async dragAndDrop(page, selectorToDrag, selectorWhereToDrop) {
    await page.hover(selectorToDrag);
    await page.mouse.down();
    await page.hover(selectorWhereToDrop);
    await page.mouse.up();
  }


  /**
   * Upload file in input type=file
   * @param page {Page} Browser tab
   * @param selector {string} String to locate the element
   * @param filePath {string} File path of the file to import
   * @return {Promise<void>}
   */
  async uploadFile(page, selector, filePath) {
    const input = await page.$(selector);
    await input.setInputFiles(filePath);
  }
}

module.exports = CommonPage;
