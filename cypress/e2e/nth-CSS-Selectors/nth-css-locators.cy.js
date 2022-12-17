/// <reference types = "cypress" />

describe("difference between nth selectos - Cypress Commands", ()=> {

    it("Difference between first() - (first-child)", ()=> {
        cy.visit('https://www.amazon.in/')
        //cypress Command
        // cy.get('#nav-tools a').first().trigger('mouseover')

        // from nth sectors - first-child
        cy.get('#nav-tools a:first-child').trigger('mouseover')
    });

    it("Difference between last() - (last-child)", ()=> {
        cy.visit('https://www.amazon.in/')
        //cypress Command
        // cy.get('#nav-tools a').last().should('contain', 'Cart')

        // from nth sectors - first-child
        cy.get('#nav-tools a:last-child').should('contain', 'Cart')
    });

    it("Difference between eq() - (nth-child)", ()=> {
        cy.visit('https://www.amazon.in/')
        //cypress Command
        // cy.get('#nav-tools a').eq(1).trigger('mouseover')

        // from nth sectors - first-child
        cy.get('#nav-tools a:nth-child(2)').trigger('mouseover')
    });

    it("Difference between eq() - (nth-last-child)", ()=> {
        cy.visit('https://www.amazon.in/')
        //cypress Command
        // cy.get('#nav-tools a').eq(1).trigger('mouseover')

        // from nth sectors - first-child
        cy.get('#nav-tools a:nth-last-child(3)').trigger('mouseover')
        cy.get('#nav-tools a:nth-last-child(1)').should('contain', 'Cart')
    });
});