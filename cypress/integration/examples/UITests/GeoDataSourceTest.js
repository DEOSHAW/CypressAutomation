describe('Test Suite', () => {
    it('Select Region', () => {
        let testData;
        cy.visit('https://www.geodatasource.com/software/country-region-dropdown-menu-demo');
        cy.fixture('example').then((data) => {
            testData = data;
            cy.log("Country is: " + testData.country);
            cy.log("Region is: " + testData.region);
        })

        cy.then(() => {
            cy.xpath("//select[@country-data-region-id='gds-cr-one']").select(testData.country);
            cy.get('#gds-cr-one').select(testData.region);
        })


    })
})