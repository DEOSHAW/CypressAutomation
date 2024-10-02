import 'cypress-iframe';
describe('Test Suite',()=>{
    it.skip('Checkout Test',()=>{
        cy.visit('https://demoapps.qspiders.com/ui/dropdown?sublist=0');
        cy.get('#phone').type('9547898850',{force:true});
        cy.get('select#select2').select('Male',{force:true});
        cy.get('select#select3').select('India',{force:true});
        cy.get('select#select5').select('West Bengal',{force:true});
        cy.xpath("//label[text()='City']/../select").select('Howrah',{force:true});
        cy.get('button#continuebtn').click();
        cy.xpath("//p[contains(text(),'What payment method do you prefer')]").then((ele)=>{
            cy.wrap(ele).should('contain.text','What payment method do you prefer');
        })

    })

    it('Frames Test',()=>{
        cy.visit('https://demoapps.qspiders.com/ui/frames?sublist=0');
        cy.frameLoaded('iframe.w-full.h-96');
        cy.iframe().find('input#username').type('Test');
        cy.iframe().find('input#password').type('Test123');
        cy.iframe().find('button#submitButton').click();
        cy.get("div[role='status']").should('contain.text','Login successful');
    })
})