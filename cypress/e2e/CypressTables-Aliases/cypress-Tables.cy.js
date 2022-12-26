/// <reference types = "cypress" />

describe('Cypress-Tables', ()=> {

    it('Retrieve Column Text', ()=> {
        cy.visit('https://itera-qa.azurewebsites.net/Login')
        cy.get('#Username').as('userName')
        cy.get('@userName').type('krishnacy')
        cy.get('#Password').as('pwd')
        cy.get('@pwd').type('Test@1234')
        cy.get("[value='Login']").click()
        cy.get('.nav-link').last().should('have.text', 'Log out')

        //Table Rows:
        cy.get('table.table-hover>tbody>tr').should('have.length','828')

        //Table Columns
        cy.get('table.table-hover>tbody>tr:first-child>th')
          .should('have.length','7')

        //How to get the Single Row Text()
        cy.get('table.table-hover>tbody>tr')
          .first()
          .within( ()=> {
            cy.get('th').then( (headerNames) => {
                cy.log(headerNames.text())
            });

          });


          cy.get('table.table-hover>tbody>tr:first-child>th')
            .then(elemText => {
                cy.log(elemText.text())
            });    
            
        cy.get('table.table-hover>tbody>tr>th')
        .then(elemText1 => {
            cy.log(elemText1.text())
        });  

    });

    it('Validate Cell data', ()=> {
        cy.visit('https://itera-qa.azurewebsites.net/Login')
        cy.get('#Username').as('userName')
        cy.get('@userName').type('krishnacy')
        cy.get('#Password').as('pwd')
        cy.get('@pwd').type('Test@1234')
        cy.get("[value='Login']").click()
        cy.get('.nav-link').last().should('have.text', 'Log out')

        //Table Rows:
        cy.get('table.table-hover>tbody>tr').should('have.length','828')

        //Table Columns
        cy.get('table.table-hover>tbody>tr:first-child>th')
          .should('have.length','7')

        //   cy.get('table.table-hover>tbody>tr>td:nth-last-child(2)')
        //     .each(($e1, index, listName) => {
        //         cy.log(index +":"+$e1.text())
        //     });  

        cy.get('table.table-hover')
          .contains('Ashish')
          .parent()
          .within( ()=> {
            cy.get('td').eq(5).then((getVal) => {
                cy.log(getVal.text())
            });
          });

          cy.get('table.table-hover>tbody>tr>td:first-child')
          .within( ($getFirstColumnData)=> {
            if($getFirstColumnData.text().includes('Cortney')){
                cy.get('td').eq(5).then((getVal) => {
                    cy.log(getVal.text())
                });
            }
            });
          });

    });
