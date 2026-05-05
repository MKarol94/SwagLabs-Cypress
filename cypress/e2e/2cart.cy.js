describe('Cart', () => {
    beforeEach(() => {
        cy.login('validUser')
    })

    it('Should add a product to the cart', () => {
        cy.addToCart('sauce-labs-backpack')
        cy.get('[data-test="shopping-cart-link"]').click()

        cy.get('[data-test="shopping-cart-badge"]').should('contain', '1')
        cy.contains('Sauce Labs Backpack').should('be.visible')
    })

    it('Should remove a product from the cart', () => {
        cy.addToCart('sauce-labs-backpack')

        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()

        cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
        cy.contains('Sauce Labs Backpack').should('not.exist')
    })

})