/// <reference types="cypress" />

import Login from '../../support/pages/login.js';
const elBaseUrl = require ('../../support/elements/urls_acessos.js');
const elPerguntaserespostas = require ('../../support/elements/perguntaserespostas.js');


describe('Criacao de perguntas e respostas', () => {

    before(() => {
        Login.loginGestor();
    })

    it('Acesso e criacao de resposta padrao', () => {

        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlPerguntaseRespostas);
        cy.get(elPerguntaserespostas.ELEMENTS_PERGUNTASERESPOSTAS.btnCriar).click();
        cy.get(elPerguntaserespostas.ELEMENTS_PERGUNTASERESPOSTAS.cxTitulo).type ('teste');
        cy.get(elPerguntaserespostas.ELEMENTS_PERGUNTASERESPOSTAS.cxTexto).type ('teste');
        cy.get(elPerguntaserespostas.ELEMENTS_PERGUNTASERESPOSTAS.btnSalvar).click();

    })
})