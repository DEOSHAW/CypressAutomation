describe('Test Suite',()=>{
    it('Navigate to Men Championship Page',()=>{
        cy.visit('https://www.sixnationsrugby.com/en');
        cy.get('#onetrust-accept-btn-handler').click();
        cy.xpath("//a[contains(@title,'Guinness Men')]").click();
        cy.url().should('include','m6n');


    })
})