
import './pages/login'
import './pages/mailing'

require('cypress-xpath')

Cypress.on('uncaught:exception', (err, runnable) => {
    
    return false
  }) 

Cypress.SelectorPlayground.defaults({
  selectorPriority: ['id', 'class', 'attributes', 'data-cy', 'data-test', 'data-testid', 'tag', 'nth-child']})

