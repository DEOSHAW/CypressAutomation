describe('AIT Test Suite', () => {
    it('Validate Programs', () => {
        cy.visit('https://www.aitpune.com/');
        cy.get('a#programmesDropdown').click();
        cy.get("ul[aria-labelledby='programmesDropdown']>li>a.dropdown-item")
            .each((el, index, list) => {
                cy.log(el.text());
                if (index == 3)
                    cy.wrap(el).should('have.text', 'Mechanical Engineering');
            })
    });
});