const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout:6000,
  env:
  {
    url: "https://rahulshettyacademy.com"
  },
  retries: {
    runMode:1,
    openMode:0
  },
  projectId: "1sr8sx",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/examples/*/*.js'
  },
});
