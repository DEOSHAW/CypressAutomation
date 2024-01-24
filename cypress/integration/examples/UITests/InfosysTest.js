describe('Test Suite',()=>{
    it('Navigate to Infosys Institute',()=>{
        
        cy.visit('https://www.infosys.com/');
        cy.xpath("//a[contains(@title,'Infosys Knowledge Institute Business')]").click();
        cy.xpath("//h1").should('contain.text','Business Technology Thought Leadership');

        cy.get('p.heading1').each((el,index,list)=>{
            cy.log(el.text());

        })
    })
})