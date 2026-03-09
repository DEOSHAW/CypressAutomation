describe('Test Suite', () => {
    it('Validate Menu options', () => {
        cy.visit('https://www.ibsf.org/en/');
        cy.get('li.nav-item>a').then((el) => {
            cy.wrap(el).eq(3).should('contain.text', 'Athletes');
        })
    })
})