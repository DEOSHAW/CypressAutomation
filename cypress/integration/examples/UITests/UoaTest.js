describe('Test Suite',()=>{
    it('Navigate to convocation page',()=>{
        cy.visit('https://www.allduniv.ac.in/');
        cy.xpath("(//a[contains(@href,'convocation')])[1]").click({force:true});
        cy.origin('https://allduniv.ac.in/',()=>{
        cy.get('h1').should('contain.text','Convocation');
        })
        
    })
})