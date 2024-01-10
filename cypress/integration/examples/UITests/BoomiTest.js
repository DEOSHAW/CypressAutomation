describe('Test Suite',()=>{
    it('Get Supported Applications',()=>{
        cy.visit('https://boomi.com/');
        cy.xpath("(//a[contains(text(),'Solutions')])[1]").invoke('show');
        cy.xpath("//a[contains(@href,'/application')]//span").each((el,index,list)=>{
            if(index<7)
            {
                var application=el.text();
                cy.log(application);
                if(index==2)
                {
                    expect(application).to.equal('SAP');

                }
            }
        })
    })
})