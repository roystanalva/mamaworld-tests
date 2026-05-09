const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/playwright',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: [
    ['list'],
    ['json', { outputFile: 'playwright-report/results.json' }]
  ],
  use: {
    baseURL: 'https://mamaworld.in',
    trace: 'off',
    screenshot: 'off',
    video: 'off',
    actionTimeout: 5000,
    navigationTimeout: 15000,
    headless: true,
    channel: 'chrome',
  },
  timeout: 30000,
  expect: {
    timeout: 3000
  }
});