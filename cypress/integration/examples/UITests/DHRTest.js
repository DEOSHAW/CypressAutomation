describe('Test Suite',()=>{
    it('Navigate to Time table from Quick Links',()=>
    {
        cy.visit('https://dhr.indianrailways.gov.in/');
        cy.xpath("//a[text()='About Us ']").click();
        cy.get('select.multipleselect_size').select('-Time Table');
        cy.get('table#table19>tbody>tr>td').should('contain.text','Time Table').then((ele)=>{
            cy.log(ele.text());
        })

    })
})