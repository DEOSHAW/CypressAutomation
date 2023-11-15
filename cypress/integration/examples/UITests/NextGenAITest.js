import 'cypress-iframe';
describe('Test Suite',function(){

    beforeEach('Open Portal',()=>{
        cy.visit('https://nxtgenaiacademy.com');

    })

    it.skip('Alert Handling Test',()=>{
        //Navigate to Alerts page
        cy.xpath("(//a[text()='Demo Site – Alert and Popup'])[2]").click({force:true});
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

    it('Frame Handling test',()=>{
        //Navigate to Iframes page
        cy.xpath("(//a[contains(text(),'iFrames')])[2]").click({force:true});
        //Switch to form iframe
        //cy.frameLoaded(':nth-child(3) > iframe');
        //If there are multiple iframes on the page, use below approach instead of using frameLoaded method
        cy.iframe("iframe[name='formpage']").find('input#vfb-5').type('Iframes');
        cy.iframe("iframe[name='formpage']").find('input#vfb-7').type('Test');
        cy.wait(2000);
    })

})