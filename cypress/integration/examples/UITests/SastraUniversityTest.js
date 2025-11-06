describe('Sastra University Website Tests', () => {
    it('Validate School Name',()=>{
        cy.visit('https://www.sastra.edu/');
        cy.xpath("(//a[text()='Schools'])[1]").click({force:true});
        cy.scrollTo(0, 300, { duration: 1000 });
        cy.xpath("//a[contains(@id,'slider-school-of')]").eq(3).should('contain.text','School of Electrical & Electronics Engineering');
    })
  });