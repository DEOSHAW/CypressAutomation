import GumTree from "../../../support/pageObjects/GumTree.js"; 

describe('Test Suite',()=>{
    const gumtreeObject=new GumTree();
    let vData;
    before('Load Test Data',function(){
        cy.fixture('example').then((data)=>{
            vData=data;
            cy.log(vData.product);
         })
    })
    it('Search Product',()=>{
       
        cy.visit('https://www.gumtree.com/');
        cy.log(vData.product);
        
        gumtreeObject.getSearchBox().type(vData.product);
        cy.wait(2000);
        gumtreeObject.getSearchBox().type('{enter}');
        //Validate Search results
        gumtreeObject.getSearchResultLabel().then((ele)=>{
            expect(ele.text()).to.contain('Books for Sale - Books');

        })
    })
})