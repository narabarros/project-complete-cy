import {baseUrl, baseUrlLogado, baseUrlLord} from '../elements/urls_acessos'
const el = require('../elements/login.js');

class Login{
  loginGestor(){
    cy.visit(baseUrl)
    cy.get(el.ELEMENTSLOGIN.userName).type(el.ELEMENTSLOGIN.emailGestor);   
    cy.get(el.ELEMENTSLOGIN.userPassword).type(el.ELEMENTSLOGIN.senhaGestor);
    cy.get(el.ELEMENTSLOGIN.btnLogin).click();
    cy.wait(2000);
    cy.url().should('contains', baseUrlLogado);
  }

  loginLord(){ 
    cy.visit(baseUrlLord); 
    cy.get(el.ELEMENTSLOGIN.userNameLord).type(el.ELEMENTSLOGIN.emailLord);     
    cy.get(el.ELEMENTSLOGIN.userPasswordLord).type(el.ELEMENTSLOGIN.senhaLord);
    cy.get(el.ELEMENTSLOGIN.btnLoginLord).click();
    cy.wait(2000);
    cy.visit(baseUrlLogado);
    cy.url().should('contains', baseUrlLogado)
  }

  loginOperador(){
    cy.visit(baseUrl);
    cy.get(el.ELEMENTSLOGIN.userName).type(el.ELEMENTSLOGIN.emailOperador);   
    cy.get(el.ELEMENTSLOGIN.userPassword).type(el.ELEMENTSLOGIN.senhaOperador);
    cy.get(el.ELEMENTSLOGIN.btnLogin).click();
    cy.url().should('contains', baseUrlLogado)
  }
}

export default new Login();

