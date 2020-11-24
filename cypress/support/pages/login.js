const elBase = require('../elements/urls_acessos.js')
const elLogin = require('../elements/login.js');

class Login{
  loginGestor(){
    cy.visit(elBase.ELEMENTSBASEURL.baseUrl)
    cy.get(elLogin.ELEMENTSLOGIN.userName).type(elLogin.ELEMENTSLOGIN.emailGestor);   
    cy.get(elLogin.ELEMENTSLOGIN.userPassword).type(elLogin.ELEMENTSLOGIN.senhaGestor);
    cy.get(elLogin.ELEMENTSLOGIN.btnLogin).click();
    cy.wait(2000);
    cy.url().should('contains', elBase.ELEMENTSBASEURL.baseUrlLogado);
  }

  loginLord(){ 
    cy.visit(elBase.ELEMENTSBASEURL.baseUrlLord); 
    cy.get(elLogin.ELEMENTSLOGIN.userNameLord).type(elLogin.ELEMENTSLOGIN.emailLord);     
    cy.get(elLogin.ELEMENTSLOGIN.userPasswordLord).type(elLogin.ELEMENTSLOGIN.senhaLord);
    cy.get(elLogin.ELEMENTSLOGIN.btnLoginLord).click();
    cy.wait(2000);
    cy.url().should('contains', elBase.ELEMENTSBASEURL.baseUrlLogado)
  }

  loginOperador(){
    cy.visit(elBase.ELEMENTSBASEURL.baseUrl);
    cy.get(elLogin.ELEMENTSLOGIN.userName).type(elLogin.ELEMENTSLOGIN.emailOperador);   
    cy.get(elLogin.ELEMENTSLOGIN.userPassword).type(elLogin.ELEMENTSLOGIN.senhaOperador);
    cy.get(elLogin.ELEMENTSLOGIN.btnLogin).click();
    cy.url().should('contains', elBase.ELEMENTSBASEURL.baseUrlLogado)
  }
}

export default new Login();

