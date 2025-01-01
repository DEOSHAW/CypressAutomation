describe('Test Suite', () => {
    it('Get International Student Info', () => {
        cy.visit('https://www.coventry.ac.uk/');
        cy.xpath("//h2[contains(text(),'international university')]").scrollIntoView();
        cy.xpath("//h2[contains(text(),'international university')]/..//p").then((ele) => {
            cy.wrap(ele).should('contain.text', '150 countries')
                .and('contain.text', '13,000 international students');

        })

    })
})