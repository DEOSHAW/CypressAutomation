describe('Test Suite', () => {
    var data;
    before('Fetch Test Data', () => {
        cy.fixture('example').then((fData) => {
            data = fData;
        })
    })
    it('Search on Portal', () => {
        cy.visit('https://jgu.edu.in/');
        cy.get('input.search-field').type(data.searchTerm);
        cy.get('span.search-btn-icon').click();
        cy.get('div.search-page-search-form>form>label>input').should('have.attr', 'value', 'Rankings');
    })
})