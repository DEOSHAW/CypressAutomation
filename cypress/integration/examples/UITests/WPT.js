describe('WPT Test', () => {
    it('Get WPT Rankings', () => {
        cy.visit('https://worldpadeltour.com/en');
        cy.get('div.menu-toggle').click();
        cy.xpath("(//a[contains(text(),'Player Rankings')])[1]").click();
        cy.get('p.name span').each((el, index, list) => {

            if (index < 20) {
                if (index == 0) {
                    cy.log("Women's Ranking: ")
                }
                cy.log(el.text());
            }
            else {
                if (index == 20) {
                    cy.log("Men's Ranking: ")
                }
                cy.log(el.text());

            }

        })

    })
})