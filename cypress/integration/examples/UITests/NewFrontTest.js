describe('Test Suite', () => {
    it('Navigate to Login Page', () => {
        cy.visit('https://www.newfront.com/');
        cy.xpath("//span[text()='Login']/parent::a").invoke('removeAttr', 'target').click();
        cy.origin('https://app.newfront.com', () => {
            cy.url().should('include', 'https://app.newfront.com/login');
            cy.get("button[type='button']").eq(1).should('have.text', 'Create your account');
           });
    })
})