/// <reference types="cypress" />

import Login from '../../support/pages/login.js';
const elBase = require('../../support/elements/urls_acessos.js');
const elLogin = require('../../support/elements/login.js')

describe('Acesso ao Mktzap', () => {

    it('Login e Logout como Gestor', () => {
        Login.loginGestor();
        cy.get(elLogin.ELEMENTS_LOGIN.iconePerfil).click();
        cy.get(elLogin.ELEMENTS_LOGIN.bntLogout).click();
        cy.url().should('eq', elBase.ELEMENTS_BASE_URL.baseUrlLogout);       
    })

    it('Login e Logout como Operador', () => {
        Login.loginOperador(); 
        cy.get(elLogin.ELEMENTS_LOGIN.iconePerfil).click();
        cy.get(elLogin.ELEMENTS_LOGIN.bntLogout).click();
        cy.url().should('eq', elBase.ELEMENTS_BASE_URL.baseUrlLogout);       
    })

});