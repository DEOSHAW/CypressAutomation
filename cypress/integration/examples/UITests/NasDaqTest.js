describe('Test Suite',()=>{
    it('Navigate to Careers Page',()=>
    {
        cy.visit('https://www.bseindia.com/');
        cy.xpath("(//a[text()='Careers'])[1]").click();
        cy.title().should('include','BSE');
        cy.title().should('eq','BSE Careers');
    })
})