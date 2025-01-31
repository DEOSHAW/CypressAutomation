describe('Test Suite',()=>{
    it('Navigate to Sign Up page',()=>
    {
        cy.visit('https://applitools.com/');
        cy.xpath("(//a[text()='Free Trial'])[2]").click();
        cy.xpath("//h1[text()='Sign up for a free account today!']").then((ele)=>{
            expect(ele).to.contain('Sign up for a free account today!')
        })
    })
})