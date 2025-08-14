describe('Test Suite', () => {
    it('AIFF Test', () => {
        cy.visit('https://www.the-aiff.com/');

        // Navigate to Senior National Team page
        cy.xpath("(//a[text()='Senior National Team'])[1]").click({ force: true });
        cy.url().should('equal', 'https://www.the-aiff.com/national-team/men/senior');
    });
})