describe('Test Suite', () => {
    it('Get Business Units', () => {
        cy.visit('https://www.kecrpg.com/');
        cy.xpath("//a[text()='Business Units']").click();
        cy.xpath("//a[text()='Business Units']/../ul//a").each((el, index, list) => {
            if(index === 0) {
            cy.wrap(el).should('have.text','Power Transmission & Distribution');
            }
        });
    });
});