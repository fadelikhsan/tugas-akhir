class LoginPage {

visit() {
    cy.visit(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        {
            timeout: 120000
        }
    )
}

    inputUsername(username) {
        cy.get('input[name="username"]').clear().type(username)
    }

    inputPassword(password) {
        cy.get('input[name="password"]').clear().type(password)
    }

    clickLogin() {
        cy.get('button[type="submit"]').click()
    }

    login(username, password) {
        this.inputUsername(username)
        this.inputPassword(password)
        this.clickLogin()
    }
}

export default new LoginPage()