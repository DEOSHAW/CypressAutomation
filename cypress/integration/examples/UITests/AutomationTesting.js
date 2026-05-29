import 'cypress-file-upload';

describe('Test Suite', () => {
  it.skip('Dropdown Selection Test', () => {
    cy.visit('https://www.automationtesting.co.uk/dropdown.html');
    cy.get('select#cars').select('Mercedes')
      .find('option:selected')
      .should('have.text', 'Mercedes');
  })

  it.skip('Hold Shift and Click Test', () => {
    cy.visit('https://www.automationtesting.co.uk/actions.html');
    cy.xpath("(//div[@id='doubleClickArea'])[2]").click({ shiftKey: true });
    cy.on('window:alert', (text) => {
      expect(text).to.equal('The SHIFT key was pressed!')
    })
  });

  it('Upload File Test', () => {
    const fileName = Cypress.env('uploadFile') || 'Test1.txt';

    cy.visit('https://www.automationtesting.co.uk/fileupload.html');
    cy.get('input[type="file"]').attachFile(fileName);
    cy.get("input[type='submit']").click();
  });
})