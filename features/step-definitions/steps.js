const { Given, When, Then } = require("@wdio/cucumber-framework");

const LoginPage = require("../pageobjects/login.page");

const pages = {
  login: LoginPage
};

Given(/^I am on the (\w+) page$/, async page => {
  await pages[page].open();
});

When(/^I login with "([^"]*)" and "([^"]*)"$/, async (username, password) => {
  await LoginPage.login(username, password);
});

When(/^I click on the element "([^"]*)"$/, async element => {
  await LoginPage.clickElement(element);
});

When(/^I pause for "([^"]*)"$/, async timeout => {
  await browser.pause(timeout);
});

When(/^I wait for "([^"]*)" to be enabled$/, async element => {
  console.log("Getting inside of wait for step");
  await LoginPage.waitForEnabled(element);
});

When(/^I send data "([^"]*)" to element "([^"]*)"$/, async (data, element) => {
  await LoginPage.sendData(data, element);
});

/**
 * To store value or text of an element in global map
 * @param {String} type type to use text or value
 * @param {String} selector element locator
 * @param {String} mapKey key to store in map as
 * @returns {undefined}
 */
When(
  /^I store (text|value) of element "([^"]*)?" as "([^"]*)?" in map$/,
  async (type, element, mapKey) => {
    await LoginPage.getValueOfElements(type, element, mapKey);
  }
);

/**
 * To set value to an inputfiled from global map
 * @param {String} mapKey map key to get value
 * @param {String} selector element locator
 * @returns {undefined}
 */
When(
  /^I enter value saved in map as "([^"]*)?" to the inputfield "([^"]*)?"$/,
  async (mapKey, selector) => {
    const value = global.map.get(mapKey);
    await LoginPage.sendData(value, selector);
  }
);

When(
  /^I add (mail id|number) "([^"]*)" to element "([^"]*)"$/,
  async (type, lengthValue, element) => {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let numbers = "123456789";

    if (type === "mail id") {
      let charactersLength = characters.length;
      for (let i = 0; i < lengthValue; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      result += "@gmail.com";
    } else {
      let numberLength = numbers.length;
      for (let i = 0; i < lengthValue; i++) {
        result += numbers.charAt(Math.floor(Math.random() * numberLength));
      }
    }
    console.log("result values~~~~~>>", result);
    await LoginPage.sendData(result, element);
  }
);

Then(
  /^I expect that element "([^"]*)?" to have text "([^"]*)?"$/,
  async (selector, value) => {
    await LoginPage.checkEqualsOrContains(selector, value);
  }
);

Then(/^I expect "([^"]*)" is displayed$/, async element => {
  await LoginPage.isElementDisplayed(element);
});
