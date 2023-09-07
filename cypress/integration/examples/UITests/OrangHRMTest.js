describe('OrangeHRM', () => {
    let data;

    before(function () {
        // runs once before all tests in the block
        cy.log('Loading Test Data');
        cy.fixture('example').then(function (fData) {
            data = fData;
        })
    })
    it('Login Test', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath("//input[@name='username']").type(data.userName);
        cy.xpath("//input[@name='password']").type(data.passWord);
        cy.xpath("//button[@type='submit']").click();
        cy.get('.oxd-userdropdown-name').should('have.text', 'Paul Collings');
        cy.get('.oxd-userdropdown-name').contains('Paul');
        cy.get('.oxd-userdropdown-name').should('contain.attr', 'class', 'oxd-userdropdown-name');
        cy.get('.oxd-userdropdown-name').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');

    })
})