/// <reference types="cypress" />

import { ELEMENTS_BACKGROUND } from '../../support/elements/background.js';
import Login from '../../support/pages/login.js';
const elBaseUrl = require ('../../support/elements/urls_acessos.js');
const elBackground = require ('../../support/elements/background.js');

describe('Acesso a relatorios', () => {

    before(() => {
        Login.loginLord();
    })

    it('Acesso as configuracoes', () => {
        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlLogado);
        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlConfigsGerais);
        cy.get(elBackground.ELEMENTS_BACKGROUND.btnRelatorios).click();
        cy.get(elBackground.ELEMENTS_BACKGROUND.btnAtivar).click();
        cy.wait(2000);
        cy.get(elBackground.ELEMENTS_BACKGROUND.btnSalvar).click();
    })

});