describe('Test Suite', () => {
    let data;
    before('Get Test Data', () => {
        cy.fixture('example').then((fData) => {
            data = fData;
            cy.log(data);

        })
    })
    it('Add books to basket', () => {
        cy.visit('https://practice.automationtesting.in/shop/');

        data.booksName.forEach((bookName) => {
            cy.xpath("//h3[text()='" + bookName + "']/../following-sibling::a").scrollIntoView().click();
        });
        cy.get('.cartcontents').click();
        cy.get('td.product-name>a').each((ele,index,list)=>{
            expect(list.length).to.equal(2);
            if(index==0)
            cy.wrap(ele).should('have.text','Functional Programming in JS');
            else
            cy.wrap(ele).should('have.text','Selenium Ruby');

        })
    })
})