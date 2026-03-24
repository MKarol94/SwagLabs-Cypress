describe('Tela de Carrinho', () => {
    beforeEach(() => {
        cy.login('validUser')
    })

    it('Deve adicionar um produto ao carrinho', () => {
        cy.addToCart('sauce-labs-backpack')

        cy.get('[data-test="shopping-cart-link"]').click()

        cy.get('[data-test="shopping-cart-badge"]').should('contain', '1')
        cy.contains('Sauce Labs Backpack').should('be.visible')
    })

    it('Deve remover um produto do carrinho', () => {
        cy.addToCart('sauce-labs-backpack')

        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()

        cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
        cy.contains('Sauce Labs Backpack').should('not.exist')
    })

    // Adicione mais testes relacionados ao carrinho, como verificar o total, aplicar cupons, etc.
})