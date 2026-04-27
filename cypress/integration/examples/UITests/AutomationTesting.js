describe('Test Suite',()=>{
    it('Dropdown Selection Test',()=>
    {
      cy.visit('https://www.automationtesting.co.uk/dropdown.html');
      cy.get('select#cars').select('Mercedes')
      .find('option:selected')
      .should('have.text', 'Mercedes');
    })
})