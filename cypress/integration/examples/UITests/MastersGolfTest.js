describe('Test Suite',()=>{
    it('Validate page title',()=>{
        cy.visit('https://www.masters.com/index.html');
        cy.title().should('include','Masters at Augusta National');
    })
})