describe('Test Suite',()=>{
    it('Get Schools List',()=>
    {
        cy.visit('https://www.upes.ac.in/');
        cy.xpath("//li[contains(@data-nav-img,'https://upes')]/child::a[contains(@href,'/school-of')]")
        .then((ele)=>
        {
            cy.wrap(ele).should('have.length',7);
            cy.wrap(ele).eq(3).should('have.text','School of Design');

        })


    })
})