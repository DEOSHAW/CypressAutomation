describe('Test Suite', ()=>{
    it('Get Services',()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        cy.xpath("(//a[text()='Services'])[1]").click();
        cy.get('span.heading').each((el,index,list)=>{
            cy.log(el.text());
            if(index==3)
                cy.wrap(el).should('have.text','ParaBank services:');
        })


    })

})