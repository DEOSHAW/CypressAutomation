describe('Test Suite',()=>{

    it('Get Application Frameworks',()=>{
        cy.visit('https://www.nvidia.com/en-in/');
        cy.get("label[for='nv-level1-tab1']").click();
        cy.get("label[for='tab1-nv-level2-tab2']").click();
        cy.xpath("(//div[text()='Application Frameworks'])[1]/../ul//a")
        .each((el,index,list)=>{
            if(index==1)
            {
            cy.log(cy.wrap(list.get(index)).should('contain.text','DRIVE'));
            }
         
               
            

        })
    })

})