///// <reference types="cypress" />

import Login from '../../support/pages/login.js';
const elBaseUrl = require ('../../support/elements/urls_acessos.js');
const elRelatorios = require ('../../support/elements/relatorios.js');


describe('Acesso a relatorios', () => {

    before(() => {
        Login.loginGestor();
    })

    //it('Acesso ao relatorio novo', () => {
        //cy.visit (elBaseUrl.ELEMENTS_BASE_URL.baseUrlRelatorioCompleto);
        //cy.wait(500000);
        //cy.get (elRelatorios.ELEMENTS_RELATORIOS.botaoCanalRelatorioCompleto).click();
    })

    it.only('Acesso ao relatorio analitico', () => {
        cy.visit (elBaseUrl.ELEMENTS_BASE_URL.baseUrlRelatorioAnalitico);
        cy.get (elRelatorios.ELEMENTS_RELATORIOS.botaoGerarRelatorioAnalitico).click();
    })

    it('Acesso ao relatorio de efetividade', () => {
        cy.visit (elBaseUrl.ELEMENTS_BASE_URL.baseUrlRelatorioEfetividade);
        cy.get (elRelatorios.ELEMENTS_RELATORIOS.botaoVisualizarEfetividade).click();
        cy.get (elRelatorios.ELEMENTS_RELATORIOS.botaoBaixarRelatorioEfetividade).click();
    })

    it('Acesso ao relatorio de produtividade', () => {
        cy.visit (elBaseUrl.ELEMENTS_BASE_URL.baseUrlRelatorioProdutividade);
        cy.get (elRelatorios.ELEMENTS_RELATORIOS.cxdeTipoRelatorioProd).select('value="VO"');
        cy.get (elRelatorios.ELEMENTS_RELATORIOS.botaoExtrairRelatorioProdutividade).click();
    })

    it('Acesso ao relatorio de gatilhos', () => {
        cy.visit (elBaseUrl.ELEMENTS_BASE_URL.baseUrlRelatorioGatilho);
        cy.get (elRelatorios.ELEMENTS_RELATORIOS.cxCanalRelatorioGatilho).select('WhatsApp');
        cy.get (elRelatorios.ELEMENTS_RELATORIOS.botaoFiltrarRelatorioGatilho).click();
    })

    it('Acesso ao relatorio de enquetes', () => {
        cy.visit (elBaseUrl.ELEMENTS_BASE_URL.baseUrlRelatorioEnquete);
        cy.get (elRelatorios.ELEMENTS_RELATORIOS.cxSelecionarEnquete).select('TesteEnquete');
        cy.get (elRelatorios.ELEMENTS_RELATORIOS.botaoVisualizarRelatorioEnquetes).click();
    })

    it('Acesso ao relatorio de controle de pausa', () => {
        cy.visit (elBaseUrl.ELEMENTS_BASE_URL.baseUrlRelatorioPausa);
        cy.get (elRelatorios.ELEMENTS_RELATORIOS.botaoGerarRelatorioPausa);
    })

    it('Acesso ao relatorio de controle de sessão', () => {
        cy.visit (elBaseUrl.ELEMENTS_BASE_URL.baseUrlRelatorioSessao);
        cy.wait(12000);
        cy.get (elRelatorios.ELEMENTS_RELATORIOS.botaoGerarRelatorioSessao);
    })

    it('Acesso ao relatorio de controle de ativos', () => {
        cy.visit (elBaseUrl.ELEMENTS_BASE_URL.baseUrlRelatorioAtivo);
        cy.get (elRelatorios.ELEMENTS_RELATORIOS.cxCanalRelatorioAtivo).select('Whats QA');
        cy.get (elRelatorios.ELEMENTS_RELATORIOS.botaoRelatorioCompletoRelatorioAtivo);
    })

    it('Acesso ao relatorio de controle de optin', () => {
        cy.visit (elBaseUrl.ELEMENTS_BASE_URL.baseUrlRelatorioOptin);
        cy.get (elRelatorios.ELEMENTS_RELATORIOS.botaoGerarRelatorioOptin);
    })
