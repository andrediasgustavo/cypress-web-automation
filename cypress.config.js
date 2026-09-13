const { defineConfig } = require("cypress");
const mochawesomeReporter = require("cypress-mochawesome-reporter/plugin");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://www.automationpratice.com.br",
    defaultCommandTimeout: 5000,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
      charts: true,
      embeddedScreenshots: true,
    },
    setupNodeEvents(on, config) {
      mochawesomeReporter(on);
      return config;
    },
  },
});
