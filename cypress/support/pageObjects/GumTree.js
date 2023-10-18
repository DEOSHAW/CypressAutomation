class GumTree
{

  getSearchBox()
  {
    return cy.get("input[aria-label='Type search query']");
  }
  getSearchResultLabel()
  {
    return cy.xpath('//h1');
  }

}

export default GumTree;
