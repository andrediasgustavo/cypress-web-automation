/// <reference types="cypress" />

export default {
    visitSignupPage() {
       cy.visit('/')
        
        cy.get('#top_header')
            .should('be.visible')

        cy.get('.fa-lock')
            .should('be.visible')
            .click()
    }
}
