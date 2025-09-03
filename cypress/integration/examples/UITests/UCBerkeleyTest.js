import UCBerkeley from "../../../support/pageObjects/UCBerkeley.js";
describe('Test Suite', () => {
    const ucbk = new UCBerkeley();
    it('Get Reserach Unit', () => {
        cy.visit('https://www.berkeley.edu/');
        cy.xpath("//a[text()='Research programs']").click({ force: true });
        let count = 1;
        let limit = 0;
        cy.xpath("//a[contains(@title,'page')]").then((ele) => 
        {
            limit = ele.length - 1;
            cy.log(limit);
            while (count <= limit) 
            {
                ucbk.printResearchUnits();
                if(count<=limit-1)
                {
                ucbk.clickOnNext();
                }
                count++;
               
            }
        })

    })
})