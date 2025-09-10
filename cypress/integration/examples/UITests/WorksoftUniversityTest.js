describe('Test Suite',()=>{
    it('Validate Worksoft Courses',()=>{
        cy.visit('https://worksoft.com/worksoft-university/');
        cy.xpath("//h2[text()='Worksoft University Courses']").scrollIntoView();
        cy.get('h2.wp-block-heading.has-text-color>strong')
        .should('have.length',19).each(($el,index,list)=>{
            cy.log($el.text());
            if(index==3)
            {
                cy.wrap($el).should('contain.text','Worksoft Advanced');
            }
        });


    })
})