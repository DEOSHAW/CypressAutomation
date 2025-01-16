describe('Test Suite', () => {
    it('Get information', () => {
        cy.visit('https://www.mlb.com/');
        cy.get('#onetrust-accept-btn-handler').click();
        cy.get('[data-nav-id="nav-top-item-standings"] > .styles__StyledNavItemInner-sc-87c9f2fb-0 > .styles__StyledNavItemLink-sc-87c9f2fb-1 > .styles__StyledNavItemText-sc-87c9f2fb-2').click();
        cy.xpath("//h1[text()='Standings']").should('have.text', 'Standings');
    })
})