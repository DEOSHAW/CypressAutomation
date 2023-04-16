/// <reference types="Cypress" />

describe('Intercept Test Suite', function() 
{

it('Test-1',function() {

    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    

  cy.intercept({
    method: 'GET',
    url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
     },
     {
        statusCode: 200,
        body: [
            {
                "book_name": "Rest Assured",
                "isbn": "SPY40",
                "aisle": "2529857"
            }  ]
     }).as('bookretrievals')

     cy.get('.btn.btn-primary').click();
     cy.wait('@bookretrievals').then(({request,response})=>
     {

        //To validate API request returns one row and on UI also one row is displayed
        cy.get('.table.table-dark tbody tr').should('have.length',response.body.length);
        
     })
     cy.get('p').should('have.text','Oops only 1 Book available');

})


})




























