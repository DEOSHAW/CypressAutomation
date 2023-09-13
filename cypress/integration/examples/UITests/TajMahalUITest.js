describe('Test Suite',()=>{
    it('Get Nearby Attractions of Tajmahal',()=>{

        cy.visit('https://www.tajmahal.gov.in/');
        cy.xpath("(//a[@href='nearby-attractions.aspx'])[1]").click();
        cy.get('.attractions h3').each((el,index,list)=>{
            if(el.text().includes('Taj'))
            {

                cy.log(el.text());

            }

        })

    })
})