const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',

    viewportWidth: 1440,
    viewportHeight: 900,

    defaultCommandTimeout: 10000,
    
    retries: {
      runMode: 1,
      openMode: 0,
    },

    video: true,
    screenshotOnFailure: true,

    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
  },
})