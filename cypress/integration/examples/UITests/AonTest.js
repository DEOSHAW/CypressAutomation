describe('Test Suite',()=>{
    it('Get Industries',()=>{
        cy.visit('https://www.aon.com/en/');
        cy.xpath("(//a[@href='/en/industries'])[1]").invoke('show');
        cy.xpath("//a[@class='aon-industries-tray__link' and contains(@href,'industries')]/h6").each((el,index,list)=>{
            var industryText=el.text();
            cy.log(industryText);
            if(index==1)
            {
                expect(industryText).to.contain('Financial Institutions');
            }
            
        })

    })
})