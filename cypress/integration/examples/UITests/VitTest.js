describe('Test Suite',()=>{
    it('Navigate to VIT Online Institute Page',()=>
    {
        cy.visit("https://vit.ac.in/");
        cy.xpath("//a[text()='About']").click();
        cy.xpath("//a[contains(@href,'vitol')]").invoke('removeAttr','target').click();
        cy.url().should('include','https://vit.ac.in/vitol/');

    })
})