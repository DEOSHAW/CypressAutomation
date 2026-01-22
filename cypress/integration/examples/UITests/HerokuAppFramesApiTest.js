import 'cypress-iframe';
describe('Test Suite', () => {
    it('ValidateMiddleFrameTexts', () => {
        cy.visit('https://testpages.herokuapp.com/pages/embedded-pages/frames/?utm_source=chatgpt.com');
        cy.get('frame[name="middle"]', { timeout: 15000 })
            .its('0.contentDocument.body').should('not.be.empty')
            .then(cy.wrap)
            .within(() => {
                cy.get("li[id*='middle']").each((el, index, list) => {
                    if (index == 3) {
                        cy.log(el.text());
                        expect(el.text().trim()).to.equal('Middle List Item 3');
                    }
                })
            })
    })
})