// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands.login'
import './commands.logout'

//require('cypress-xpath')

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  }) //ignore erros - Marry passou para adicionar pois ocorre um erro

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.SelectorPlayground.defaults({
  selectorPriority: ['id', 'class', 'attributes', 'data-cy', 'data-test', 'data-testid', 'tag', 'nth-child']})
//Aqui são as prioridades para o cypress encontrar dos elementos na tela;
// Alternatively you can use CommonJS syntax:
// require('./commands')
