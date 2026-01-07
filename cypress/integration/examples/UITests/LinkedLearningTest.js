describe('Test Suite',()=>
    {
    it('Validate Course Search',()=>
    {
        cy.visit('https://www.linkedin.com/learning/');
        cy.get("input[placeholder$='software']").type("Cypress");
        cy.xpath("(//icon[@class='base-search-bar__search-icon onload mx-auto lazy-loaded'])[3]/*[local-name()='svg']").click();
        cy.get('.aicc-login__action-msg').should('contain.text','login window');

    })
})