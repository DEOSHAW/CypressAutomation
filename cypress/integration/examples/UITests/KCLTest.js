describe('Test Suite', () => {
    it('Validate Team names', () => {
        cy.visit('https://kabaddichampionsleague.com/');
        cy.xpath("//a[text()='Teams']").click();
        cy.get("a[class*='team-card']").eq(0).invoke('attr', 'title').then((title) => {
            cy.log(title);
            expect(title).to.equal('Bhiwani Bulls');
        })
    })
})