describe('Test Suite',()=>{
    it('Navigate to Status Code Page',()=>{
        cy.visit('https://the-internet.herokuapp.com/redirector');
        cy.get('#redirect').click();
        cy.get('div.example>h3').should('have.text','Status Codes');
        cy.url().should('eq','https://the-internet.herokuapp.com/status_codes');
        cy.get('div.example>h3').then((ele)=>{
            expect(ele.text()).to.equal('Status Codes');
        })
    })
})