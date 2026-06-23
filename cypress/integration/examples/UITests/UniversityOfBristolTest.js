describe('University of Bristol Test', () => {
    it('Validate Course Search', () => {
        cy.fixture('example').then((data) => {
            const course = data["course_name"]; // e.g. "Computer Science"
            const level = data["course_level"]; // e.g. "Postgraduate taught"

            cy.visit('https://www.bristol.ac.uk/');
            // click decline button only if it's present
            cy.get('body').then(($body) => {
                if ($body.find("button[data-tid='banner-decline']").length) {
                    cy.get("button[data-tid='banner-decline']").click();
                }
            });
            cy.title().should('include', 'University of Bristol');
            cy.get('#study-level').select(level);
            cy.get('input#q').type(`${course}{enter}`);
            cy.get('div.programmes__meta>p').should('contain', course);
        });
    });
});