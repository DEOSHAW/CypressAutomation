describe('Test Suite',()=>{
    it('Login Test',()=>{
        cy.visit('https://demo.guru99.com/test/newtours/');
        cy.get("input[name='userName']").type('abc');
        cy.get("input[name='password']").type('abc123');
        cy.get("input[name='submit']").click();
        cy.get('h3').should('contain.text','Success')
        .and('have.length',1);
        cy.get('h3').then((ele)=>{
            expect(ele.text()).to.contain('Login Successfully');

        })


    })
})