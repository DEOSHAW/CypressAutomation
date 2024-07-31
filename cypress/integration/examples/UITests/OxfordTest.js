describe('Test Suite',()=>{
    it('Naviagte to Graduate page',()=>{
        cy.visit('https://www.ox.ac.uk/');
        cy.get('button#ccc-notify-reject>Span').click();
        cy.xpath("//a[text()='Graduate']").click({force:true});
        cy.xpath("//p[contains(text(),'We offer')]").then((ele)=>{
            cy.log(ele.text());
            expect(ele.text()).to.contain('We offer a unique experience to our graduate students');

        })
    })
})