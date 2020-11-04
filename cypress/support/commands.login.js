import { userPassword, btnLogin,userName, userNameLord, userPasswordLord, btnLoginLord, emailOperador, senhaOperador } from './elements/login_po';
import {baseUrlLogado} from './elements/urls_acessos'

// //Função do Login do gestor-- This add login function
Cypress.Commands.add("loginGestor", (emailGestor,senhaGestor) => { 
    
    cy.get(userName).type(emailGestor);   
      
    cy.get(userPassword).type(senhaGestor);

    cy.get(btnLogin).click();

    cy.wait(2000);

    cy.url().should('contains', baseUrlLogado)
   
}) //Login Lord

Cypress.Commands.add("loginLord", (emailLord, senhaLord) => { 
    
  cy.get(userNameLord)
    .type(emailLord);   
    
  cy.get(userPasswordLord)
    .type(senhaLord);

  cy.get(btnLoginLord)
    .click();

  cy.wait(2000);

  cy.visit(baseUrlLogado);

 // cy.url().should('contains', baseUrlLogado)
 
}) //Login Operador

Cypress.Commands.add("loginOperador", (emailLord, senhaLord) => { 
    
  cy.get(userName)
    .type(emailOperador);   
    
  cy.get(userPassword)
    .type(senhaOperador);

  cy.get(btnLogin)
    .click();

  cy.url().should('contains', baseUrlLogado)
 
}) //login operador

