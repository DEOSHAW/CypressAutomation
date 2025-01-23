describe('Test Suite', () => {
    it('Navigate to Start a SIP Section', () => {
        cy.visit('https://www.axismf.com/');
        cy.get('ion-button.btmStickyBtn.ion-no-margin.ion-color.ion-color-burgundy.md.button.button-solid.ion-activatable.ion-focusable.hydrated').click();
        cy.get('h4.ion-hide-md-down.subHeading').should('contain.text', 'Invest small amount periodically in scheme of your choice.');
    })
})