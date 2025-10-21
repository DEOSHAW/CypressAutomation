describe('LetCode Test Suite', () => {
    var cData;
    it('Select Fruits from dropdown', () => {
        cy.fixture('example').then((data) => {
            cData = data;
            cy.visit('https://letcode.in/dropdowns');
            cy.get('select#fruits').select(cData.fruit);
            cy.get('div.notification.is-success>p').should('have.text', 'You have selected Apple');
        });

    })
});