/// <reference types = "cypress"/>

describe('Handling Child Tabs in Cypress', ()=> {

    it('Working on Child Tabs in Cypress-1', ()=> {
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#datepicker').invoke('removeAttr','target').click()
        cy.get('.input-group-addon').should('be.visible')
    });

    it.only('Working on Child Tabs in Cypress-RedBus', ()=> {
        cy.visit('https://www.redbus.in/',{timeout:60000})
        cy.get('.hr-shelp').click()
        cy.get('#signInView').should('be.visible')
    });

});