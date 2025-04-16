describe('Test Suite',()=>{
    it.skip('Validate button colour',()=>{
        cy.visit('https://seleniumbase.io/demo_page/');
        cy.get('button#myButton').should('have.attr','style','color: green;');
        cy.get('button#myButton').click();
        cy.get('button#myButton').should('have.attr','style','color: purple;');

    })

    it.skip('Type in prefilled text',()=>
    {
        cy.visit('https://seleniumbase.io/demo_page/');
        cy.get('input#myTextInput2').clear().type('Test Data');
    })

    it('Drodown Test',()=>{
        cy.visit('https://seleniumbase.io/demo_page');
        cy.get('#mySelect').select(3);
    })
})