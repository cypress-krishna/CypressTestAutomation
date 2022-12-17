/// <reference types = "cypress" />

describe('Login to the Application with Invalid Credentials', ()=> {

    it("Launch Application URL", ()=> {
        cy.visit('https://itera-qa.azurewebsites.net/Login')
        cy.get("[name='login']").should('be.visible')
          .log('User successfully launched the application')
          cy.screenshot()
    })

    it('Enter UserName and Invalid Password and click on Login button', ()=> {
        // cy.get('#Username')
        //   .should('be.visible')
        //   .type('krishnacy')
        // cy.get("[type='password']").type('Test@12345')
        // cy.get('.btn-primary').click()
        cy.LoginFunction("krishnacy", "Test@12345")
        cy.screenshot()
    });

    it('Verify User login is successful or not', ()=> {
        cy.get('table tbody td label.alert-danger')
          .should('have.text','Wrong username or password')
          .log('user finds the error message says inavid username & password')
          cy.screenshot()
    })

    
})