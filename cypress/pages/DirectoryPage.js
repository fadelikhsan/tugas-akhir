class DirectoryPage {

    openDirectory() {
        cy.contains('span', 'Directory', {
            timeout: 20000
        }).should('be.visible').click()
    }

    verifyDirectoryPage() {
        cy.url().should('include', 'directory')
    }

    verifyPageLoaded() {
        cy.contains('button', 'Search')
            .should('be.visible')
    }

    searchName(name) {
        cy.get('input[placeholder="Type for hints..."]')
            .first()
            .clear()
            .type(name)
    }

    clickSearch() {
        cy.contains('button', 'Search').click()
    }

    clickReset() {
        cy.contains('button', 'Reset').click()
    }

    verifySearchFieldEmpty() {
        cy.get('input[placeholder="Type for hints..."]')
            .first()
            .should('have.value', '')
    }

    verifySearchButton() {
        cy.contains('button', 'Search')
            .should('be.visible')
            .and('be.enabled')
    }

    verifyResetButton() {
        cy.contains('button', 'Reset')
            .should('be.visible')
            .and('be.enabled')
    }

    verifyRecordsDisplayed() {
        cy.get('.orangehrm-container')
            .should('be.visible')
    }
}

export default new DirectoryPage()