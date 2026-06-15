import './commands'

Cypress.on('uncaught:exception', (err) => {

    if (
        err.message.includes('response') ||
        err.message.includes('Network Error')
    ) {
        return false
    }

    return true
})