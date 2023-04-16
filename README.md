# CypressAutomation
This repository is for Cypress Automation Project

Setup:
npm install cypress --save-dev
npm install -D cypress-iframe
npm install mochawesome --save-dev

To run scripts:

npm run <Script Name>
    e.g: npm run dashboardTest

To run specific spec file:
npx cypress run --spec <Spec file name>
npx cypress run --spec .\cypress\integration\examples\APITests\GoRestAPITests.js