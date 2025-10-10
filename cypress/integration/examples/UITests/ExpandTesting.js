import Expandtest from "../../../support/pageObjects/ExpandTest";
describe('Expand Testing Suite',()=>{
    const expandTest = new Expandtest();
    it('Validate CPU Usage',()=>{
        cy.visit("https://practice.expandtesting.com/dynamic-table");
        expandTest.getCpuUsageByBrowser('Chrome').then(function(el){
            const cpuUsage = el.text();
            cy.log("CPU Usage of Chrome is "+cpuUsage);
            });
        });
    });