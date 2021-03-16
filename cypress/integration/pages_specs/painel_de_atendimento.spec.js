// <reference types="cypress" />

import Login from '../../support/pages/login.js';
const elBaseUrl = require ('../../support/elements/urls_acessos.js');
const elpainelatendimento = require ('../../support/elements/painelatendimento.js');

describe('Validacao geral no painel de atendimento', () => {

})
    beforeEach(() => {
        Login.loginGestor();
})

    it('Consulta de setores', () => {
        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlPainel);
        cy.get(elpainelatendimento.ELEMENTS_PAINELATENDIMENTO.btnTodos).click({multiple: true});
    })

    it('Filtro por usuários', () => {
        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlPainel);
        cy.get(elpainelatendimento.ELEMENTS_PAINELATENDIMENTO.btnFiltro).click({multiple:true});
    })

    it('Troca de status de atendimento', () => {
        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlPainel);
        cy.get(elpainelatendimento.ELEMENTS_PAINELATENDIMENTO.btnClassificacao).click();
        cy.get(elpainelatendimento.ELEMENTS_PAINELATENDIMENTO.btnClassificacao2).click();
    })

    it.only('Troca de status de classificacao', () => {
        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlAtendimento);
        cy.get(elpainelatendimento.ELEMENTS_PAINELATENDIMENTO.btnAtendimento).click();
        cy.get(elpainelatendimento.ELEMENTS_PAINELATENDIMENTO.btnStatusdeAtendimento).click();
        //ta com erro

    })


