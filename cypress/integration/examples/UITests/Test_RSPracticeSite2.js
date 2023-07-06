describe('Test Suite',()=>{

    let data;

    before(function () {
        // runs once before all tests in the block
        cy.log('Loading Test Data');
        cy.fixture('example').then(function (fData) {
         data = fData;
        })
      })


    it('Keyboard Actions Test',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //cy.get('#name').type('Deo Shaw');

        cy.log(data.alertMessage)

        cy.get('#name').invoke('val','Deo Shaw');
        cy.wait(2000);
        cy.get('#name').type('{backspace}');
        cy.get('#name').click().type('{selectall}');
        cy.get('#alertbtn').click();
        cy.on('window:alert',(str)=>{
            expect(str).to.include(data.alertMessage);
        })
        cy.xpath("//h1[text()='Practice Page']").should('have.text','Practice Page')
        .and('be.visible');

       
      
    })
})