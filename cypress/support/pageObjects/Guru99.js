class Guru99
{

    getChooseFile()
    {
        return cy.get('#uploadfile_0');
    }

    getTerms()
    {
        return  cy.get('#terms');
    }
    getSubmitButton()
    {
        return cy.get('#submitbutton');
    }

    getSuccessMessage()
    {
        return cy.get('#res > center');
    }

}
export default Guru99;