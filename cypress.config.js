const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    waitForAnimations: false,
    animationDistanceThreshold: 50,
    defaultCommandTimeout: 80000,
    chromeWebSecurity: false,
    experimentalStudio: true,
    scrollBehavior: false,
    failOnNonZeroExit: false,
    testIsolation: false,
  },
});
