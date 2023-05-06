describe('My First Test Suite', function() 
{

it('My FirstTest case',function()
 {

  

    cy.visit("https://www.w3schools.com/html/html_tables.asp");
    cy.xpath("//h1[contains(text(),'HTML')]").should('have.text','HTML Tables');
    var rowCount;
    var colCount;

   
    rowCount= cy.xpath("//table[@id='customers']//tr").should('have.length',7).then(function(row){

    rowCount=row.length;
    cy.xpath("//table[@id='customers']//tr[2]//td").then((col)=>{

    colCount=col.length;
    cy.log("Row count is: "+rowCount);
    cy.log("Column count is: "+colCount);

    for(let i=2;i<=rowCount;i++)
    {
        for(let j=1;j<=colCount;j++)
        {
            cy.xpath("//table[@id='customers']//tr["+i+"]//td["+j+"]")
            .then((ele)=>
            {

                cy.log("Value is: "+ele.text());


            })
        }
    }

    })
    

    });

})

})






