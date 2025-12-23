describe('Test Suite',()=>{
    it('Validate About Text',()=>{
        cy.visit('https://brookfield.com/');
        cy.xpath("//button[text()='Accept All Cookies']").click();
        cy.xpath("(//span[text()='Who We Are'])[1]").click({force:true});
        cy.xpath("//div[normalize-space(text())='Our Approach']/following-sibling::h2").should('have.text','As a leading global investment firm, we apply our owner-operator mindset to manage and grow the businesses we own on behalf of our clients.');
    })
})