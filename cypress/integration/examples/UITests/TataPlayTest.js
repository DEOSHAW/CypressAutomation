describe('Test Suite',()=>{
    it('Get Important Links',()=>{
        cy.visit('https://www.tataplay.com/');
        cy.get('a.btn-primary').each((el,index,list)=>{
            let elText=el.text();
            cy.log(elText);
            if(index==3)
            {
                expect(elText).to.contain('Go to My Account');
            }
        })
    })
})