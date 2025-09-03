import 'cypress-file-upload';
import Guru99 from '../../../support/pageObjects/Guru99.js';
describe('Test Suite',()=>{
    it.only('File Upload Test',()=>
    {
        const ob=new Guru99();
        cy.visit('https://demo.guru99.com/test/upload/');
        ob.getChooseFile().attachFile('Test1.txt');
        ob.getTerms().click();
        ob.getSubmitButton().click();
        ob.getSuccessMessage().should('contain.text','successfully uploaded');
        ob.getSuccessMessage().then((ele)=>{
            expect(ele.text()).to.contain('uploaded');
        })



    })

})