/// <reference types="cypress" />

import Login from '../../support/pages/login.js';
const elBaseUrl = require ('../../support/elements/urls_acessos.js');
const elPainelAtendimento = require ('../../support/elements/painelatendimento.js');

describe('Validacao geral no painel de atendimento', () => {

    beforeEach(() => {
        Login.loginGestor();
    })

    it('Consulta de setores', () => {
        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlPainel);
        cy.get(elPainelAtendimento.ELEMENTS_PAINELATENDIMENTO.btnTodos).click({multiple: true, force: true});
    })

    it('Filtro por usuários', () => {
        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlPainel);
        cy.get(elPainelAtendimento.ELEMENTS_PAINELATENDIMENTO.btnFiltro).click({multiple:true});
    })

    it('Troca de status de atendimento', () => {
        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlPainel);
        cy.get(elPainelAtendimento.ELEMENTS_PAINELATENDIMENTO.btnClassificacao).click();
        cy.get(elPainelAtendimento.ELEMENTS_PAINELATENDIMENTO.btnClassificacao2).click();
    })

    it('Troca de status de classificacao', () => {
        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlAtendimento);
        cy.get(elPainelAtendimento.ELEMENTS_PAINELATENDIMENTO.btnAtendimento).click();
        cy.get(elPainelAtendimento.ELEMENTS_PAINELATENDIMENTO.btnStatusdeAtendimento).click({force: true});
    })

});