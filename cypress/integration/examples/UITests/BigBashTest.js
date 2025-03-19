import BigBash from "../../../support/pageObjects/BigBash";

describe('Test Suite', () => {
    const bigBash=new BigBash();
    it('Get Team Names', () => {
        cy.visit('https://www.bigbash.com.au/');
        bigBash.getBigBashClubs().each((el, index, list) => {
            
            if(index==3)
            {
                cy.wrap(el).should('have.attr','title','Melbourne Renegades');
                expect(list.length).to.eq(8);
            }

        })

    })
})