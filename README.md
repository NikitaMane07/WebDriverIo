# WebDriverIo
This repository contains a Test framework for BDD cucumber
It uses the `chromedriver` NPM package that wraps the ChromeDriver for you. This service does not require a Selenium server, but uses ChromeDriver to communicate with the browser directly.

### Installation

This project is tested on **Node v12.0.0** and above.  While earlier versions of node may be compatible, but they have not been verified.

`Node.JS:` Install  from the site - https://nodejs.org/en/  take the LTS version based on your Operating system. Please make sure you install NodeJS globally. To take full advantage of the command line and use grunt tasks you will need to make sure that you have added `node_modules/.bin` to your `$PATH`.  Otherwise you will need to install `npm install -g  grunt-cli` globally.

### Run Some Sample Tests

To execute the entire test suite in local development, you can use any one of the options mentioned below

Option 1: `scripts`. Go to pacakge.json and right click on the key and run script it will run the feature files mentioned in wdio config file.

Option 2: `npm run test-local`. This executes all features in the [`./test/features/*.feature`] directory.

### Config Files

WebdriverIO uses configuration files to setup and execute tests in specific ways.  The configuration is fully customizable, and different functions can be invoked before, during and after each test or test suite.  Config files can be found in the `/test/config/` directory and all end with `*.conf.js`.  These can be called via the the cli.

### Logs  

Complete set of execution `logs` will be generated during the run time and can be found in the parent folder location /logs.

### Reporters

WebdriverIO uses several different types of test reporters to communicate pass/failure.  

##### Spec

Test reporter, that prints detailed results to console.

##### Allure

The Allure Reporter creates [Allure](http://allure.qatools.ru/) test reports which is an HTML generated website with all necessary information to debug your test results and take a look on error screenshots. Add allure to the reporters array in config file and define the output directory of the allure reports.


# Allure Reporting

1. Install allure dependency

npm install @wdio/allure-reporter --save-dev


2 Install command line tools

npm install -g allure-commandline --save-dev


3 To clean and generate report
allure generate allure-results/ --clean && allure open
