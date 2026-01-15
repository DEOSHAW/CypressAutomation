describe('IIITB Website UI Tests', () => {
    it('Navigate to Alumni Site',()=>{
        cy.visit('https://www.iiitb.ac.in/');
        cy.get('a.butn.theme').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'alumni.iiitb.ac.in');
        cy.title().should('eq', 'The Official Alumni Network of International Institute of Information Technology Bangalore');
        cy.origin('https://alumni.iiitb.ac.in', () => {
        cy.contains('a', 'Alumni Assist')
        .should('be.visible')
        .and('have.text', 'Alumni Assist');
        });
    });
  
  });