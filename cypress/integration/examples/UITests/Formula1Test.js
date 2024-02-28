import 'cypress-iframe';
describe('Test Suite',()=>{
    let rowCount,colCount;
    it("Get Drivers' standings",()=>{
        cy.visit('https://www.formula1.com/');
        cy.iframe("iframe#sp_message_iframe_1033523").find("button.message-component.message-button.no-children.focusable.sp_choice_type_11").click();
        cy.xpath("(//a[@href='/en/results/driver-standings.html'])[1]").click({force:true});
        cy.xpath("//table//tr").then((ele)=>{
            rowCount=ele.length;

        }).then(()=>{
            cy.xpath("//table//tr[1]/td").then((ele)=>{
                colCount=ele.length;
    
            })

        }).then(()=>{
            for(let i=1;i<=rowCount-1;i++)
            {
               for(let j=1;j<=colCount;j++)
               {
                 cy.xpath("//table//tr["+i+"]//td["+j+"]").then((ele)=>{
                    cy.log(ele.text());
                 })
               }
            }
        })

        
    })
})