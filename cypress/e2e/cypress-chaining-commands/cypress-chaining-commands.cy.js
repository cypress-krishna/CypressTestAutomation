/// <reference types = "cypress" />

/* chaning commands are 
   and(), then(), each()
   */

   //expect(), should() asserttions are BDD syntax
   // assert assertion originated from TDD Syntax

describe('Understand Cypress Chaning Commands', ()=> {

    it('chaining command - and()', ()=> {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('#monday').check()
          .should('be.checked')
          .and('have.prop','type','checkbox')
    });

    //let, const, var

    it('chaining command - then()', ()=> {
        cy.get('.nav-link').then($getNavLinks => {
            cy.log($getNavLinks.length)
            cy.log($getNavLinks.text())
            const getNavLinkItems = $getNavLinks.text()
            cy.screenshot()
            expect($getNavLinks.text()).to.contain('Login')
            expect($getNavLinks.text()).to.match(/^Home/)
            expect($getNavLinks.text()).to.match(/Login$/)
            // expect($getNavLinks.text()).to.(/*Tutorial*/)
            expect(getNavLinkItems).to.be.a('string')
        })
    });

    it('chaning command - each()', () => {
       cy.navLinksClick("Login")
    });

    it('chaning command - each()-1', () => {
        cy.navLinksClick("Tutorial")
     });
 

});