describe('Test Suite',()=>{
    it('Web Table Test',()=>
    {
        cy.visit('https://cosmocode.io/automation-practice-webtable/');
        cy.get('table#countries>tbody>tr').each((el,index,list)=>
        {
            if(el.text().includes('India'))
            {
                var ele=el.find('td').eq(0);
                cy.wrap(ele).scrollIntoView().click();
                cy.log('Primary Language is: '+el.find('td').eq(4).text());
            }
        })

    })
})