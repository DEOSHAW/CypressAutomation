describe('Test Suite',()=>{
    let data;

    before('Get Test Data',()=>{
        cy.fixture('example').then((fData)=>{
            data=fData;

        })
    })
    it('Add to Cart',()=>{
        cy.visit('https://www.demoblaze.com/');
        cy.get('h4.card-title>a').each((el,index,list)=>{
            if(el.text()==data.productName[2])
            {
                cy.wrap(el).click()
            }
            
        })
        cy.xpath("//a[contains(text(),'Add to cart')]").click();
        cy.on('window:alert',(str)=>{
            expect(str).to.contain('Product added');
        })

    })
})