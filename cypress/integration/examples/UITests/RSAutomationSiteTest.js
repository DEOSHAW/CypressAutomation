describe('Test Suite',()=>{
    it('Get the list of courses',()=>{
        cy.visit('https://rahulshettyacademy.com/blog/index.php/automation-testing-interview-questions/');
        cy.url().should('include','automation-testing-interview-questions');
        cy.get('a.tve-froala').each((el,index,list)=>
        {
            if(index==1)
            {
                expect(el.text()).to.contain('WebServices / REST API Testing with SoapUI');
            }

        })
        

    })
})