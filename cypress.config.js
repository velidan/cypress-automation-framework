const { defineConfig } = require("cypress");
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`);

  if(!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found.");
    return {};
  }

  return fs.readJson(pathToConfigFile);
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || ''

      return getConfigurationByFile(file)
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    // excludeSpecPattern: "cypress/e2e/other/*.js",
    // defaultCommandTimeout: 10000,
    // pageLoadTimeout: 120000,
    // baseUrl: "",
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    // remove assets in screenshots folder before run
    trashAssetsBeforeRuns: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    // video: false,
    // videoCompression: 5,


    // dimensions for all the tests viewport
    // viewportHeight: 750,
    // viewportWidth: 550,

    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    },

    retries: {
      // when we use cypress in run
      runMode: 0,
      // when te opened the cypress app in the console (adds attempts to run a failed test)
      openMode: 1
    },
    // env vars
    env: {
      first_name: 'Sarah',
      webdriveruni_homepage: 'https://www.webdriveruniversity.com',
      
    }
  },
  
});
