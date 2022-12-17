/// <reference types = "cypress" />

describe('Login to the Application with Valid Credentials', ()=> {

    it("Launch Application URL", ()=> {
        cy.visit('https://itera-qa.azurewebsites.net/Login')
        cy.get("[name='login']").should('be.visible')
          .log('User successfully launched the application')
    })

    it('Enter UserName and Password and click on Login button', ()=> {
        // cy.get('#Username')
        //   .should('be.visible')
        //   .type('krishnacy')
        // cy.get("[type='password']").type('Test@1234')
        // cy.get('.btn-primary').click()
        cy.LoginFunction("krishnacy", "Test@1234")
    });

    it('Verify User login is successful or not', ()=> {
        cy.get('.container h3').contains('Welcome krishnacy')
        cy.get('.nav-link').last().should('have.text','Log out')
        cy.url().should('include','Dashboard')
    })

    
})