import LoginPage from '../pages/LoginPage'

describe('Login Feature', () => {

beforeEach(() => {
    LoginPage.visit()
})

it('TC01 Login valid', () => {

    LoginPage.login(
        'Admin',
        'admin123'
    )

    cy.url({
        timeout: 30000
    }).should('include', '/dashboard')
})

it('TC02 Username salah', () => {

    LoginPage.login(
        'AdminSalah',
        'admin123'
    )

    cy.contains('Invalid credentials')
        .should('be.visible')
})

it('TC03 Password salah', () => {

    LoginPage.login(
        'Admin',
        'passwordSalah'
    )

    cy.contains('Invalid credentials')
        .should('be.visible')
})

it('TC04 Username kosong', () => {

    LoginPage.inputPassword('admin123')

    LoginPage.clickLogin()

    cy.contains('Required')
        .should('be.visible')
})

it('TC05 Password kosong', () => {

    LoginPage.inputUsername('Admin')

    LoginPage.clickLogin()

    cy.contains('Required')
        .should('be.visible')
})

it('TC06 Username dan password kosong', () => {

    LoginPage.clickLogin()

    cy.contains('Required')
        .should('be.visible')
})

it('TC07 Cek title login page', () => {

    cy.title()
        .should('contain', 'OrangeHRM')
})

it('TC08 Logout berhasil', () => {

    LoginPage.login(
        'Admin',
        'admin123'
    )

    cy.url({
        timeout: 30000
    }).should('include', '/dashboard')

    LoginPage.logout()

    cy.url({
        timeout: 30000
    }).should('include', '/auth/login')
})


})
