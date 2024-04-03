describe('Test Suite',()=>{
    it('Nested Frames Switching Demo',()=>{
        //cy.viewport(1000,660);
        cy.visit('https://demo.automationtesting.in/Index.html');
        cy.get('button#btn2').click();
        cy.xpath("//a[text()='Frames']").click({force:true});
        cy.xpath("//a[text()='Iframe with in an Iframe']").click({force:true});

        cy.get('div#Multiple>iframe')
            .its('0.contentDocument')
            .its('body')
            .find("iframe[style='float: left;height: 250px;width: 400px']")
            .its('0.contentDocument')
            .its('body')
            .find("input[type='text']").type('Frames');
       
        


    })
})