describe('Test Suite',()=>{
    it('Get University Vision',()=>{
        cy.visit('https://nalandauniv.edu.in/');
        cy.xpath("//p[contains(text(),'(Nalanda University)')]").scrollIntoView().then(function(ele)
        {
            expect(ele.text()).to.contain('It (Nalanda University) must be adapted to the rhythm');
            cy.wrap(ele).should('have.attr','class','xtra-p')
            .and('have.length',1);


        })




    })
})