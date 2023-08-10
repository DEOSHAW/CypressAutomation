describe('Test Suite-ABS', () => {
    let rowCount;
    let colCount;
    it('Get Graduate Programs', () => {

        cy.visit('https://www.amity.edu/abs/');
        cy.xpath("//a[@href='programs.asp' and @class='main-menu']").click();
        cy.get('.accordion-toggle.collapsed').each((el, index, list) => {

            cy.log(el.text());
            if (index == 10) {
                expect(el.text()).to.contain('MBA (Technology Management)');
            }

        })

        cy.xpath("//a[contains(text(),'Placement Highlights ')]").click({ force: true });

        cy.xpath("//table//tr").then((ele)=>{
            rowCount=ele.length;

        })

        cy.xpath("//table//tr[2]//td").then((ele)=>{
            colCount=ele.length;
           
            

        }).then(()=>{

            cy.log(rowCount);
            cy.log(colCount);


            for (let i = 2; i <= rowCount; i++) {
                for (let j = 1; j <= colCount; j++) {
                    cy.xpath("//table//tr[" + i + "]//td[" + j + "]").then(function (ele) {
                        cy.log(ele.text());
    
    
                    })
                }
            }

        })

        



        

    })
})