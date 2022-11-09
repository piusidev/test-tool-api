import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: './src/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: './src/cypress/support/e2e.{js,jsx,ts,tsx}'
  },

  video: false,

  numTestsKeptInMemory: 2,
  screenshotOnRunFailure: true,

  videosFolder: './src/cypress/videos',
  fixturesFolder: './src/cypress/fixtures',
  screenshotsFolder: './src/cypress/screenshots'
});
