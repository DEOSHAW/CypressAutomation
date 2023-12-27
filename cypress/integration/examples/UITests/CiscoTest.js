import Cisco from "../../../support/pageObjects/Cisco";

describe('Test Suite',()=>{
    var cisco=new Cisco();
    it('Navigate to Site Map',()=>{
        cy.visit('https://www.cisco.com/site/in/en/index.html');
        cisco.getSiteMapLink().scrollIntoView().click();
        cisco.getPageHeading().then(function(ele)
        {
            expect(ele.text()).to.contain('Explore Cisco');
            cy.wrap(ele).should('have.attr','data-owner',"ID");

        })
    })
})