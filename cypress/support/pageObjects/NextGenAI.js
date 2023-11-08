class NextGenAI
{
    getWebTableLink()
    {
        return  cy.xpath("(//a[text()='Demo Site – WebTable'])[1]");
    }

    getEmployerDetailsLabelText()
    {
        return  cy.xpath("//h2[text()='Employer Details']");
    }

    getRowElements()
    {

        return cy.xpath("//table//tr");
    }

    getColElements()
    {
        cy.xpath("//table//tr[1]//td")
        
    }

}
export default NextGenAI; 