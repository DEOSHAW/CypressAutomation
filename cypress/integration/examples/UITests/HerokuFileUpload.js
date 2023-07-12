import 'cypress-file-upload';

describe('Test Suite',()=>{
    it('File Upload',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.xpath("//input[@id='file-upload']").attachFile("Test1.txt");
        cy.get('#file-submit').click();
        cy.wait(2000);
        cy.get('h3').contains("File Uploaded!").should('have.text','File Uploaded!');
    })
})