describe('Test Suite',()=>{
    it('Shadow Root Element Test',()=>{
        cy.visit('https://demoapps.qspiders.com/ui/shadow?sublist=0');
        cy.get("input[placeholder='Enter your username']").type('Test',{force: true});
        cy.get("input[placeholder='Enter your password']").type('Test123',{force: true});
        

    })
})