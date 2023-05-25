

describe('My Second Test Suite', function() 
{

it('Web Table Test-1',function() {


    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    cy.visit("https://cosmocode.io/automation-practice-webtable/");

    cy.get('#countries tr').each((e1,index,list)=>{


        var text=e1.find('td').text();
        if(text.includes('Japan')||text.includes('India'))
        {
            var count=index+1;

            cy.get("#countries tr:nth-child("+count+") td input").eq(0).click();
            cy.log(text);
            cy.log(index);
        }

  })



}  )



}  )