import {baseUrl, baseUrlLogado, baseUrlLord} from '../elements/urls_acessos'
const el = require('../elements/login.js');

class Login{
   loginGestor(){
    cy.visit(baseUrl)
    cy.get(el.userName).type(el.emailGestor);   
    cy.get(el.userPassword).type(el.senhaGestor);
    cy.get(el.btnLogin).click();
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
    cy.get(el.userName).type(el.emailOperador);   
    cy.get(el.userPassword).type(el.senhaOperador);
    cy.get(el.btnLogin).click();
    cy.url().should('contains', baseUrlLogado)
  }

}

export default new Login();

