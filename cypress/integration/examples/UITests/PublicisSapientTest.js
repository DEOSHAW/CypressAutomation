describe('Test Suite', () => {
    it('Get Industries served', () => {
        cy.visit('https://www.publicissapient.com/');
        cy.xpath("//a[@href='/industries']").click();
        cy.xpath("//a[@href='/industries']/following-sibling::div/div/child::div[@class='submenu-container']//span")
            .each((el, index, list) => {
                if (index == 3) {
                    cy.log("ISU is: "+el.text());
                    expect(el.text()).to.contain('Health');
                }
                cy.log(el.text());

            })
        cy.xpath("//a[@href='/industries']/following-sibling::div/div/child::div[@class='submenu-container']//span")
            .then((ele) => {
                cy.wrap(ele).eq(0).should('have.text', ' Consumer Products ');

            })

    })
})