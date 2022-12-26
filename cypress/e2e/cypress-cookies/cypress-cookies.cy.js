/// <reference types = "cypress" />

describe('cypress cookies', ()=> {

    it('How to get cypress cookies', function() {
        cy.visit('https://itera-qa.azurewebsites.net/Login')

        cy.get('#Username').type('krishnacy')
        cy.get('#Password').type('Test@1234')
        cy.get('.btn-primary').click()

        cy.get('.nav-link').last().should('have.text','Log out')

        //Add cookies / update cookies
        cy.setCookie('City','Bangalore')

            //get cookies
        cy.getCookies().should('have.length',4)
          .then( ($cookies) => {
            expect($cookies[1]).to.have.property('name')
            expect($cookies[1]).to.have.property('name',"ARRAffinity")
            expect($cookies[1]).to.have.property('value')
            expect($cookies[1]).to.have.property('value',"5d6388c4833b0dadbe69f8d9d447f3a0436739f26b0fda855114bcc66ac36ccc")
            expect($cookies[2]).to.have.property('sameSite')
            expect($cookies[2]).to.have.property('sameSite',"no_restriction")
          })

        cy.clearCookies()

    });
    
})