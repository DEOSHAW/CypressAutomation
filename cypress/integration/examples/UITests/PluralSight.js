describe('Test Suite',()=>{
    it('Get Skills plans',()=>{


       cy.visit('https://www.pluralsight.com/');
       cy.get("button[aria-label='Mobile hamburger menu']").click();
       cy.get("a[data-aa-title='ps-nav-View plans']").click({force:true});
       cy.wait(1000);
       cy.xpath("(//a[@data-aa-title='view-skills-plans'])[1]").scrollIntoView().click({force:true});

       cy.get('.pricing_display').each((el,index,list)=>{

       cy.log(el.find('h2').text()+"==>"+el.find('div.pricing-annual div.api-price-styling span.curr-major').text()+" ");
      

       })







    })
})