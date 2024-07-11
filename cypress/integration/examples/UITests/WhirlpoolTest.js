describe('Test Suite',()=>{
    it('Get Whirlpool Appliances',()=>{
        cy.visit('https://www.whirlpoolindia.com/');
        cy.get('a.whirlpoolindia-store-components-1-x-departmentItem').then((ele)=>{
            cy.log(ele.text());
            cy.wrap(ele).eq(1).should('have.text','Washing Machines');

        })
    })
})