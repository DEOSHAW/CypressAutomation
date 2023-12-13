describe('Test Suite',()=>{
    it('Pricing Test',()=>{
        cy.visit('https://ultimateqa.com/automation/?ref=hackernoon.com');
        cy.xpath("//a[text()='Fake Pricing Page']").click();

        cy.get('div.et_pb_pricing_table').each((el,index,list)=>{
           cy.log(el.find('h4.et_pb_pricing_title').text()+"==>"+el.find('span.et_pb_sum').text()+"/month");
           
        })
    })
})