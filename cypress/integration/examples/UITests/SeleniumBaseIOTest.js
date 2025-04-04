describe('Test Suite',()=>{
    it('Validate button colour',()=>{
        cy.visit('https://seleniumbase.io/demo_page/');
        cy.get('button#myButton').should('have.attr','style','color: green;');
        cy.get('button#myButton').click();
        cy.get('button#myButton').should('have.attr','style','color: purple;');

    })
})