class DirectoryPage {

    openDirectory() {
        cy.contains('Directory').click()
    }

    searchName(name) {
        cy.get('input[placeholder="Type for hints..."]')
            .first()
            .type(name)
    }

    clickSearch() {
        cy.contains('Search').click()
    }

    clickReset() {
        cy.contains('Reset').click()
    }
}

export default new DirectoryPage()