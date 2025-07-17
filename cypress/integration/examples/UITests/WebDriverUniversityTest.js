describe('Test Suite',()=>{
    it('Get course List',()=>{
        cy.visit('https://webdriveruniversity.com/index.html');
        cy.get('a.btn.btn-promo.btn-block').each((el,index,list)=>{
            if(index==3)
            {
                cy.wrap(el).should('have.text','Playwright with Java');
                expect(list.length).to.equal(10);
            }
            
        })
        cy.get('a.btn.btn-promo.btn-block').then((ele)=>{
            cy.wrap(ele).should('have.length',10);
            cy.wrap(ele).eq(1).should('have.text','API Testing with Postman');
        })

    })
})