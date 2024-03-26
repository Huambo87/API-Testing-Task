const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://hr-challenge.dev.tapyou.com/api/test/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
