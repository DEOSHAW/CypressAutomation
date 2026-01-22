const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout:5000,
  viewportWidth:1920,
  viewportHeight:1080,
  includeShadowDom: true,
  env:
  {
    url: "https://rahulshettyacademy.com"
  },
  retries: {
    runMode:1,
    openMode:0
  },
  //video: true,
  //videoCompression: 32,
 // videoUploadOnPasses: true,
  projectId: "1sr8sx",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/examples/*/*.js'
  },
});
