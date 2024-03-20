describe('Test Suite',()=>{
    it('Get Company Overview',()=>
    {
        cy.visit('https://corporate.comcast.com/',{headers: { "Accept-Encoding": "gzip, deflate" }});
        cy.xpath("//a[text()='Overview']").click({force:true});
        cy.xpath("//p[contains(text(),'Comcast is a global media and technology company')]").scrollIntoView()
        .then(function(ele){
            var overviewText=ele.text();
            cy.log(overviewText);
            expect(overviewText).to.contain('global media and technology company');
    })

    })
})