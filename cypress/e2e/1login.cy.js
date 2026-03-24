
describe('Tela de Login', () => {
    it('Deve logar com sucesso', () => {
        cy.login('validUser')

        cy.url().should('include', 'inventory')
        cy.get('.title').should('contain', 'Products')
    })

    it('Deve exibir mensagem de erro ao inserir credenciais inválidas', () => {
        cy.login('invalidUser')

        cy.get('[data-test="error"]').should('be.visible')
    })

    it('Deve mostrar erro para usuário bloqueado', () => {
        cy.login('lockedUser')

        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Sorry, this user has been locked out.')
    })
}) 