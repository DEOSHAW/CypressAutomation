describe('Test Suite',()=>{
    it('Validate About us menu options',()=>{
        cy.visit('https://www.myjar.app/');
        cy.get('div.nav-list>a').then((el)=>{
            cy.wrap(el).eq(0).should('contain.text',"Jar");
            cy.wrap(el).eq(3).should('have.text',"Jar Diaries");
        })

    })
})