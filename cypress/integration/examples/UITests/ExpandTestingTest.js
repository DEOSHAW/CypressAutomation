describe('Test Suite', () => {
    it('Dunamic Table test', () => {
        let rowCount = 0;
        let colCount = 0;

        cy.visit('https://practice.expandtesting.com/dynamic-table');
        cy.xpath("//table//tbody//tr").then((ele) => {
            rowCount = ele.length;
        })

        cy.xpath("//table//tbody//tr[1]/td").then((ele) => {
            colCount = ele.length;
            cy.log(rowCount);
            cy.log(colCount);
            for (let i = 1; i <= rowCount; i++) {
                for (let j = 1; j <= colCount; j++) {
                    cy.xpath("//table//tbody//tr[" + i + "]/td[" + j + "]").each((el) => {
                        cy.log(el.text());
                    })
                }
            }
        })

        //cy.xpath("//table//tbody//tr").eq(3).find('td').eq(3).should('have.text','5.2%');
    })
})