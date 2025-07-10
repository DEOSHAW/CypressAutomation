import 'cypress-file-upload';
describe('Heroku Test suite', function () {

    it('Drag and Drop Page Validation',()=>{
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop');
        cy.get('h3').should('have.text','Drag and Drop');
    })

    it.skip('Upload File Test', () => {
            cy.visit('https://the-internet.herokuapp.com/upload');
            cy.get('input#file-upload').attachFile('Test1.txt');
            cy.get('input#file-submit').click();
            cy.get('div#uploaded-files').should('contain.text','Test1.txt');
        })

    it.skip('Select from Dropdown', () => {
        cy.visit('https://the-internet.herokuapp.com/dropdown');
        cy.get('select#dropdown').select('Option 1');
        cy.get('select#dropdown');
        cy.get('h3').should('have.text', 'Dropdown List');
    })


    it.skip('Test-Dynamic element loading', () => {
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading');
        cy.get("a[href='/dynamic_loading/2']").click();
        cy.get('#start>button').click();
        cy.get('#finish>h4').should('be.visible').
            then(function (ele) {
                expect(ele.text()).to.contain('Hello World!');
            })
        })
})