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

  it.skip('Upload File Test', () => {
    const fileName = Cypress.env('uploadFile') || 'Test1.txt';

    cy.visit('https://www.automationtesting.co.uk/fileupload.html');
    cy.get('input[type="file"]').attachFile(fileName);
    cy.get("input[type='submit']").click();
  });

  it('Print Table Test',()=>{
    cy.visit('https://www.automationtesting.co.uk/tables.html');
    cy.xpath("//table//tbody//tr").then((rows)=>{
      const rowCount = rows.length;
      cy.log(`Total number of rows: ${rowCount}`);
    })

    cy.xpath("//table//tbody//tr[1]//td").then((cells)=>{
      const cellCount = cells.length;
      cy.log(`Total number of cells in the first row: ${cellCount}`);
    })

    cy.xpath("//table//tbody//tr").each(($row, index) => {
      cy.wrap($row).find('td').each(($cell, cellIndex) => {
        const cellText = $cell.text();
        cy.log(`Row ${index + 1}, Cell ${cellIndex + 1}: ${cellText}`);
      });
    });
  });
});