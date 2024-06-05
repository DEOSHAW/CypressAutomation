describe('Test Suite',()=>{
    it('Get Business Verticals',()=>
    {
        cy.visit('https://www.mahindra.com/');
        cy.xpath("//a[text()='OUR BUSINESSES']").scrollIntoView();
        cy.xpath("//a[text()='OUR BUSINESSES']/../../ul/li/a").then((ele)=>{
            cy.log(ele);
            cy.wrap(ele).eq(3).should('contain.text','FINANCIAL SERVICES');
            var businessVertical=ele.eq(0).text();
            expect(businessVertical).to.contain('AUTOMOTIVE');

        })

    })
})