describe('Test Suite',()=>{
    it('Get Programs',()=>{
        cy.visit('https://vistas.ac.in/');
        cy.get('img.sgpb-popup-close-button-1').click();
        cy.xpath("//span[text()='Academic Programs']").click({force:true});
        cy.get("h1.cmsmasters_heading").scrollIntoView();
        cy.get('div.cmsmasters_toggle_title>a').then((ele)=>{
            cy.wrap(ele).eq(3).should('have.text','School of Nursing');
        })



    })

})