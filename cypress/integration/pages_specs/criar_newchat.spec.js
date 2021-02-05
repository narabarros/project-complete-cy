// <reference types="cypress" />

import Login from '../../support/pages/login.js';
const elBaseUrl = require ('../../support/elements/urls_acessos.js');
const elNewchat = require ('../../support/elements/newchat.js');

describe('Criacao de Newchat', () => {

})
    beforeEach(() => {
        Login.loginGestor();
})

    it('Criacao de Newchat', () => {

        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlNewchat);
        cy.get(elNewchat.ELEMENTS_NEWCHAT.btncriarNewchat).click();
        cy.get(elNewchat.ELEMENTS_NEWCHAT.cxNomeCanal).type('testedanarita23');
        cy.get(elNewchat.ELEMENTS_NEWCHAT.cxTitulo).type('testando');
        cy.get(elNewchat.ELEMENTS_NEWCHAT.cxDesc).type('testII');
        cy.get(elNewchat.ELEMENTS_NEWCHAT.cxSetor).select('1');
        cy.get(elNewchat.ELEMENTS_NEWCHAT.btnProximo).click();
        //cy.get(elNewchat.ELEMENTS_NEWCHAT.txtRodape).type('testando');
        //cy.get(elNewchat.ELEMENTS_NEWCHAT.urlRodape).type('teste.com.br');
        cy.get(elNewchat.ELEMENTS_NEWCHAT.cxPosicao).select('Direita');
        cy.get(elNewchat.ELEMENTS_NEWCHAT.btnProx2).click();
        cy.get(elNewchat.ELEMENTS_NEWCHAT.btnProx3).click();

    })