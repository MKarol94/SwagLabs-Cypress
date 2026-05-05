describe('Checkout', () => {
    beforeEach(() => {
        cy.login('validUser')
    })

    it('Should complete the checkout process', () => {
        cy.addToCart('sauce-labs-backpack')
        cy.get('[data-test="shopping-cart-link"]').click()

        cy.get('[data-test="shopping-cart-badge"]').should('contain', '1')
        cy.contains('Sauce Labs Backpack').should('be.visible')

        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Maria')
        cy.get('[data-test="lastName"]').type('Karoline')
        cy.get('[data-test="postalCode"]').type('54321')
        cy.get('[data-test="continue"]').click()

        cy.get('.title').should('contain', 'Checkout: Overview')
        cy.contains('Sauce Labs Backpack').should('be.visible')

        cy.get('[data-test="finish"]').click()

        cy.get('.title').should('contain', 'Checkout: Complete!')
        cy.contains('Thank you for your order!').should('be.visible')
    })

    it('Should display an error message when attempting to continue checkout without filling required fields', () => {
        cy.addToCart('sauce-labs-backpack')
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="continue"]').click()

        cy.get('[data-test="error"]').should('contain', 'Error: First Name is required')

        cy.get('[data-test="firstName"]').type('Maria')
        cy.get('[data-test="continue"]').click()

        cy.get('[data-test="error"]').should('contain', 'Error: Last Name is required')

        cy.get('[data-test="lastName"]').type('Karoline')
        cy.get('[data-test="continue"]').click()

        cy.get('[data-test="error"]').should('contain', 'Error: Postal Code is required')
    })

})