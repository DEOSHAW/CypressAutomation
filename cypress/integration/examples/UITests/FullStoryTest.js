describe('Test Suite',()=>{
    it('Get statment of inclusion',()=>{
        cy.visit('https://www.fullstory.com/');
        cy.xpath("(//a[text()='About Us'])[1]").click({force:true});
        cy.xpath("//div[text()='Statement of inclusion']").scrollIntoView();
        cy.xpath("//div[text()='Statement of inclusion']/following-sibling::div/p").then((ele)=>{
            cy.wrap(ele).should('contain.text','At Fullstory, we are focused on creating an environment where anyone can thrive');
            expect(ele.text()).to.contain('regardless of race or color, gender or gender identity, sex or sexual orientation, religion or lack thereof, genetic information, national origin, pregnancy, childbirth, or related medical conditions, age, disability or handicap, citizenship status, or service member status')

        })
    })
})