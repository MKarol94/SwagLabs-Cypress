import users from '../fixtures/users.json'

Cypress.Commands.add('login', (userType) => {
    cy.visit('/')

    const user = users[userType]
    
    cy.get('#user-name').type(user.username)
    cy.get('#password').type(user.password)
    cy.get('#login-button').click()

})

Cypress.Commands.add('addToCart', (nameProduct) => {
    cy.get(`[data-test="add-to-cart-${nameProduct}"]`).click()
})