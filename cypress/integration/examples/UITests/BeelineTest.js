describe('Test Suite',()=>{
    it('Get Text from each card',function(){
        cy.visit('https://makeabeeline.com/');
        cy.xpath("//h2[text()='Lender love letters.']").scrollIntoView();

        cy.get('span.Review__User-sc-k84yrm-7').each((el,index,list)=>
        {
            cy.log(el.text());
            if(index==0)
            {
            cy.wrap(el).should('contain.text','Robert');
            }

        })

    })
})