/// <reference types = "cypress"/>

import TestAutomation_PO from "../../support/pageobjects/testautomation";

describe('Fill Details of Test Automation Screen-2', ()=> {

    const testAutomation_PO = new TestAutomation_PO();

    it('Launch the url', ()=> {
        cy.visit('https://itera-qa.azurewebsites.net/')
        cy.get('.btn-lg').should('be.visible')
    });

    it('Click on Test Automation Navigation Link', ()=> {
        cy.navLinksClick("Test Automation");
        cy.get('.jumbotron h1')
          .should('contain','Test automation practice form')
    });

    it('Enter Name', ()=> {
        testAutomation_PO.enterName().type("Cypress2")        
    });

    it('Enter Mobile Number', ()=> {
        testAutomation_PO.enterMobileNumber("99999999")        
    });

    it('Enter Email Address', ()=> {
        testAutomation_PO.enterEmail("test@gmail.com")        
    });

    it('Enter Password', ()=> {
        testAutomation_PO.enterPassword("Test@1234")        
    });

    it('Enter Address and Click on Submit button', ()=> {
        testAutomation_PO.enterAddress().type("Hyderabad")
        testAutomation_PO.clickOnSubmitBtn().click()           
    });
});