/// <reference types="cypress" />

require("cypress-file-upload");
import Login from '../../support/pages/login.js'
const elAtivoHome = require('../../support/elements/ativo_home.js')


describe('Envio de Ativo como operador - Pela home', () => {

    before(() => {
        Login.loginOperador();
    })

    it('Enviar um ativo sem responsavel para Whatsapp Web', () => {
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoEnvioAtivo).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoAtivoWhats).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.canalEnvioWhats).select('string:waweb_30');
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneWhats).type(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneTextowhats);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.campoMensagemWhats).type(elAtivoHome.ELEMENTS_ATIVO_HOME.textoMensagem);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.criarAtivo).click();
        //cy.wait(1000);
        //cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.spanMensagemSucesso).should('contains', elAtivoHome.ELEMENTS_ATIVO_HOME.mensagemSucesso);
    })

    it('Enviar um ativo sem responsavel para Whatsapp Web com anexo', () => {
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoEnvioAtivo).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoAtivoWhats).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.canalEnvioWhats).select('string:waweb_30');
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneWhats).type(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneTextowhats);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.campoMensagemWhats).type(elAtivoHome.ELEMENTS_ATIVO_HOME.textoMensagem);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.fileInputElement)
            .attachFile({ filePath: elAtivoHome.ELEMENTS_ATIVO_HOME.arquivos });
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.criarAtivo).click();
    })

    it('Enviar um ativo com responsavel para Whatsapp Web', () => {
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoEnvioAtivo).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoAtivoWhats).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.canalEnvioWhats).select('string:waweb_30');
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.responsavel).click({ force: true });
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneWhats).type(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneTextowhats);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.campoMensagemWhats).type(elAtivoHome.ELEMENTS_ATIVO_HOME.textoMensagem);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.criarAtivo).click();
    })

    it('Enviar um ativo com responsavel para Whatsapp Web com anexo', () => {
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoEnvioAtivo).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoAtivoWhats).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.canalEnvioWhats).select('string:waweb_30');
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.responsavel).click({ force: true });
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneWhats).type(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneTextowhats);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.campoMensagemWhats).type(elAtivoHome.ELEMENTS_ATIVO_HOME.textoMensagem);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.fileInputElement)
            .attachFile({ filePath: elAtivoHome.ELEMENTS_ATIVO_HOME.arquivos });
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.criarAtivo).click();
    })

    it('Enviar um ativo sem responsavel pelo Enterprise', () => {
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoEnvioAtivo).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoAtivoWhats).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.canalEnvioWhats).select('string:waent_6');
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneWhats).type(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneTextowhats);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.campoHsm).select('number:4');
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.criarAtivo).click();
    })

    it('Enviar um ativo com responsavel pelo Enterprise', () => {
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoEnvioAtivo).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoAtivoWhats).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.canalEnvioWhats).select('string:waent_6');
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.responsavel).click({ force: true });
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneWhats).type(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneTextowhats);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.campoHsm).select('number:4');
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.criarAtivo).click();
    })
});