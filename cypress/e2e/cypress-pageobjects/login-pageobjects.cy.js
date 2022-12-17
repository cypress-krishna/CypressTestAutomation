/// <reference types = "cypress" />

import LoginPage_PO from "../../support/pageobjects/loginPage";
import Dashboard_PO from "../../support/pageobjects/dashboard";
import TestAutomation_PO from "../../support/pageobjects/testautomation";

describe('Login Page Objects', ()=> {

    const loginPage_PO = new LoginPage_PO;
    const dashboard_PO= new Dashboard_PO;
    const testAutomation_PO = new TestAutomation_PO;

    it('Launch url', ()=> {
        cy.visit('https://itera-qa.azurewebsites.net/Login')
    });

    it('Enter UserName', ()=> {
        loginPage_PO.enterUSerName().type("krishnacy")
    });

    it("Enter Password", ()=> {
        loginPage_PO.enterPasswordA().type("Test@1234")
    });

    it("click on login button", ()=> {
        loginPage_PO.clickOnLoginButton().click()
    });

    it('check user login is successful or not', ()=> {
        dashboard_PO.verifyNavLinkElem("Log out")        
    });

    it('Click on Test Automation Navigation Link', ()=> {
        cy.navLinksClick("Test Automation");
        cy.get('.jumbotron h1')
          .should('contain','Test automation practice form')
    });

    it('Enter Name', ()=> {
        testAutomation_PO.enterName().type("Cypress1")
    });

    it('Enter Mobile Number', ()=> {
        testAutomation_PO.enterMobileNumber(8888888)
    });

    it('Enter Email Address', ()=> {
        testAutomation_PO.enterEmail("test@yahoo.com")
    });

    it('Enter Password', ()=> {
        testAutomation_PO.enterPassword("Test@1234")
    });

    it('Enter Address and Click on Submit button', ()=> {
        testAutomation_PO.enterAddress().type("Bangalore")
        testAutomation_PO.clickOnSubmitBtn().click()
    });



});