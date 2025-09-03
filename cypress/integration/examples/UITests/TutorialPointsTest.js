describe('Test Suite', () => {
    it.skip('Test Case', () => {
        cy.visit('https://www.tutorialspoint.com/selenium/practice/select-menu.php');
        cy.get('select#inputGroupSelect03').select(2).should('contain.text', 'Mr.');
    });
    it('Handle Modal', () => {
        cy.visit('https://www.tutorialspoint.com/selenium/practice/modal-dialogs.php');
        cy.get('[type="button"][data-bs-target="#exampleModalSm"]').click();
        cy.get('.show > .modal-dialog > .modal-content > .modal-body').should('contain.text', 'Show a second modal');
        cy.document().trigger('keydown', { key: 'Escape', keyCode: 27, which: 27 });
        cy.get('.show > .modal-dialog > .modal-content > .modal-body').should('not.be.visible');
    });
});