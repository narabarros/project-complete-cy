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
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneWhats).type(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneTextoWhats);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.campoMensagemWhats).type(elAtivoHome.ELEMENTS_ATIVO_HOME.textoMensagem);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.criarAtivo).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.spanMensagemSucesso).contains(elAtivoHome.ELEMENTS_ATIVO_HOME.mensagemSucesso);
    })

    it('Enviar um ativo sem responsavel para Whatsapp Web com anexo', () => {
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoEnvioAtivo).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoAtivoWhats).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.canalEnvioWhats).select('string:waweb_30');
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneWhats).type(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneTextoWhats);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.campoMensagemWhats).type(elAtivoHome.ELEMENTS_ATIVO_HOME.textoMensagem);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.fileInputElement)
            .attachFile({ filePath: elAtivoHome.ELEMENTS_ATIVO_HOME.arquivos });
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.criarAtivo).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.spanMensagemSucesso).contains(elAtivoHome.ELEMENTS_ATIVO_HOME.mensagemSucesso);
    })

    it('Enviar um ativo com responsavel para Whatsapp Web', () => {
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoEnvioAtivo).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoAtivoWhats).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.canalEnvioWhats).select('string:waweb_30');
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.responsavel).click({ force: true });
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneWhats).type(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneTextoWhats);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.campoMensagemWhats).type(elAtivoHome.ELEMENTS_ATIVO_HOME.textoMensagem);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.criarAtivo).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.spanMensagemSucesso).contains(elAtivoHome.ELEMENTS_ATIVO_HOME.mensagemSucesso);
    })

    it('Enviar um ativo com responsavel para Whatsapp Web com anexo', () => {
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoEnvioAtivo).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoAtivoWhats).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.canalEnvioWhats).select('string:waweb_30');
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.responsavel).click({ force: true });
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneWhats).type(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneTextoWhats);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.campoMensagemWhats).type(elAtivoHome.ELEMENTS_ATIVO_HOME.textoMensagem);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.fileInputElement)
            .attachFile({ filePath: elAtivoHome.ELEMENTS_ATIVO_HOME.arquivos });
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.criarAtivo).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.spanMensagemSucesso).contains(elAtivoHome.ELEMENTS_ATIVO_HOME.mensagemSucesso);
    })

    it('Enviar um ativo sem responsavel pelo Enterprise', () => {
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoEnvioAtivo).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoAtivoWhats).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.canalEnvioWhats).select('string:waent_6');
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneWhats).type(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneTextoWhats);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.campoHsm).select('number:4');
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.criarAtivo).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.spanMensagemSucesso).contains(elAtivoHome.ELEMENTS_ATIVO_HOME.mensagemSucesso);
    })

    it('Enviar um ativo com responsavel pelo Enterprise', () => {
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoEnvioAtivo).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoAtivoWhats).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.canalEnvioWhats).select('string:waent_6');
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.responsavel).click({ force: true });
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneWhats).type(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneTextoWhats);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.campoHsm).select('number:4');
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.criarAtivo).click();
    })

    it('Enviar um ativo pelo E-mail', () => {
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoEnvioAtivo).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoAtivoEmail).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.emailRemetente).select('7');
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.nomeDestinatario).type(elAtivoHome.ELEMENTS_ATIVO_HOME.nomeDestinatarioTexto);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.emailDestinatario).type(elAtivoHome.ELEMENTS_ATIVO_HOME.emailDestinatarioTexto);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.assuntoDestinatario).type(elAtivoHome.ELEMENTS_ATIVO_HOME.assuntoDestinatarioTexto);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.criarAtivoEmail).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.campoMensagemOperador).type(elAtivoHome.ELEMENTS_ATIVO_HOME.mensagemOperador);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.enviarMensagem).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.conversaOperador).contains(elAtivoHome.ELEMENTS_ATIVO_HOME.mensagemOperador);
    })

    it('Enviar um ativo pelo SMS', () => {
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoEnvioAtivo).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.botaoAtivoSms).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.canalEnvioSms).select('number:8');
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneSms).type(elAtivoHome.ELEMENTS_ATIVO_HOME.telefoneTextoSms);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.campoMensagemSms).type(elAtivoHome.ELEMENTS_ATIVO_HOME.textoMensagem);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.criarAtivoSms).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.spanMensagemSucesso).contains(elAtivoHome.ELEMENTS_ATIVO_HOME.mensagemSucesso);
    })

});