describe('Test Suite', () => {

    let data;

    before('Get Test Data', () => {
        cy.fixture('example').then((fData) => {
            data = fData;

        })
    })
    beforeEach('Launch Portal', () => {
        cy.visit('https://demo.automationtesting.in/Index.html');
        cy.get('button#btn2').click();

    })
    it('Nested Frames Switching Demo', () => {
        cy.xpath("//a[text()='Frames']").click({ force: true });
        cy.xpath("//a[text()='Iframe with in an Iframe']").click({ force: true });

        cy.get('div#Multiple>iframe')
            .its('0.contentDocument')
            .its('body')
            .find("iframe[style='float: left;height: 250px;width: 400px']")
            .its('0.contentDocument')
            .its('body')
            .find("input[type='text']").type('Frames');

    })

    it('Input Country Demo', () => {
        cy.xpath("//a[normalize-space(text())='AutoComplete']").click({ force: true });
        cy.get('#searchbox').type(data.country);

    })
})