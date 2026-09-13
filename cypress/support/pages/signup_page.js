/// <reference types="cypress" />

export default {
    clickSignupButton() {
        cy.get('#btnRegister')
           .click() 
    },

    validateErrorMessage(expectedMessage) {
        cy.get('.errorLabel')
            .should('be.visible')
            .and('contain', expectedMessage);
    },

    fillNameField(name) {
        cy.get('#user')
            .clear()
            .type(name);
    },

    fillEmailField(email) {
        cy.get('#email')
            .clear()
            .type(email);
    },

    fillPasswordField(password) {
        cy.get('#password')
            .clear()
            .type(password);
    },

    validateSuccessMessage(name) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Bem-vindo ${name}`)
    },

    typeConfirmSuccessModal() {
        cy.get('.swal2-confirm')
            .should('be.visible')
            .click()
    }
}
