class RecruitmentPage {

    openRecruitment() {
        cy.contains('span', 'Recruitment', {
            timeout: 20000
        })
        .should('be.visible')
        .click()
    }

    verifyRecruitmentPage() {
        cy.url().should('include', 'recruitment')
        cy.contains('Candidates').should('be.visible')
    }

    searchCandidate(name) {
        cy.get('input[placeholder="Type for hints..."]')
            .first()
            .clear()
            .type(name)

        cy.contains('button', 'Search').click()
    }

    searchVacancy() {
        cy.get('.oxd-select-text')
            .eq(0)
            .click()

        cy.get('.oxd-select-option')
            .first()
            .click()

        cy.contains('button', 'Search').click()
    }

    searchHiringManager() {
        cy.get('.oxd-select-text')
            .eq(1)
            .click()

        cy.get('.oxd-select-option')
            .first()
            .click()

        cy.contains('button', 'Search').click()
    }

    verifySearchResult() {
        cy.get('.oxd-table-body')
            .should('be.visible')
    }

    resetFilter() {
        cy.contains('button', 'Reset').click()
    }

    verifyFilterReset() {
        cy.get('input[placeholder="Type for hints..."]')
            .first()
            .should('have.value', '')
    }

    openAddCandidate() {
        cy.contains('button', 'Add').click()
    }

    verifyAddCandidatePage() {
        cy.contains('Add Candidate')
            .should('be.visible')
    }

    fillCandidateForm(firstName, lastName) {

        cy.get('input[name="firstName"]')
            .type(firstName)

        cy.get('input[name="lastName"]')
            .type(lastName)

        cy.get('.oxd-select-text')
            .first()
            .click()

        cy.get('.oxd-select-option')
            .first()
            .click()
    }

    saveCandidate() {
        cy.contains('button', 'Save').click()
    }

    verifyRequiredMessage() {
        cy.contains('Required')
            .should('be.visible')
    }

    verifySuccessMessage() {
        cy.contains('Successfully Saved')
            .should('be.visible')
    }
}

export default new RecruitmentPage()