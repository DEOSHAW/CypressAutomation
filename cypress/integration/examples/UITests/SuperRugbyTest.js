describe('Test Suite', () => {
    it('Get Table Standings', () => {
        let rowCount = 0;
        let colCount = 0;
        cy.visit('https://super.rugby/superrugby/')
        cy.xpath("//a[contains(@class,'btn-primary btn-block')]").click();
        cy.xpath("//table[contains(@class,'Opta-Striped Opta-Competition')]//tbody//tr").then((rows) => {
            rowCount = rows.length;
        });
        cy.xpath("//table[contains(@class,'Opta-Striped Opta-Competition')]//tbody//tr[1]//td").then((cols) => {
            colCount = cols.length;
            for (let i = 1; i <= rowCount; i++) {
                for (let j = 1; j <= colCount; j++) {
                    cy.xpath("//table[contains(@class,'Opta-Striped Opta-Competition')]//tbody//tr[" + i + "]//td[" + j + "]").then((el) => {
                        cy.log(el.text());
                        if (i == 3 && j == 2) {
                            expect(el.text()).to.equal('ACT Brumbies');
                            cy.wrap(el).should('have.text', 'ACT Brumbies');
                        }
                    });
                }
            }

        });
    });
}); 