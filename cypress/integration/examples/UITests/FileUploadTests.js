import 'cypress-file-upload';

describe('Test Suite',()=>{
    it.skip('File Upload Test1',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.xpath("//input[@id='file-upload']").attachFile("Test1.txt");
        cy.get('#file-submit').click();
        cy.wait(2000);
        cy.get('h3').contains("File Uploaded!").should('have.text','File Uploaded!');
    })


    it('File Upload Test2',()=>{

        cy.visit('https://formstone.it/components/upload/demo/');
        cy.get('.fs-upload-input').attachFile("Test1.txt");
        var txt="Hello";
        cy.get('span.file').then((ele)=>{
            txt=ele.text();
            cy.log(txt);
            expect(txt).to.contain('Test1.txt');

        });

        


   

      


    })
})