describe('Test Suite',()=>{
    it('Checkout Test',()=>{
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
})