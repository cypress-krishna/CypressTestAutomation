// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('LoginFunction', (userName, password)=> {
    cy.get('#Username')
          .should('be.visible')
          .type(userName)
        cy.get("[type='password']").type(password)
        cy.get('.btn-primary').click()
});

Cypress.Commands.add('navLinksClick', (paramNavItem)=> {
  cy.get('.nav-link').each(($e1, index, navList) => {
    // cy.log(index +" :"+ $e1.text())
    const getNavListItemsEach = $e1.text()
    if(getNavListItemsEach.includes(paramNavItem)){
        cy.wrap($e1).click()
    }            
});
});

Cypress.Commands.add("ClickOnStateName", (ExpectedVal)=> {
  cy.get('table.wikitable>tbody>tr>td:first-child')
    .each( ($e1, index, statesList) => {
      const ActualVal = $e1.text()
        // cy.log(actualStateName)
      if(ActualVal.includes(ExpectedVal)){
        cy.log(ActualVal)
        cy.wrap($e1).find('a').first().click()
                // cy.wrap($e1).find('a').last().click()
          }
      });
});

Cypress.Commands.add("ClickOnlistStateName", (ExpectedVal)=> {
  cy.get('table.wikitable>tbody>tr>td:first-child')
    .each( ($e1, index, statesList) => {
      const ActualVal = $e1.text()
        // cy.log(actualStateName)
      if(ActualVal.includes(ExpectedVal)){
        cy.log(ActualVal)
        // cy.wrap($e1).find('a').first().click()
                cy.wrap($e1).find('a').last().click()
          }
      });
});