describe('Test Suite',()=>{
    it('Get PG Programs',()=>{
        cy.visit('https://www.spjimr.org');
        cy.get('#menu-item-5105 > :nth-child(1)').click();
        cy.xpath("(//a[text()='Postgraduate'])[3]").click({force:true});
        cy.get('h4').each((ele,index,list)=>{
            cy.log(ele.text());
            if(index==3)
            {
                cy.wrap(ele).should('contain.text','Global Management Programme (GMP)');
            }
        })


    })
})