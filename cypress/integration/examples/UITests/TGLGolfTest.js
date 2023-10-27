describe('Test Suite',()=>{

    it("Get Players' list",()=>{
        cy.visit('https://tglgolf.com/');
        cy.url().should('not.eq','https://www.google.com');
        cy.xpath("//h2[text()='The Players']").scrollIntoView();
        //Get Players' Names
        cy.get('div.css-1ft0wum').each((el,index,list)=>{
           var firstName= el.find('.chakra-text.css-tr1b0o').text();
           var lastName= el.find('.chakra-text.css-1jcwvcl').text();
           if(index==0)
           {
            firstName.includes("Tiger");
           }
           cy.log(firstName+lastName);
        })
    })

})