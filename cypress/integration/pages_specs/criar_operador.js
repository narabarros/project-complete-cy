/// <reference types="cypress" />

import Login from '../../support/pages/login.js';
const elBaseUrl = require ('../../support/elements/urls_acessos.js');
const elcriaroperador = require ('../../support/elements/criaroperador.js');


describe('Criar Operador', () => {

    before(() => {
        Login.loginGestor();
    })

    it('Criar operador', () => {
        cy.visit (elBaseUrl.ELEMENTS_BASE_URL.baseUrlConfiguracoes);
        cy.get (elcriaroperador.ELEMENTS_CRIAROPERADOR.btnConfig).click();
        cy.get (elcriaroperador.ELEMENTS_CRIAROPERADOR.btnCriarUsuario).click();
        cy.get (elcriaroperador.ELEMENTS_CRIAROPERADOR.txtNome).type('narita');
        cy.get (elcriaroperador.ELEMENTS_CRIAROPERADOR.txtEmail).type('naritatest@email.com');
        cy.get (elcriaroperador.ELEMENTS_CRIAROPERADOR.txtNomeExibicao).type('Narita');
        cy.get (elcriaroperador.ELEMENTS_CRIAROPERADOR.txtSenha).type('123456A');
        cy.get (elcriaroperador.ELEMENTS_CRIAROPERADOR.btnFeminino).click();
        cy.get (elcriaroperador.ELEMENTS_CRIAROPERADOR.btnFuncao).select('1');
        cy.get (elcriaroperador.ELEMENTS_CRIAROPERADOR.btnSalvar).click();
        cy.get (elcriaroperador.ELEMENTS_CRIAROPERADOR.btnConfirmar).click({ multiple: true, force: true });
    })
})
