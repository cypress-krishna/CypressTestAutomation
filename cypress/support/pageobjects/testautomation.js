class TestAutomation_PO {

    enterName() {
        return cy.get('#name')
    }

    enterMobileNumber(enterMobileNum) {
        cy.get("[placeholder='Enter your mobile phone']")
          .should('be.visible')
          .type(enterMobileNum)
    }

    enterEmail(email) {
        cy.get(".form-control[type='email']")
          .click()
          .type(email)
    }

    enterPassword(pwd) {
        cy.get('#password').type(pwd)
    }

    enterAddress() {
        return cy.get('.form-group textarea')
    }

    clickOnSubmitBtn() {
        return cy.get('.btn-primary')
    }

}

export default TestAutomation_PO;