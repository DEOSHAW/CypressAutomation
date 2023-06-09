// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath');

beforeEach('Launch Browser',()=>{
    cy.log('Launching Browser');
    cy.visit(Cypress.env('url')+"/angularpractice/")
  })

  before(function () {
    // runs once before all tests in the block
    cy.log('Loading Test Data');
    cy.fixture('example').then(function (data) {
      this.data = data
    })
  })

  afterEach('Scenario Completed',()=>{

    cy.log("Scenario Completed")

  })

  after(function(){

    cy.log("All tests completed")
  
  })