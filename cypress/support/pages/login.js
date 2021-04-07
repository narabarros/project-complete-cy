const elBase = require('../elements/urls_acessos.js')
const elLogin = require('../elements/login.js');

class Login{
  loginGestor(){
    cy.visit(elBase.ELEMENTS_BASE_URL.baseUrl)
    cy.get(elLogin.ELEMENTS_LOGIN.userName).type(elLogin.ELEMENTS_LOGIN.emailGestor);   
    cy.get(elLogin.ELEMENTS_LOGIN.userPassword).type(elLogin.ELEMENTS_LOGIN.senhaGestor);
    cy.get(elLogin.ELEMENTS_LOGIN.btnLogin).click();
    cy.wait(2000);
    cy.url().should('contains', elBase.ELEMENTS_BASE_URL.baseUrlLogado);
  }

  loginLord(){ 
    cy.visit(elBase.ELEMENTS_BASE_URL.baseUrlLord); 
    cy.get(elLogin.ELEMENTS_LOGIN.userNameLord).type(elLogin.ELEMENTS_LOGIN.emailLord);     
    cy.get(elLogin.ELEMENTS_LOGIN.userPasswordLord).type(elLogin.ELEMENTS_LOGIN.senhaLord);
    cy.get(elLogin.ELEMENTS_LOGIN.btnLoginLord).click();
    cy.url().should('contains', 'https://qa-poli.infranw.com.br/__/');
    cy.visit(elBase.ELEMENTS_BASE_URL.baseUrlLogado);
    cy.url().should('contains', elBase.ELEMENTS_BASE_URL.baseUrlLogado);
  }

  loginOperador(){
    cy.visit(elBase.ELEMENTS_BASE_URL.baseUrl);
    cy.get(elLogin.ELEMENTS_LOGIN.userName).type(elLogin.ELEMENTS_LOGIN.emailOperador);   
    cy.get(elLogin.ELEMENTS_LOGIN.userPassword).type(elLogin.ELEMENTS_LOGIN.senhaOperador);
    cy.get(elLogin.ELEMENTS_LOGIN.btnLogin).click();
    cy.url().should('contains', elBase.ELEMENTS_BASE_URL.baseUrlLogado)
  }
}

export default new Login();

