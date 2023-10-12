describe('Test Suite',()=>{
    it('Get Products List',()=>{
        //cy.viewport(1920,1080);
        cy.visit('https://www.guidewire.com/');
        cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
        cy.wait(1000);
       cy.xpath("//a[contains(@href,'/products')]").each((el,index,list)=>{
            
           if(index<16)
           {
             cy.log(el.text());
           }
        })
       
        
    })
})