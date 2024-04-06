const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'db9srq',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
