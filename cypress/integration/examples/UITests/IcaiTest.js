describe('ICAI Test Suite', () => {
    it('Validate page title', () => {
        cy.visit('https://www.icai.org/');
        cy.xpath("//img[contains(@src,'icainow')]/parent::a").invoke('removeAttr', 'target').click();
        cy.url().should('eq', 'https://mobile.icai.org/');
        cy.origin('https://mobile.icai.org', () => {
            cy.get("p[align='justify']>b").should('contain.text','disseminating information to empower members, students and other stakeholders with knowledge and expertise')
        });
        
    });
});