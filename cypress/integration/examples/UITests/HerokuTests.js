describe('Heroku Test suite',function(){

    it('Select from Dropdown',()=>{
            cy.visit('https://the-internet.herokuapp.com/dropdown');
            cy.get('select#dropdown').select('Option 1');
            cy.get('select#dropdown');
            cy.get('h3').should('have.text','Dropdown List');
        })

 
    it('Test-Dynamic element loading',()=>{
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading');
        cy.get("a[href='/dynamic_loading/2']").click();
        cy.get('#start>button').click();
        cy.get('#finish>h4').should('be.visible').
        then(function(ele){
            expect(ele.text()).to.contain('Hello World!');


        })

        
        
    })
})