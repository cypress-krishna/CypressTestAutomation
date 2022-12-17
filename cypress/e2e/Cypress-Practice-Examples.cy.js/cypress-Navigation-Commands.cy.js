/// <reference types = "cypress" />

describe("Learning Cypress Navigation Commands", ()=> {

    it("launch URL", ()=> {
        cy.visit('https://itera-qa.azurewebsites.net')
        cy.get('.nav-link').eq(3).click()
        cy.get('.container h2').should('have.text','Tutorial')
        cy.pause()
        cy.go('back')
        cy.pause()
        cy.go('forward')
        cy.get('.container h2').should('have.text','Tutorial')

    });

});