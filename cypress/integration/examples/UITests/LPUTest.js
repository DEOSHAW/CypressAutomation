describe('LPU Test Suite',()=>{
    it('Get Courses',()=>{
        cy.visit('https://www.lpu.in/');
        cy.xpath("//div[starts-with(text(),'Academics')]/parent::a").click();
        cy.xpath("//a[contains(@href,'https://www.lpu.in/schools/') and @class='menu-link']").then((ele)=>{
            cy.wrap(ele).eq(3).should('contain.text','Electronics & Electrical').invoke('removeAttr','target').click({force:true});
            cy.title().should('eq','Top Electronics & Electrical Engineering Colleges in India | LPU');
        })
    })
})