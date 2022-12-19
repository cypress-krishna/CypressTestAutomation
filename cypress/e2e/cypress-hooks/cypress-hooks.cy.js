/// <reference types = "cypress" />

/*
before  - It will exexute before all test cases (ALL IT BLOCKS) at once
beforeEach  - It will execute before Each test case / IT block
after  -> It will execute only onece after all the test cases executed
afterEach - It will execute after each test case
*/

describe('Cypress Hooks Concept', ()=> {

    before( ()=> {
        cy.log("Before Hook")
    });

    after(()=> {
        cy.log("AFTER Hook")
    });

    beforeEach( ()=> {
        cy.log("BEFORE EACH")
    });

    afterEach( ()=> {
        cy.log("AFTER EAch")
    });

    it("test case for cypress hooks-1", ()=> {
        cy.log('cypress hooks test case 1...')
    });

    it("test case for cypress hooks-2", ()=> {
        cy.log('cypress hooks test case 2...')
    })

    it("test case for cypress hooks-3", ()=> {
        cy.log('cypress hooks test case 3...')
    })

});

    