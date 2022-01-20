Feature: Your Logo a new experience Website check Login and Product purchase fetaure
  As a developer I should be able to test the login functionality

  Background:
    Given I am on the login page

  Scenario: As a user, I can log into the secure area
    Given I click on the element ".header_user_info a"
    And   I add mail id "3" to element "#email_create"
    And   I click on the element "#SubmitCreate"
    And   I send data "FirstName" to element "#customer_firstname"
    And   I send data "LastName" to element "#customer_lastname"
    And   I store value of element "#email" as "emailId" in map
    And   I send data "LastNameFirst07" to element "#passwd"
    And   I store value of element "#passwd" as "password" in map
    And   I send data "FirstName" to element "#firstname"
    And   I send data "LastName" to element "#lastname"
    And   I send data "Sr no.-12,abc" to element "#address1"
    And   I send data "Mumbai" to element "#city"
    When  I click on the element "#uniform-id_state"
    And   I click on the element "//select[@id='id_state']/option[text()='Arizona']"
    And   I add number "5" to element "#postcode"
    And   I add number "9" to element "#phone_mobile"
    And   I click on the element "#submitAccount"
    Then  I expect that element ".header_user_info span" to have text "FirstName LastName"
    And   I click on the element "//a[@title='Log me out']"

  Scenario: As a user, I buy product and proceed to payment
    Given I click on the element ".header_user_info a"
    And   I enter value saved in map as "emailId" to the inputfield "//input[@id='email']"
    And   I enter value saved in map as "password" to the inputfield "//input[@id='passwd']"
    And   I click on the element "//button[@id='SubmitLogin']"
    And   I send data "Faded Short Sleeve T-shirts" to element "//input[@id='search_query_top']"
    When  I click on the element "//button[@name='submit_search']"
    And   I click on the element "//div[@class='product-image-container']"
    And   I click on the element "//span[text()='Add to cart']"
    And   I pause for "20000"
    And   I click on the element "//div//a[@title='Proceed to checkout']"
    And   I click on the element "//span[text()='Proceed to checkout']"
    And   I click on the element "//span[text()='Proceed to checkout']"
    And   I click on the element "//div[@id='uniform-cgv']"
    And   I click on the element "//button[@name='processCarrier']"
    Then  I expect that element "//p[@class='product-name']" to have text "Faded Short Sleeve T-shirts"
    And   I click on the element "//a[@title='Log me out']"
