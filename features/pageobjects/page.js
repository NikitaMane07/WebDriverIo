/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(path) {
        return browser.url(`${browser.options.baseUrl}/${path}`)
    }

    async clickElement(element){
        await $(element).click();
    }

    async waitForEnabled(element){
        console.log("inside of wait for step")
        browser.pause(10000)
        await $(element).waitForEnabled();
    }

    async sendData(data, element){
        await $(element).setValue(data)
    }

    async isElementDisplayed(element){
        await $(element).isDisplayed()
    }

    async storeElementValue(type, selector, mapKey) {
        const value = (type === 'value') ? $(selector).getValue() : $(selector).getValue();
        global.map.set(mapKey, value);
    }

    async checkEqualsOrContains(selector,value){
        const myInput = $(selector)
        await expect(myInput).toHaveText(value)
    }
    
    async getValueOfElements(type, selector, mapKey) {
        const value = (type === 'value') ? await $(selector).getValue() : await $(selector).getText();
        console.log("Value is "+ value)
        global.map.set(mapKey, value);
    }

    /**
     * To set value to an inputfiled from global map
     * @param {String} mapKey map key to get value
     * @param {String} selector element locator
     * @returns {undefined}
     */
    setInputfieldValueFromMap(mapKey, selector) {
        const value = global.map.get(mapKey);
        sendData(value, selector);
    }
}
