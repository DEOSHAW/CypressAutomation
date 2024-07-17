describe('Test Suite',()=>{
    it("Get PGTI's Tournaments list",()=>{
        cy.visit('https://www.pgtofindia.com/');
        cy.xpath("(//a[text()='Tournaments'])[1]").click();
        cy.get('div.tour-info>a').each((el,index,list)=>{
            cy.log(el.text());
            if(index==27)
            {
                expect(el.text()).to.contain('Tata Steel Tour Championship 2024');
            }
        })

        cy.get('div.tour-info>a').then((el)=>{
            cy.wrap(el).eq(5).should('contain.text','Dream Valley Group');

        })

    })
})