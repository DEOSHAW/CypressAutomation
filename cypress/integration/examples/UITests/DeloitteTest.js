describe('Test Suite',()=>
{
    it('Get List of Services',()=>{
        cy.visit('https://www2.deloitte.com/us/en.html');
        cy.get('#onetrust-accept-btn-handler').click();
        cy.xpath("//a[@data-sub='Services']").click();
        cy.xpath("(//ul[contains(@class,'cmp-pr-nav__menu__links-section')])[1]//li[contains(@class,'cmp-pr-nav__menu__item aem-GridColumn')]/h4/a")
        .then((ele)=>{
           cy.wrap(ele.eq(0)).should('have.text','Tax');
           cy.wrap(ele.eq(1)).should('have.text','Consulting');
           cy.wrap(ele.eq(2)).should('have.text','Audit & Assurance');
           cy.wrap(ele.eq(3)).should('have.text','Deloitte Private');
           cy.wrap(ele.eq(4)).should('have.text','M&A and Restructuring');
           cy.wrap(ele.eq(5)).should('have.text','Risk & Financial Advisory');
           cy.wrap(ele.eq(6)).should('have.text','AI & Analytics');
           cy.wrap(ele.eq(7)).should('have.text','Cloud');
           cy.wrap(ele.eq(8)).should('have.text','Diversity, Equity & Inclusion');
           var firstService=ele.eq(0).text();
           cy.log(firstService);
           //Navigate to metaverse page
           cy.xpath("//a[contains(@href,'wn_enterprise-metaverse-consulting')]").invoke('removeAttr','target').click();
           cy.title().should('eq','Enterprise Metaverse Consulting - Unlimited Reality | Deloitte US');

        })
    })

})