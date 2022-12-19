/// <reference types = "cypress" />

describe('Cypress Hooks - Before Example', ()=> {

    beforeEach( ()=> {
        cy.visit('https://itera-qa.azurewebsites.net/Login')
    });

    // afterEach( ()=> {
    //     cy.get('.nav-link').last().should('have.text','Log out').click()
    // })
    
    it("Check login by Valid User", ()=> {
        cy.get("[name='login']").should('be.visible')
          .log('User successfully launched the application')

          cy.get('#Username')
          .should('be.visible')
          .type('krishnacy')
        cy.get("[type='password']").type('Test@1234')
        cy.get('.btn-primary').click()

        cy.get('.container h3').contains('Welcome krishnacy')
        cy.get('.nav-link').last().should('have.text','Log out')
        cy.url().should('include','Dashboard')
    })

    it('Check login by InValid User', ()=> {        
        cy.get("[name='login']").should('be.visible')
          .log('User successfully launched the application')

          cy.get('#Username')
          .should('be.visible')
          .type('krishnacy')
        cy.get("[type='password']").type('Test@12345')
        cy.get('.btn-primary').click()

        cy.get('table tbody td label.alert-danger')
          .should('have.text','Wrong username or password')
          .log('user finds the error message says inavid username & password')
    });
    
})