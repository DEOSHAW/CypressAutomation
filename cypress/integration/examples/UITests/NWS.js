describe('NWS Test Suite', () => {
    it('Navigate to Certified Weather Data', () => {
        cy.visit('https://www.weather.gov/documentation/services-web-api');
        cy.xpath("//a[text()='Certified Weather Data']").click({ force: true });
        cy.origin("https://www.climate.gov/", () => {
            cy.url().should('include','past-weather-zip-code-data-table');
            cy.title().should('contain','Past Weather by Zip Code');
            cy.get('h1.title.page__title.heading-1.mb-0').then((ele) => {
                expect(ele.text()).to.equal('Past Weather by Zip Code - Data Table');
                cy.wrap(ele).should('contain.text', 'Past Weather by Zip Code');
            })
        })
    })
})