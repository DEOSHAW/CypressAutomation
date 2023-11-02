describe('Test Suite',function(){


    it('Alert Handling Test',()=>{
        cy.visit('https://nxtgenaiacademy.com/alertandpopup/');
        //Get text from alert box
        cy.get("button[name='alertbox']").click();
        cy.on('window:alert',(str)=>{

            expect(str).to.contain('alert box!');

        })

        //Get text from confirm alert box
        cy.get("button[name='confirmalertbox']").click();
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Confirm pop up with OK and Cancel button');

        })
    })

})