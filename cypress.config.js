const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/src/*.cy.{ts,js}",
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
