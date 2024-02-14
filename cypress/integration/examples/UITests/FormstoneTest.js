describe('Test Suite',()=>{
    it('Dropdown Test',()=>{
        cy.visit("https://formstone.it/components/dropdown/demo/");
        cy.get('#dropdown-demo').scrollIntoView();
        cy.get('#demo_basic').select(1,{force:true});
        cy.get('#demo_multiple').select(1,{force:true}).select(3,{force:true});
        cy.get('#demo_basic_2').select('DC',{force:true});
    })
})