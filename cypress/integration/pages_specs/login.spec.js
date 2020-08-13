/// <reference types="cypress" />

import { baseUrl, emailGestor, senhaGestor, baseUrlLogado, baseUrlLogout, emailOperador, senhaOperador } from '../../support/elements/login_po.js';
import { iconePerfil, logout } from '../../support/elements/menu_profile_po.js';

describe('Acesso ao Mktzap', () => {

    beforeEach(() => {
        cy.visit(baseUrl);
    })

    it ('Login e Logout como Gestor', () => {
        cy.loginGestor(emailGestor, senhaGestor);
        cy.url().should('eq',baseUrlLogado);
        cy.get(iconePerfil).click();
        cy.get(logout).click();
        cy.url().should('eq', baseUrlLogout);       
    })

    it ('Login e Logout como Operador', () => {
        cy.loginOperador(emailOperador, senhaOperador);
        cy.url().should('eq',baseUrlLogado);
        cy.get(iconePerfil).click();
        cy.get(logout).click();
        cy.url().should('eq', baseUrlLogout);       
    })

});