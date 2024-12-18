describe('Test Suite',()=>{
    it('Find Programs',()=>{
        cy.visit('https://www.bits-pilani.ac.in/');
        cy.xpath("//h1[text()='Find the right programme']").scrollIntoView();
        cy.get('select#campus').select('Pilani');
        cy.get('select#level').select('Higher Degree');
        cy.get('select#course').select('M.E.(Chemical)');
        cy.get('input#btn_course_finder').click({force:true});
        cy.get('div.page-banner-left-inner>h1').then((ele)=>{
            var courseText=ele.text();
            cy.log(courseText);
            expect(courseText).to.equal('M.E.(Chemical)');
            expect(courseText).to.contain('M.E.');
        })

    })
})