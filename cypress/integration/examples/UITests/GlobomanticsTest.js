describe('GlobomanticsTest Suite',()=>{
    it('Get Themes',()=>{
        cy.visit('https://www.pluralsight.com/teach/author-tools/globomantics/index');
        cy.get('section.sec_include>div>div>div>h3').each((el,index,list)=>{
            if(index==1)
            {
                cy.wrap(el).should('have.text','ROBOTICS');
            }
        })

        cy.get('section.sec_include>div>div>div>h3').eq(2).should('have.text','STRANGERS RISE');
        cy.get('section.sec_include>div>div>div>h3').eq(0).then((el)=>{
            cy.log(el.text());
            expect(el.text()).to.equal('DARK ENERGY');
        })

    })
})