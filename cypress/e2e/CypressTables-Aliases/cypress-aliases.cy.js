/// <reference types = "cypress" />

describe('Cypress-aliases', ()=> {

    it('Aliases in cypress', ()=> {
        cy.visit('https://itera-qa.azurewebsites.net/Login')
        cy.get('#Username').as('userName')
        cy.get('@userName').type('krishnacy')
        cy.get('#Password').as('pwd')
        cy.get('@pwd').type('Test@1234')
    });

    it('Aliases in cypress-2', ()=> {
        cy.visit('https://itera-qa.azurewebsites.net/Login')
        cy.get('.nav-link').as('navbarlinks')

        cy.get('@navbarlinks').first().should('have.text', 'Home')
        cy.get('@navbarlinks').last().should('have.text', 'Login')
        cy.get('@navbarlinks').eq(3).should('have.text', 'Tutorial')
    });

});