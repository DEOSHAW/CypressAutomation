describe('Tosca Test Suite', () => {
    it('Validate page title', () => {
        cy.visit('https://www.tricentis.com/products/automate-continuous-testing-tosca');
        cy.title().should('eq', 'Tricentis Tosca – Accelerate & Automate Continuous Testing | Tricentis');
    })
});