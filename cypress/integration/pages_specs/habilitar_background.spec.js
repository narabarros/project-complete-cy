/// <reference types="cypress" />

import { ELEMENTS_BACKGROUND } from '../../support/elements/background.js';
import Login from '../../support/pages/login.js';
const elBaseUrl = require ('../../support/elements/urls_acessos.js');
const elbackground = require ('../../support/elements/background.js');


describe('Acesso a relatorios', () => {

    before(() => {
        Login.loginLord();
    })

    it('Acesso as configuracoes', () => {
        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlLogado);
        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlConfigsGerais);
        cy.get(elbackground.ELEMENTS_BACKGROUND.btnRelatorios).click();
        cy.get(elbackground.ELEMENTS_BACKGROUND.btnAtivar).click({ force: true });
        cy.get(elbackground.ELEMENTS_BACKGROUND.campoHis).click();

    })
})