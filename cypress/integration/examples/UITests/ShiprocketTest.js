describe('Test Suite',()=>{
    it('Get Shipping Products',()=>{
        cy.visit('https://www.shiprocket.in/');
        cy.xpath("//span[text()='Products']").invoke('show');
        cy.xpath("(//a[@href='/shipping/']/..)[1]/..//span").should('have.length',4)
        .each((ele,index,list)=>
        {
            cy.log(ele.text());
            if(index<3)
            {
                cy.wrap(ele).should('contain.text','Ship')
                
            }

        })

    })

})