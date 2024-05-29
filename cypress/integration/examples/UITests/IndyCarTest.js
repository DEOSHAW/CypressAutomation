describe('Test Suite', () => {
    it('Get Drivers Standings', () => {
        cy.visit('https://www.indycar.com/');
        cy.xpath("//a[text()='Standings']").click();
        cy.get('table.generic-table--standings>tbody>tr>td:nth-child(3)>a').each((el, index, list) => {
            let driverName = el.text();
            cy.log(driverName);
            if (index == 3) 
            {
                cy.wrap(el).should('contain.text',"Pato");
            }
        })
    })
})