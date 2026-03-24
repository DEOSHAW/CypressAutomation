describe('OnePlus Test Suite',()=>
{
    it('Validate Navigation to store page',()=>
    {
        cy.visit('https://www.oneplus.in/');
        cy.xpath("//a[@href='/store' and not(contains(@tabindex,-1))]").invoke('removeAttr','target').click();
        cy.url().should('eq','https://www.oneplus.in/store');
    })
})