describe('Test Suite',()=>{
    it('Get Faculties',()=>{
        cy.visit('https://nus.edu.sg/');
        cy.xpath("(//a[text()='Faculties & Schools'])[2]").click({force:true});
        cy.get('div.tile-item>a>span').each((el,index,list)=>{
            if(index<16)
            {
                cy.log(el.text());
                if(index==2)
                    expect(el.text()).to.contain('Computing');

            }
               

        })


    })
})