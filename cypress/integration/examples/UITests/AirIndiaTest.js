describe('Air India Test Suite',()=>{
    it('Validate Security check during Search Flight',()=>{
        cy.visit('https://www.airindia.com/');
        cy.get('input#From').type('Kolkata{enter}');
        cy.get('input#To').type('Dubai{enter}');
        cy.xpath("(//div[contains(@class,'mat-select-arrow')])[1]").click();
        cy.xpath("//span[text()='One Way' and @class='mat-option-text']").click({force:true});
        cy.get('button.showFlightBtn').click();
        cy.get('.headline-inner > p').should('contain.text','security check');

    })
})