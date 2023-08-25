describe('Wharton Test Suite',()=>{
    it('Get Information about Wharton',function(){
        var historyText;
        cy.visit("https://www.wharton.upenn.edu/");
        cy.xpath("//a[contains(@href,'history')]").click({force:true});
        cy.get('h6').then(function(ele){
            historyText=ele.text();
            cy.log(historyText);
            
        });

        //Total links on the page
        cy.xpath("//a[contains(@href,'https://www.wharton.upenn.edu/')]").should('have.length','82');
        cy.xpath("//a[contains(@href,'https://www.wharton.upenn.edu/')]").each((el,index,list)=>{
            cy.log(el.text());
        });
        
        

    })
})