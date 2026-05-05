
describe('Login', () => {
    it('Should log in successfully', () => {
        cy.login('validUser')

        cy.url().should('include', 'inventory')
        cy.get('.title').should('contain', 'Products')
    })

    it('Should display error message when entering invalid credentials', () => {
        cy.login('invalidUser')

        cy.get('[data-test="error"]').should('be.visible')
    })

    it('Should display error message for locked out user', () => {
        cy.login('lockedUser')

        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Sorry, this user has been locked out.')
    })
}) 