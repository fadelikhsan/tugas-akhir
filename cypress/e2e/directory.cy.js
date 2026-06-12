import LoginPage from '../pages/LoginPage'
import DirectoryPage from '../pages/DirectoryPage'

describe('Directory Feature', () => {

    beforeEach(() => {

        cy.intercept('GET', '**/directory/**').as('directory')

        LoginPage.visit()
        LoginPage.login('Admin', 'admin123')

        DirectoryPage.openDirectory()

        cy.wait('@directory')
    })

    it('TC01 Open menu Directory', () => {})

    it('TC02 Search employee name', () => {})

    it('TC03 Search partial name', () => {})

    it('TC04 Reset search', () => {})

    it('TC05 Search data kosong', () => {})

    it('TC06 Verify search button', () => {})

    it('TC07 Verify reset button', () => {})

    it('TC08 Verify list records tampil', () => {})
})