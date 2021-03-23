/// <reference types="cypress" />

import Login from '../../support/pages/login.js';
const elBaseUrl = require ('../../support/elements/urls_acessos.js');
const elAcoesEmMassa = require ('../../support/elements/acoesEmMassa.js');

describe('Acoes em Massa', () => {

    beforeEach(() => {
        Login.loginGestor();
        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlAcoesEmMassa);
        cy.url().should('contains', elBaseUrl.ELEMENTS_BASE_URL.baseUrlAcoesEmMassa);
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.btnIniciar).click();
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.btnFiltrar).click();
    })

    it('Finalização de Atendimento em Massa (Selecionar Todos)', () => {
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.selecionarAcao).select(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.acaoFinalizacaoAtendimentos);
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.selecionarStatusFinalizacao).select(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.statusFinalizacao);
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.btnSelecionarTodos).click();
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.btnIniciarAcaoEmMassa).click();
    })

    it('Finalização de Atendimento em Massa (Selecionar Um por Um)', () => {
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.selecionarAcao).select(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.acaoFinalizacaoAtendimentos);
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.selecionarStatusFinalizacao).select(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.statusFinalizacao);
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.btnSelecionarUmPorUm).click({multiple: true});
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.btnIniciarAcaoEmMassa).click();
    })

    it('Transferencia de Setor em Massa (Selecionar Todos)', () => {
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.selecionarAcao).select(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.acaoTransferenciaDeSetor);
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.selecionarSetor).select(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.novoSetor);
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.btnSelecionarTodos).click();
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.btnIniciarAcaoEmMassa).click();
    })

    it('Transferencia de Setor em Massa (Selecionar Um por Um)', () => {
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.selecionarAcao).select(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.acaoTransferenciaDeSetor);
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.selecionarSetor).select(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.novoSetor);
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.btnSelecionarUmPorUm).click({multiple: true});
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.btnIniciarAcaoEmMassa).click();
    })

    it('Transferencia de Responsavel em Massa (Selecionar Todos)', () => {
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.selecionarAcao).select(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.acaoTransferenciaDeResponsável);
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.selecionarResponsavel).select(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.novoResponsavel);
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.btnSelecionarTodos).click();
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.btnIniciarAcaoEmMassa).click();
    })

    it('Transferencia de Responsavel em Massa (Selecionar Um por Um)', () => {
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.selecionarAcao).select(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.acaoTransferenciaDeResponsável);
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.selecionarResponsavel).select(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.novoResponsavel);
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.btnSelecionarUmPorUm).click({multiple: true});
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.btnIniciarAcaoEmMassa).click();
    })

    it('Alterar Status de Classificação em Massa (Selecionar Todos)', () => {
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.selecionarAcao).select(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.acaoClassificacaoDeAtendimentos);
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.selecionarClassificacao).select(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.novaClassificacao);
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.btnSelecionarTodos).click();
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.btnIniciarAcaoEmMassa).click();
    })

    it('Alterar Status de Classificação em Massa (Selecionar Um por Um)', () => {
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.selecionarAcao).select(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.acaoClassificacaoDeAtendimentos);
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.selecionarClassificacao).select(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.novaClassificacao);
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.btnSelecionarUmPorUm).click({multiple: true});
        cy.get(elAcoesEmMassa.ELEMENTS_ACOESEMMASSA.btnIniciarAcaoEmMassa).click();
    })

});
