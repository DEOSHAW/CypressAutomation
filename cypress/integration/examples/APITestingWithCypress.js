/// <reference types="Cypress" />

describe('API Test Suite', function() 
{

it('Test-1',function() {

    //Change payload everytime to make it work
    cy.request('POST','http://216.10.245.166/Library/Addbook.php',

        {

            "name":"Appiumsrtrtt145",
            "isbn":"xyzgetf",
            "aisle":"238",
            "author":"Deo Shaw"
            }
  )
    .then(function(response)
    {
      expect(response.body).to.have.property('Msg','successfully added');
      expect(response.status).to.equal(200);
    })

})


})




























