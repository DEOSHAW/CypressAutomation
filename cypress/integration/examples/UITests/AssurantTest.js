describe('Test Suite',()=>{
    it('Validate Menu Options',()=>{
        cy.visit('https://www.assurant.in/');
        cy.xpath("//*[@class='nav-item' or @data-bs-toggle='dropdown']").each((el,index,list)=>
         {
            if(index==4)
            {
            cy.wrap(el).should('have.text','Careers');
            }

         })
         cy.xpath("//*[@class='nav-item' or @data-bs-toggle='dropdown']").then((ele)=>{
            cy.wrap(ele).should('have.length',5);
            cy.wrap(ele.eq(1)).should('contain.text','Our Story');
         })
    })
})