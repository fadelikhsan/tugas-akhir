import LoginPage from '../pages/LoginPage'
import RecruitmentPage from '../pages/RecruitmentPage'

describe('Recruitment Feature', () => {

    beforeEach(() => {

        cy.intercept('GET', '**/recruitment/**').as('recruitment')

        LoginPage.visit()
        LoginPage.login('Admin', 'admin123')

        RecruitmentPage.openRecruitment()

        cy.wait('@recruitment')
    })

    it('TC01 Open recruitment menu', () => {})

    it('TC02 Search candidate', () => {})

    it('TC03 Search vacancy', () => {})

    it('TC04 Search hiring manager', () => {})

    it('TC05 Reset filter', () => {})

    it('TC06 Open add candidate page', () => {})

    it('TC07 Validate mandatory field', () => {})

    it('TC08 Save candidate data', () => {})
})