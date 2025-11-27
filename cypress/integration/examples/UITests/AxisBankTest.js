describe('Test Suite for Axis Bank Website', () => 
{
    it('Validate Axis Burgundy Colour',()=>{
         cy.visit("https://www.axis.bank.in/");
         cy.get('div.header-container').should('have.css','background-color','rgb(151, 20, 77)');
    })
});