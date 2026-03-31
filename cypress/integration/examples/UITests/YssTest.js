describe('Yss Test Suite',()=>
{
    it('Validate search feature',()=>
    {
      cy.visit('https://yssofindia.org/');
      cy.xpath("(//input[@aria-label='search'])[1]").type('Meditation{enter}',{force:true});
      cy.get('h2.elementor-heading-title').should('have.text','Search Results');
    })

})