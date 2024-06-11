import 'cypress-drag-drop';
describe('Test Suite',()=>{
    it('Drag and Drop test',()=>{
        const dataTransfer = new DataTransfer();
        cy.visit('https://demoqa.com/droppable');
        //cy.get('div#draggable').drag('div#simpleDropContainer>div#droppable');
        cy.get('div#simpleDropContainer>div#droppable>p').should('have.text','Drop here');
    })
})