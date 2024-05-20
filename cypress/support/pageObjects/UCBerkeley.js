class UCBerkeley {

    getLength() {
        return cy.xpath("//a[@rel='next']");
    }

    printResearchUnits()
    {
        cy.get('span.field--name-title').each((el, index, list) => {
            cy.log(el.text());

        })
    }
    clickOnNext()
    {
        return cy.xpath("//a[@rel='next']").click();
    }

}
export default UCBerkeley;