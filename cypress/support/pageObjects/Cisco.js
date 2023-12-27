class Cisco{

    getSiteMapLink()
    {
        return cy.xpath("//a[contains(text(),'Sitemap')]");
    }

    getPageHeading()
    {
        return cy.get('#fw-pagetitle');
    }

}
export default Cisco;