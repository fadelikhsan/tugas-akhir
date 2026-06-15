import LoginPage from '../pages/LoginPage'
import DirectoryPage from '../pages/DirectoryPage'

describe('Directory Feature', () => {

    beforeEach(() => {

        LoginPage.visit()
        LoginPage.login('Admin', 'admin123')

        DirectoryPage.openDirectory()
        DirectoryPage.verifyDirectoryPage()
    })

    it('TC01 Open menu Directory', () => {
        DirectoryPage.verifyDirectoryPage()
    })

    it('TC02 Search employee name', () => {
        DirectoryPage.searchName('Linda')
        DirectoryPage.clickSearch()

        DirectoryPage.verifyPageLoaded()
    })

    it('TC03 Search partial name', () => {
        DirectoryPage.searchName('Lin')
        DirectoryPage.clickSearch()

        DirectoryPage.verifyPageLoaded()
    })

it('TC04 Reset search', () => {
    DirectoryPage.searchName('Linda')
    DirectoryPage.clickReset()

    DirectoryPage.verifyPageLoaded()
})

    it('TC05 Search data kosong', () => {
        DirectoryPage.searchName('abcdefgh12345')
        DirectoryPage.clickSearch()

        DirectoryPage.verifyPageLoaded()
    })

    it('TC06 Verify search button', () => {
        DirectoryPage.verifySearchButton()
    })

    it('TC07 Verify reset button', () => {
        DirectoryPage.verifyResetButton()
    })

    it('TC08 Verify list records tampil', () => {
        DirectoryPage.verifyRecordsDisplayed()
    })
})