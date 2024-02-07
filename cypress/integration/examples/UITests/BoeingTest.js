describe('Test Suite',()=>{
    it('Get Commercial Services',()=>{
        cy.visit('https://www.boeing.com/');
        cy.xpath("(//a[text()='Services'])[1]").click();
        cy.xpath("(//a[text()='Commercial Services'])[2]").click();
        cy.xpath("//div[@data-title='Commercial Services']/../following-sibling::div[contains(@class,'container')]//h5")
        .each((el,index,list)=>{
            cy.log(el.text());

        })
    })


})