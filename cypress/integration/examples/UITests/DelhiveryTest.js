describe('Test Suite',()=>{
    it('Get Comapny Information',()=>{
        cy.visit('https://www.delhivery.com/');
        cy.xpath("(//span[text()='About Us'])[1]").click({force:true});
        cy.xpath("(//div[contains(@class,'advantage-content-item')])[1]").then((ele)=>{
            var aboutText=ele.text();
            cy.log(aboutText);
            expect(aboutText).to.contain('logistics provider');          
    })


    })
})