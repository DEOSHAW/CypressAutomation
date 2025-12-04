describe('Test Suite for FIFA Website', () => {
    it("Get Top 5 In Fifa Men Rankings", () => {
        cy.visit("https://www.fifa.com/en");
        cy.get('button#onetrust-reject-all-handler').click();
        cy.get('div.pop-up_closeIcon__etsqq').click();
        cy.xpath("//a[text()='RANKINGS']").click();
        cy.xpath("(//table[contains(@class,'table-module_table')])[1]/tbody/tr/td[2]//span").each(($el, index, $list) => {
            if (index < 5) {
                cy.log($el.text());
                if(index==0)
                {
                    cy.wrap($el).should('have.text','Spain');
                    expect($el.text()).to.equal('Spain');
                }
                    
                    

            }
        });

    })

});