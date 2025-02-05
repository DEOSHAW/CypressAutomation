describe('Test Suite', () => {
    it('Print advertisements', () => {
        cy.visit('https://www.ignou.ac.in/');
        cy.get('button.btn-close:nth-child(1)').click();
        cy.xpath("//span[normalize-space(text())='Career']").click();
        cy.xpath("//table[@id='announcement']//tbody//tr").then((rowEle) => {
            let rowLength = rowEle.length;
            cy.xpath("//table[@id='announcement']//tbody//tr[1]/td").then((colEle) => {
                let colLength = colEle.length;
                for (let i = 1; i <= rowLength; i++) {
                    for (let j = 1; j <= colLength; j++) {
                        cy.xpath("//table[@id='announcement']//tbody//tr[" + i + "]/td[" + j + "]").then((tableEle) =>
                        {
                            let cellText=tableEle.text();
                            if(cellText!="")
                            cy.log(cellText);


                        })
                    }
                }
            })

        })

    })
})