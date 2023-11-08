import NextGenAI from "../../../support/pageObjects/NextGenAI";

describe('Test Suite',()=>{
    const nextGenAI=new NextGenAI();
    it('Web Table Test',()=>{
        cy.visit('https://nxtgenaiacademy.com/');
        nextGenAI.getWebTableLink().click({force:true});
        nextGenAI.getEmployerDetailsLabelText().should('have.text','Employer Details');
        cy.xpath("//table//tr").then((rowEle)=>{
           var rowLength=rowEle.length;
           cy.xpath("//table//tr[1]//td").then((colEle)=>{
            var colLength=colEle.length;
            for(let i=1;i<=rowLength;i++)
            {
                for(let j=1;j<=colLength;j++)
                {
                    cy.xpath("//table//tr["+i+"]//td["+j+"]").then((cellEle)=>{
                        var cellValue=cellEle.text();
                        cy.log(cellValue);
                        if(i==6&&j==2)
                        {
                            cy.wrap(cellEle).should('contain.text','Google');
                            expect(cellValue).to.contain('Google');

                        }

                    })
                }
            }

           })

        })




    })
})