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
        const value = (type === 'text') ? $(selector).getText() : $(selector).getValue();
        global.map.set(mapKey, value);
    }

    async checkEqualsOrContains(selector,value){
        const myInput = $(selector)
        await expect(myInput).toHaveText(value)
    }
    
}
