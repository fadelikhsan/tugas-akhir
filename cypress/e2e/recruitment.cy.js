import LoginPage from '../pages/LoginPage'
import RecruitmentPage from '../pages/RecruitmentPage'

describe('Recruitment Feature', () => {

    beforeEach(() => {

        LoginPage.visit()

        LoginPage.login(
            'Admin',
            'admin123'
        )

        RecruitmentPage.openRecruitment()

        RecruitmentPage.verifyRecruitmentPage()
    })

    it('TC01 Open recruitment menu', () => {
        RecruitmentPage.verifyRecruitmentPage()
    })

    it('TC02 Search candidate', () => {
        RecruitmentPage.searchCandidate('Peter')
        RecruitmentPage.verifySearchResult()
    })

    it('TC03 Search vacancy', () => {
        RecruitmentPage.searchVacancy()
        RecruitmentPage.verifySearchResult()
    })

    it('TC04 Search hiring manager', () => {
        RecruitmentPage.searchHiringManager()
        RecruitmentPage.verifySearchResult()
    })

    it('TC05 Reset filter', () => {
        RecruitmentPage.searchCandidate('Peter')
        RecruitmentPage.resetFilter()
        RecruitmentPage.verifyFilterReset()
    })

    it('TC06 Open add candidate page', () => {
        RecruitmentPage.openAddCandidate()
        RecruitmentPage.verifyAddCandidatePage()
    })

    it('TC07 Validate mandatory field', () => {
        RecruitmentPage.openAddCandidate()
        RecruitmentPage.saveCandidate()
        RecruitmentPage.verifyRequiredMessage()
    })

    it('TC08 Save candidate data', () => {
        RecruitmentPage.openAddCandidate()
        RecruitmentPage.fillCandidateForm(
            'John',
            'Doe'
        )
        RecruitmentPage.saveCandidate()
    })
})