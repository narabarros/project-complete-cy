/// <reference types="cypress" />

import Login from '../../support/pages/login.js';
const elBaseUrl = require ('../../support/elements/urls_acessos.js');
const elEnquete = require ('../../support/elements/enquete.js');

describe('Criacao de enquete', () => {

    beforeEach(() => {
        Login.loginGestor();
    })

    it.only('Criacao de enquete', () => {
        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlNewEnquete);
        cy.get(elEnquete.ELEMENTS_ENQUETE.btnCriarEnquete).click();
        cy.get(elEnquete.ELEMENTS_ENQUETE.cxtxtNome).type('TesteNow2');
        cy.get(elEnquete.ELEMENTS_ENQUETE.cxPergunta).type('O que achou?');
        cy.get(elEnquete.ELEMENTS_ENQUETE.cxInvalida).type('Resposta invalida');
        cy.get(elEnquete.ELEMENTS_ENQUETE.cxMsg).type('Obrigada!');
        cy.get(elEnquete.ELEMENTS_ENQUETE.cxDesc).type('Bom');
        cy.get(elEnquete.ELEMENTS_ENQUETE.cxDesc2).type('Ruim', {force: true});
        cy.get(elEnquete.ELEMENTS_ENQUETE.btnSalvar).click();
    })

    it('Criacao do status de finalizacao', () => {
        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlNewStatus);
        cy.get(elEnquete.ELEMENTS_ENQUETE.btnCriarStatus).click();
        cy.get(elEnquete.ELEMENTS_ENQUETE.cxNomeStatus).type('TesteNow2');
        cy.get(elEnquete.ELEMENTS_ENQUETE.selectRadioFinalizacao).click({force: true}).should('be.checked');
        cy.get(elEnquete.ELEMENTS_ENQUETE.selectNoCamposObrigatorios).click({force: true}).should('be.checked');
        cy.get(elEnquete.ELEMENTS_ENQUETE.selectEnquete).select('TesteNow2');
        cy.get(elEnquete.ELEMENTS_ENQUETE.BtnCriarStatus).click();
    })
})
