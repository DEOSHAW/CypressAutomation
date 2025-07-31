describe('MF Central Test Suite', () => {
    it('Get Quick Links', () => {
        cy.visit('https://www.mfcentral.com/');
        cy.xpath("//a[@href='#quick-links']").click();
        cy.get("div.quick-links-info>p").then((ele) => {
            cy.wrap(ele).eq(2).should('have.text', 'Transmission Request');
            cy.wrap(ele).should('have.length', 5);
        })
    })
})