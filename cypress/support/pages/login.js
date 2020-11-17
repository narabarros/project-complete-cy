import { userPassword, btnLogin,userName, userNameLord, userPasswordLord, btnLoginLord, emailOperador, senhaOperador } from '../elements/login.js';
import {baseUrl, baseUrlLogado, baseUrlLord} from '../elements/urls_acessos'

class Login{
   loginGestor(){
    cy.visit(baseUrl)
    cy.get(userName).type(emailGestor);   
    cy.get(userPassword).type(senhaGestor);
    cy.get(btnLogin).click();
    cy.wait(2000);
    cy.url().should('contains', baseUrlLogado);
   }

   loginLord(){ 
    cy.visit(baseUrlLord); 
    cy.get(userNameLord).type(emailLord);     
    cy.get(userPasswordLord).type(senhaLord);
    cy.get(btnLoginLord).click();
    cy.wait(2000);
    cy.visit(baseUrlLogado);
    cy.url().should('contains', baseUrlLogado)
   }

   loginOperador(){
    cy.visit(baseUrl);
    cy.get(userName).type(emailOperador);   
    cy.get(userPassword).type(senhaOperador);
    cy.get(btnLogin).click();
    cy.url().should('contains', baseUrlLogado)
  }

}
// Login do gestor
//Cypress.Commands.add("loginGestor", (emailGestor,senhaGestor) => { 
   
//})

//Login Lord
// Cypress.Commands.add("loginLord", (emailLord, senhaLord) => { 
  
// }) 

// //Login Operador
// Cypress.Commands.add("loginOperador", (emailLord, senhaLord) => { 
    
 
 
// }) 

export default new Login();

