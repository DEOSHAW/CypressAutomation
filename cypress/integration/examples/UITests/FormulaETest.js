describe('Test Suite',()=>
{
    it("Get Drivers' standings",()=>
    {
        cy.visit('https://www.fiaformulae.com/en');
        cy.get('#onetrust-accept-btn-handler').click();
        cy.xpath("(//a[@href='/en/standings'])[1]").click();
        cy.get('h1.results-standings-header__title').should('have.text','Standings');
        cy.get('td.standings-table__driver>a').each((el,index,list)=>{
            let firstName=el.find('div.standings-table__driver-first').text();
            let lastName=el.find('div.standings-table__driver-last.u-hide-tablet').text();
            cy.log(firstName+" "+lastName);

        })

    })

})