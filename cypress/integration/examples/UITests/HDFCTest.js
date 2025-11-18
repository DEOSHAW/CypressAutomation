describe('Test Suite for HDFC Website', () => 
    {
    it('Navigate to Net Banking Website',()=>
    {
        cy.visit('https://www.hdfc.bank.in/');
        cy.get("a[title='NetBanking']").invoke('removeAttr', 'target').click();
        cy.title().should('eq','Welcome to HDFC Bank NetBanking');
        cy.url().should('include','netbanking');
    });
});