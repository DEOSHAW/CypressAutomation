describe('Test Suite',() => {
    it('Test Case', () => {
        cy.visit('https://www.tutorialspoint.com/selenium/practice/select-menu.php');
        cy.get('select#inputGroupSelect03').select(2).should('contain.text', 'Mr.');
    });
});