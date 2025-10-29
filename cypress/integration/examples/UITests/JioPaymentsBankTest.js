describe('Test Suite', () => {
    it('Get Account Types', () => {
        cy.visit('https://www.jiopayments.bank.in/');
        cy.xpath("//div[text()='Accounts']").trigger('mouseover');
        cy.xpath("//div[text()='Accounts']/../following-sibling::div//div[contains(@class,'j-text j-text-body-s')]")
            .each((el,index,list) => 
            {
                cy.log(el.text());
                if(index==3)
                {
                    cy.wrap(el).should('have.text','Wallet');
                }
            });
    })
});
