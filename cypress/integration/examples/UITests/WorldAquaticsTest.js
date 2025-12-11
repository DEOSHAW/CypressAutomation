describe('Test Suite',()=>{
    it('Validate Aqua Sports',()=>{
        cy.visit('https://www.worldaquatics.com/');
        cy.xpath("(//button[normalize-space(text())='SPORTS'])[1]").click();
        cy.xpath("(//ul[@role='group'])[1]/li/a").each(($el, index, $list)=>{
            const sportName = $el.text().trim();
            cy.log(sportName);
            if(index==3)
            {
                cy.wrap($el).should('include.text','ARTISTIC SWIMMING');
            }
        });

    })
})