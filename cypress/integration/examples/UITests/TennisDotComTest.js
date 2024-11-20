describe('Test Suite', () => {
    it('Get Tennis Rankings', () => {
        cy.visit('https://www.tennis.com/');
        cy.xpath("(//span[text()='Players & Rankings'])[1]").click();
        cy.get('div.tc-players-rankings__players-item--name>a>span').each((el, index, list) => {
            if (index == 6) {
                expect(el.text()).to.equal('Novak')
                expect(el.text()).to.not.equal('Jannik')
            }

        })

    })
})