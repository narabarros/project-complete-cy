/// <reference types="cypress" />

import Login from '../../support/pages/login.js';
const elBaseUrl = require ('../../support/elements/urls_acessos.js');
const elcriarsetor = require ('../../support/elements/criarsetor.js');

describe('Criar setor', () => {

    before(() => {
        Login.loginGestor();
    })

    it('Criar setor', () => {
        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlConfiguracoes);
        cy.get(elcriarsetor.ELEMENTS_CRIARSETOR.btnSetor).click();
        cy.get(elcriarsetor.ELEMENTS_CRIARSETOR.cxNomeSetor).type('Teste');
        cy.get(elcriarsetor.ELEMENTS_CRIARSETOR.btnSalvarSetor).click();
    })

})
