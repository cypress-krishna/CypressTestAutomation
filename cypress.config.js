const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
    allureWriter(on, config);
    return config;
};

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',  
  e2e: {
  "baseUrl": "https://itera-qa.azurewebsites.net",
  "pageLoadTimeout": 30000,
  "defaultCommandTimeout":10000,
  "screenshotOnRunFailure":true,
  "trashAssetsBeforeRuns":true,
  "video":false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      allureWriter(on, config);
      return config;
      // implement node event listeners here
    },
  },
});
