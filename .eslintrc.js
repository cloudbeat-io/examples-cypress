module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:cypress/recommended',
    'plugin:mocha/recommended',
  ],
  plugins: [
    'cypress',
    'mocha',
    '@cypress/dev',
  ],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    '@cypress/dev/skip-comment': 'error',
    '@cypress/dev/arrow-body-multiline-braces': 'error',
    // this repo's whole purpose is demonstrating the Cypress API, including cy.wait(ms) itself
    // (see cypress/e2e/2-advanced-examples/waiting.cy.js) - the rule is directly at odds with that
    'cypress/no-unnecessary-waiting': 'off',
  },
}
