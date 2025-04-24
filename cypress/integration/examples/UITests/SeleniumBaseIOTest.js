describe('Test Suite',()=>{
    beforeEach('Launch Portal',()=>{
        cy.visit('https://seleniumbase.io/demo_page');
    })
    it.skip('Validate button colour',()=>{
        
        cy.get('button#myButton').should('have.attr','style','color: green;');
        cy.get('button#myButton').click();
        cy.get('button#myButton').should('have.attr','style','color: purple;');

    })

    it.skip('Type in prefilled text',()=>
    {
        cy.get('input#myTextInput2').clear().type('Test Data');
    })

    it.skip('Drodown Test',()=>{
        cy.get('#mySelect').select(3);
    })

    it('Hover Test',()=>{
        cy.get('div#myDropdown').invoke('show');
        cy.get('div.dropdown-content>a').should('have.length',3).each((el,index,list)=>
        {
           cy.log(el.text());
        })
        cy.get('#dropOption3').should('have.text','Link Three');


    })
})