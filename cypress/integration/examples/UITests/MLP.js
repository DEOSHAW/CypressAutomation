describe('Test Suite',()=>{
    it('Get Team Names',()=>{

        cy.visit("https://www.majorleaguepickleball.net/");
        cy.xpath("//a[@aria-label='Close Popup']//*[local-name()='svg']").click({force:true});
        cy.xpath("(//a[contains(text(),'League Standings')])[1]").click({force:true});

        cy.xpath("//table[@aria-label='2023 League Table']//tbody//tr//td[1]//span[contains(@class,'name')]")
        .each((ele,index,list)=>{
            cy.log(ele.text());

        })


    })
})