Feature: Your Logo a new experience Website
As a developer i should be able to test the login functionality

Background:
    Given I am on the login page
  
  Scenario: As a user, I can log into the secure area
    # Given I am on the login page
    And   I click on the element ".header_user_info a"
    And   I add mail id "5" to element "#email_create"
    And   I click on the element "#SubmitCreate"
    And   I send data "FirstName" to element "#customer_firstname"
    And   I send data "LastName" to element "#customer_lastname"
    And   I add number "10" to element "#passwd"
    And   I send data "FirstName" to element "#firstname"
    And   I send data "LastName" to element "#lastname"
    And   I send data "Sr no.-12,abc" to element "#address1"
    And   I send data "Mumbai" to element "#city"
    When  I click on the element "#uniform-id_state"
    And   I click on the element "//select[@id='id_state']/option[text()='Arizona']"
    And   I add number "5" to element "#postcode"
    And   I add number "9" to element "#phone_mobile"
    And   I click on the element "#submitAccount"
    And  I pause for "30000"
    Then  I expect that element ".header_user_info span" to have text "FirstName LastName"
    # And I expect that element ".header_user_info span" contains text "FirstName LastName"


    # And I send data "FirstName" to element "input[formcontrolname='firstName']"
    # When I login with "kittupotnis@gmail.com" and "Samhith@20"
    # And I wait for "button[routerlink='/auth/employer/onboard-contractors']" to be enabled
    # And I click on the element "button[routerlink='/auth/employer/onboard-contractors']"
    # And I wait for "a[href='/auth/employer/onboard-contractors/multiple']" to be enabled
    # And I click on the element "a[href='/auth/employer/onboard-contractors/multiple']"
    # And I click on the element "//h3[text()='Add Individual']/../..//div[@class='align-self-center']"
    # # When I pause for "30000"
    # And I send data "FirstName" to element "input[formcontrolname='firstName']"
    # And I send data "LastName" to element "input[formcontrolname='lastName']"
    # And I add mail id "5" to element "input[placeholder='Email ID']"
    # And I add number "10" to element "input[placeholder='Phone Number']"
    # And I add number "9" to element "input[placeholder='SSN']"
    # # When I pause for "30000"
    # And I click on the element "//span[text()='Add Contractor']"
    # # When I pause for "30000"
    # Then I expect "label[nz-checkbox='']" is displayed
