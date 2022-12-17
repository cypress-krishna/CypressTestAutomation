class LoginPage_PO {

    enterUSerName() {
        return cy.get('#Username')
    }

    enterPasswordA() {
        return cy.get("#Password")
    }

    clickOnLoginButton() {
        return cy.get("[name='login']")
    }

}
export default LoginPage_PO;