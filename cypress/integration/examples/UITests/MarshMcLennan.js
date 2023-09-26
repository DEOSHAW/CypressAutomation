describe('MarshMcLennan Test',()=>{
    it('Get Solutions list',()=>{
        cy.visit('https://www.marshmclennan.com/');
        cy.xpath("(//a[@href='/solutions.html'])[1]").click();

        //Get first attribute value
        cy.get('.tile__img img').eq(0).invoke('attr','alt').then((value)=>{

            cy.log(value);

        })

        //Get all the attribute values

        cy.get('.tile__img img').each((el,index,list)=>{
            cy.wrap(el).invoke('attr','alt').then((value)=>{

                cy.log(value);

            })

        })


        })

    })
