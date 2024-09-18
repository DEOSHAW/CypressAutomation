describe('PLL Test Suite',()=>{
    it('Get League Standings',()=>
    {
        cy.visit('https://premierlacrosseleague.com/');
        cy.xpath("//a[text()='Standings']").click();
        cy.xpath("//button[text()='Overall']").click();
        cy.xpath("//th[normalize-space(string())='Team']").should('have.text','Team');
        for(let i=1;i<=8;i++)
        {
            for(let j=1;j<=6;j++)
            {
                cy.xpath("//table//tbody//tr["+i+"]/td["+j+"]").then((ele)=>{
                    cy.log(ele.text());
                    if(i==3&&j==1)
                    {
                        expect(ele.text()).to.contain('Maryland Whipsnakes');
                    }

                })

            }
        }

    })
})