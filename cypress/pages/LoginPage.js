class LoginPage {


visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get('input[name="username"]', {
        timeout: 30000
    }).should('be.visible')
}

inputUsername(username) {
    cy.get('input[name="username"]')
        .clear()
        .type(username)
}

inputPassword(password) {
    cy.get('input[name="password"]')
        .clear()
        .type(password)
}

clickLogin() {
    cy.get('button[type="submit"]').click()
}

login(username, password) {
    this.inputUsername(username)
    this.inputPassword(password)
    this.clickLogin()
}

logout() {
    cy.get('.oxd-userdropdown-tab', {
        timeout: 10000
    })
    .should('be.visible')
    .click()

    cy.contains('a', 'Logout')
        .should('be.visible')
        .click()
}


}

export default new LoginPage()
