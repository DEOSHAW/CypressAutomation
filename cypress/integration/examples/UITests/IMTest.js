describe('Test Suite',()=>{
    it('Navigate to shop for Plans',()=>{
        cy.visit('https://my.viabenefits.com/');
        cy.xpath("//a[text()='See Plans']").click();
        cy.get('h1').should('have.text','Prepare To Shop');
        cy.get("input[name='zipcode']").should('have.attr','title','Enter 5-digit zip code');
    })

})