class Expandtest
{

  getCpuUsageByBrowser(browserName)
  {
    return cy.xpath("//table/tbody/tr/td[text()='"+browserName+"']/following-sibling::td[1]")
  }

}

export default Expandtest;