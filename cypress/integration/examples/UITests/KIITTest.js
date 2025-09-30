describe('Test Suite',()=>{
    it('Validate School Names',()=>{
        cy.visit('https://kiit.ac.in/');
        cy.xpath("(//span[text()='Schools'])[1]").click({force:true});
        cy.get("h2.fusion-responsive-typography-calculated").each(($el,index,$list)=>{
            const text=$el.text();
            cy.log(text);
            if(index==3)
            {
                expect(text).to.equal('School of Architecture & Planning');
            }
        })
    })
})