class RecruitmentPage {

    openRecruitment() {
        cy.contains('Recruitment').click()
    }

    clickAdd() {
        cy.contains('Add').click()
    }

    inputFirstName(name) {
        cy.get('input[name="firstName"]').type(name)
    }

    save() {
        cy.contains('Save').click()
    }
}

export default new RecruitmentPage()