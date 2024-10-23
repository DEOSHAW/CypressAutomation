describe('Reliance Test Suite',()=>{
    it('Navigate to Store locator',()=>{
        cy.visit('https://relianceretail.com/reliance-trends.html');
        //Navigate to store locator
        cy.get('.nav-icon > a').click({force:true});

    })
})