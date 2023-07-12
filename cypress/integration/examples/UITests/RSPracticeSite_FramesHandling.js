import 'cypress-iframe';

describe('Test Suite',()=>{

    let data;

    before(function () {
        // runs once before all tests in the block
        cy.log('Loading Test Data');
        cy.fixture('example').then(function (fData) {
         data = fData;
        })
      })


    it('IFrames Test',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.frameLoaded('#courses-iframe');
        cy.iframe().find("nav[class='main-menu']").eq(0).find('a').each((el,index,list)=>{

            cy.log(el.text());

        })

        })
       
      
    })
