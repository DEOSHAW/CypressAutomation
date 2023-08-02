class MLC
{


    getTeamLink()
    {
        return cy.get('.nav__li:nth-child(4)>a');
    }

    getTeamOrcasLink()
    {
       return cy.get('.team__card.team__card--orcas');
    }

    getRosterLink()
    {
        return cy.xpath("//a[text()='Roster']");
    }

    getRoster()
    {
        return  cy.get('.roster__card--name');
    }

}

export default MLC;