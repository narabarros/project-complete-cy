const elbase = require('../elements/urls_acessos.js')
const el = require('../elements/login.js');

class Login{
  loginGestor(){
    cy.visit(elbase.ELEMENTSBASEURL.baseUrl)
    cy.get(el.ELEMENTSLOGIN.userName).type(el.ELEMENTSLOGIN.emailGestor);   
    cy.get(el.ELEMENTSLOGIN.userPassword).type(el.ELEMENTSLOGIN.senhaGestor);
    cy.get(el.ELEMENTSLOGIN.btnLogin).click();
    cy.wait(2000);
    cy.url().should('contains', elbase.ELEMENTSBASEURL.baseUrlLogado);
  }

  loginLord(){ 
    cy.visit(elbase.ELEMENTSBASEURL.baseUrlLord); 
    cy.get(el.ELEMENTSLOGIN.userNameLord).type(el.ELEMENTSLOGIN.emailLord);     
    cy.get(el.ELEMENTSLOGIN.userPasswordLord).type(el.ELEMENTSLOGIN.senhaLord);
    cy.get(el.ELEMENTSLOGIN.btnLoginLord).click();
    cy.wait(2000);
    cy.url().should('contains', elbase.ELEMENTSBASEURL.baseUrlLogado)
  }

  loginOperador(){
    cy.visit(elbase.ELEMENTSBASEURL.baseUrl);
    cy.get(el.ELEMENTSLOGIN.userName).type(el.ELEMENTSLOGIN.emailOperador);   
    cy.get(el.ELEMENTSLOGIN.userPassword).type(el.ELEMENTSLOGIN.senhaOperador);
    cy.get(el.ELEMENTSLOGIN.btnLogin).click();
    cy.url().should('contains', elbase.ELEMENTSBASEURL.baseUrlLogado)
  }
}

export default new Login();

