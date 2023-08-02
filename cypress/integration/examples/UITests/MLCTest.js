import MLC from "../../../support/pageObjects/MLC";
describe('Test Suite',()=>{
    it('GetTeamRoster',()=>{

        const mlc=new MLC();
        cy.visit('https://www.majorleaguecricket.com/');
        mlc.getTeamLink().click();
        mlc.getTeamOrcasLink().scrollIntoView().click();
        mlc.getRosterLink().should('have.text','Roster');
        mlc.getRosterLink().click();
        mlc.getRoster().each((player,index,list)=>{
           var playerName=player.text();

            if(index==0)
            {
               expect(playerName).to.equal('nauman anwar');
            }
            cy.log(playerName);
            
         })

    })
})