/// <reference types="Cypress" />
import HomePage from '/CypressAutomation/cypress/support/pageObjects/HomePage'
import ProductPage from '/CypressAutomation/cypress/support/pageObjects/ProductPage'
describe('My Second Test Suite', function () {

  let data;

    before('Get Test Data',()=>{
        cy.fixture('example').then((fData)=>{
            data=fData;

        })
    })



    it('My FirstTest case', function () {
    const homePage = new HomePage()
    const productPage = new ProductPage()
    cy.visit(Cypress.env('url')+"/angularpractice/")
    homePage.getEditBox().type(data.name)
    homePage.getGender().select(data.gender)
    homePage.getTwoWayDataBinding().should('have.value', data.name)
    homePage.getEditBox().should('have.attr', 'minlength', '2')
    homePage.getEntrepreneaur().should('be.disabled')
    homePage.getShopTab().click()
    Cypress.config('defaultCommandTimeout',8000)





    data.productName.forEach(function (element) {

      cy.selectProduct(element)
    });
    productPage.checkOutButton().click()
    var sum = 0

    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {


      const amount = $el.text()
      var res = amount.split(" ")
      res = res[1].trim()
      sum = Number(sum) + Number(res)

    }).then(function () {
      cy.log(sum)
    })
    cy.get('h3 strong').then(function (element) {
      const amount = element.text()
      var res = amount.split(" ")
      var total = res[1].trim()
      expect(Number(total)).to.equal(sum)

    })
    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({ force: true })
    cy.get('input[type="submit"]').click()
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-)
    cy.get('.alert').then(function (element) {
      const actualText = element.text()
      expect(actualText.includes("Success")).to.be.true
    })

 })


})































