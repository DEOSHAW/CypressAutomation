describe('Via Benefits Test Suite', () => {
    let data;

    before('Get Test Data',()=>{
        cy.fixture('example').then((fData) => {
            data = fData;

        })
    })

    
    it('Login with incorrect credentials', () => {
        cy.visit('https://www.viabenefitsaccounts.com/benefits/logindisplay.jsp?app=docmgmt&mode=S');
        cy.get('input#username').type(data.userName);
        cy.get('input#signin').click();
        cy.origin('https://wtwb2cprod.b2clogin.com', () => {

            cy.get('input#passwordInput').type("Test123");     
            cy.get('button.button-continue').click();
            cy.get('p.err-message:nth-child(2)').then((ele) => {
                let errorMessage = ele.text();
                cy.log(errorMessage);
                expect(errorMessage).to.contain('Invalid User Credentials');

            })

        })


    })
})