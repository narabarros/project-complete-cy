// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


//import 'cypress-file-upload';


import { userPassword, btnLogin, baseUrlLogado,userName, userNameLord, userPasswordLord, btnLoginLord, emailOperador, senhaOperador } from './elements/login_po';

// //Função do Login do gestor-- This add login function
Cypress.Commands.add("loginGestor", (emailGestor,senhaGestor) => { 
    
    cy.get(userName)
      .type(emailGestor);   
      
    cy.get(userPassword)
      .type(senhaGestor);

    cy.get(btnLogin)
      .click();

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

  cy.wait(4000);

  cy.url().should('contains', baseUrlLogado)
 
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

