import 'cypress-drag-drop';
import 'cypress-iframe';
describe('Test Suite',()=>{
    it.skip('Drag and Drop test',()=>{
        const dataTransfer = new DataTransfer();
        cy.visit('https://demoqa.com/droppable');
        //cy.get('div#draggable').drag('div#simpleDropContainer>div#droppable');
        cy.get('div#simpleDropContainer>div#droppable>p').should('have.text','Drop here');
    })

    it('Get text inside frame',()=>{
        cy.visit('https://demoqa.com/frames');
        cy.iframe('#frame1').find('h1#sampleHeading').should('have.text','This is a sample page');
})
})