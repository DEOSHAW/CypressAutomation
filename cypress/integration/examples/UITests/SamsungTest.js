describe('Test Suite',()=>{
    it('Get list of Refrigerators',()=>{
        cy.visit('https://www.samsung.com/in/');
        cy.xpath("//button[@an-la='home appliances']").invoke('show');
        cy.xpath("//a[contains(@an-la,'home appliances:refrigerator')]")
        .each((el,index,list)=>{
            cy.log(el.text());
            if(index==3)
            {
                cy.wrap(el).should('contain.text','Side by Side');
            }

        })
    })
})