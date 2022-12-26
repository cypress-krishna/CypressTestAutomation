/// <reference types = "cypress" />

describe('Cypress-Tables-2 List of Chief Ministers', ()=> {

    it('List of Chief Ministers - Table Validations', ()=> {

        cy.visit('https://en.wikipedia.org/wiki/List_of_current_Indian_chief_ministers')

        let expectedstateName = "Telangana"
        // cy.ClickOnStateName(expectedstateName)  
        cy.ClickOnlistStateName(expectedstateName)      
    });

    it('List of Chief Ministers - Table Validations-2', ()=> {

        cy.visit('https://en.wikipedia.org/wiki/List_of_current_Indian_chief_ministers')

        let ExpectedVal = "Nagaland"
        cy.get('table.wikitable>tbody>tr>td:first-child')
    .each( ($e1, index, statesList) => {
      const ActualVal = $e1.text()
        // cy.log(actualStateName)
      if(ActualVal.includes(ExpectedVal)){
        cy.log(ActualVal)
        // cy.wrap($e1).find('a').first().click()
                // cy.wrap($e1).find('a').last().click()
                // cy.wrap($e1).next().click()
                cy.wrap($e1).nextAll().should('have.length',7)
          }
      });     
    });

    it.only('List of Chief Ministers - Table Validations-3', ()=> {

        cy.visit('https://en.wikipedia.org/wiki/List_of_current_Indian_chief_ministers')

        let ExpectedVal = "5"
        // let colName = "Reddy"
        cy.get('table.wikitable>tbody>tr>td:nth-last-child(1)')
          .each( ($e1, index, statesList) => {
           const ActualVal = $e1.text()
        // cy.log(actualStateName)
      if(ActualVal.includes(ExpectedVal)){
             cy.log(ActualVal)
        // cy.wrap($e1).find('a').first().click()
                // cy.wrap($e1).find('a').last().click()
                // cy.wrap($e1).next().click()
                cy.wrap($e1).prev().should('contain',"Reddy")
                cy.wrap($e1).prev().click()
          }
      });     
    });


});
