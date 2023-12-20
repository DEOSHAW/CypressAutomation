describe('Test Suite',()=>{

    beforeEach('Launch Browser',()=>{
        cy.visit('https://ultimateqa.com/automation/?ref=hackernoon.com');
    })

    it.skip('Pricing Test',()=>{
        cy.xpath("//a[text()='Fake Pricing Page']").click();

        cy.get('div.et_pb_pricing_table').each((el,index,list)=>{
           cy.log(el.find('h4.et_pb_pricing_title').text()+"==>"+el.find('span.et_pb_sum').text()+"/month");
           
        })
    })

    it('Web Tables with No ID Test',()=>{
        let rowNum,colNum;
        cy.xpath("//a[contains(text(),'Interactions with simple elements')]").click();
        cy.xpath("//h2[contains(text(),'HTML Table with no id')]/../table//tr").then((ele)=>{
            rowNum=ele.length;
            cy.xpath("//h2[contains(text(),'HTML Table with no id')]/../table//tr[1]/th").then((ele)=>{
                colNum=ele.length;
                cy.log("Row count is: "+rowNum);
            for(let i=1;i<=rowNum;i++)
            {
            for(let j=1;j<=colNum;j++)
            {
                if(i==1)
                {
                    cy.xpath("//h2[contains(text(),'HTML Table with no id')]/../table//tr["+i+"]/th["+j+"]")
                    .then((ele)=>{
                        cy.log(ele.text());
                    })

                }
                else
                {
                    cy.xpath("//h2[contains(text(),'HTML Table with no id')]/../table//tr["+i+"]/td["+j+"]")
                    .then((ele)=>{
                        cy.log(ele.text());
                    })

                }
            }
        }

            })

            
            

        })
        



    })
})