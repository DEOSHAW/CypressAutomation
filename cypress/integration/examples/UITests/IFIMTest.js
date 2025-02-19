describe('Test Suite',()=>{
    it('Get Faculties List',()=>{
        cy.visit('https://ifim.edu.in/');
        cy.xpath("(//a[text()='Faculty'])[1]").invoke('show');
        cy.xpath("(//a[text()='Faculty'])[1]/following-sibling::ul//a").each((el,index,list)=>{
            if(index==1)
            {
                cy.wrap(el).should('have.text','Faculty of Computer Applications');
                cy.wrap(el).should('not.have.text','School of Law');
            }

        })
    })
})