describe('Test Suite',()=>
{
    it('ValidateErrorMessageForRechargeOfWrongNumber',()=>
    {
        cy.visit('https://www.airtel.in/');
        cy.get('#rechargeInput').type('3879855049');
        cy.get('#rechargeBtn').click();
        cy.get('.wt-input--hint').then((ele)=>
        {
             cy.log(ele.text());
             cy.wrap(ele).should('contain.text','Please enter a valid mobile number');
        })

    })

})