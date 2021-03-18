/// <reference types="cypress" />

require("cypress-file-upload");
import Login from '../../support/pages/login.js'
import Logout from '../../support/pages/logout.js';
import cardAtendimento from '../../support/pages/cardAtendimento.js';
const elAtivo = require('../../support/elements/ativo.js')
const elCardAtendimento = require('../../support/elements/cardAtendimento.js');

describe('Envio de Ativo como operador - Pela home - Whatsapp Web e Enterprise', () => {

    beforeEach(() => {
        Login.loginOperador();
    })

    it('Enviar um ativo sem responsavel para Whatsapp Web', () => {
        cy.wait(2000);
        cy.get(elAtivo.ELEMENTS_ATIVO.botaoEnvioAtivo).click();
        cy.get(elAtivo.ELEMENTS_ATIVO.botaoAtivoWhats).click();
        cy.get(elAtivo.ELEMENTS_ATIVO.canalEnvioWhats).select(elAtivo.ELEMENTS_ATIVO.canalWhats);
        cy.get(elAtivo.ELEMENTS_ATIVO.telefoneWhats).type(elAtivo.ELEMENTS_ATIVO.telefoneTextoWhats);
        cy.get(elAtivo.ELEMENTS_ATIVO.campoMensagemWhats).type(elAtivo.ELEMENTS_ATIVO.textoMensagem);
        cy.get(elAtivo.ELEMENTS_ATIVO.criarAtivo).click({ force: true });
        cy.get(elAtivo.ELEMENTS_ATIVO.spanMensagemSucesso).should('have.text', 'Mensagem enviada com sucesso!');
    })

    it('Enviar um ativo sem responsavel para Whatsapp Web com anexo', () => {
        cy.wait(2000);
        cy.get(elAtivo.ELEMENTS_ATIVO.botaoEnvioAtivo).click();
        cy.get(elAtivo.ELEMENTS_ATIVO.botaoAtivoWhats).click();
        cy.get(elAtivo.ELEMENTS_ATIVO.canalEnvioWhats).select(elAtivo.ELEMENTS_ATIVO.canalWhats);
        cy.get(elAtivo.ELEMENTS_ATIVO.telefoneWhats).type(elAtivo.ELEMENTS_ATIVO.telefoneTextoWhats);
        cy.get(elAtivo.ELEMENTS_ATIVO.campoMensagemWhats).type(elAtivo.ELEMENTS_ATIVO.textoMensagem);
        cy.get(elAtivo.ELEMENTS_ATIVO.fileInputElement)
            .attachFile({ filePath: elAtivo.ELEMENTS_ATIVO.arquivos });
        cy.wait(3000);
        cy.get(elAtivo.ELEMENTS_ATIVO.criarAtivo).click({ force: true });
        cy.get(elAtivo.ELEMENTS_ATIVO.spanMensagemSucesso).should('have.text', 'Mensagem enviada com sucesso!');
    })

    it('Enviar um ativo com responsavel para Whatsapp Web', () => {
        cy.wait(2000);
        cy.get(elAtivo.ELEMENTS_ATIVO.botaoEnvioAtivo).click();
        cy.get(elAtivo.ELEMENTS_ATIVO.botaoAtivoWhats).click();
        cy.get(elAtivo.ELEMENTS_ATIVO.canalEnvioWhats).select(elAtivo.ELEMENTS_ATIVO.canalWhats);
        cy.get(elAtivo.ELEMENTS_ATIVO.responsavel).click({ force: true });
        cy.get(elAtivo.ELEMENTS_ATIVO.telefoneWhats).type(elAtivo.ELEMENTS_ATIVO.telefoneTextoWhats);
        cy.get(elAtivo.ELEMENTS_ATIVO.campoMensagemWhats).type(elAtivo.ELEMENTS_ATIVO.textoMensagem);
        cy.get(elAtivo.ELEMENTS_ATIVO.criarAtivo).click({ force: true });
        cy.get(elAtivo.ELEMENTS_ATIVO.spanMensagemSucesso).should('have.text', 'Mensagem enviada com sucesso!');
    })

    it('Enviar um ativo com responsavel para Whatsapp Web com anexo', () => {
        cy.wait(2000);
        cy.get(elAtivo.ELEMENTS_ATIVO.botaoEnvioAtivo).click();
        cy.get(elAtivo.ELEMENTS_ATIVO.botaoAtivoWhats).click();
        cy.get(elAtivo.ELEMENTS_ATIVO.canalEnvioWhats).select(elAtivo.ELEMENTS_ATIVO.canalWhats);
        cy.get(elAtivo.ELEMENTS_ATIVO.responsavel).click({ force: true });
        cy.get(elAtivo.ELEMENTS_ATIVO.telefoneWhats).type(elAtivo.ELEMENTS_ATIVO.telefoneTextoWhats);
        cy.get(elAtivo.ELEMENTS_ATIVO.campoMensagemWhats).type(elAtivo.ELEMENTS_ATIVO.textoMensagem);
        cy.get(elAtivo.ELEMENTS_ATIVO.fileInputElement)
            .attachFile({ filePath: elAtivo.ELEMENTS_ATIVO.arquivos });
        cy.wait(3000);
        cy.get(elAtivo.ELEMENTS_ATIVO.criarAtivo).click({ force: true });
        cy.get(elAtivo.ELEMENTS_ATIVO.spanMensagemSucesso).should('have.text', 'Mensagem enviada com sucesso!');
    })

    it('Enviar um ativo sem responsavel pelo Enterprise', () => {
        cy.wait(2000);
        cy.get(elAtivo.ELEMENTS_ATIVO.botaoEnvioAtivo).click();
        cy.get(elAtivo.ELEMENTS_ATIVO.botaoAtivoWhats).click();
        cy.get(elAtivo.ELEMENTS_ATIVO.canalEnvioWhats).select(elAtivo.ELEMENTS_ATIVO.canalEnterprise);
        cy.get(elAtivo.ELEMENTS_ATIVO.telefoneWhats).type(elAtivo.ELEMENTS_ATIVO.telefoneTextoWhats);
        cy.get(elAtivo.ELEMENTS_ATIVO.campoHsm).select(elAtivo.ELEMENTS_ATIVO.hsmEnterprise);
        cy.get(elAtivo.ELEMENTS_ATIVO.criarAtivo).click({ force: true });
        cy.get(elAtivo.ELEMENTS_ATIVO.spanMensagemSucesso).should('have.text', 'Mensagem enviada com sucesso!');
    })

    it('Enviar um ativo com responsavel pelo Enterprise', () => {
        cy.wait(2000);
        cy.get(elAtivo.ELEMENTS_ATIVO.botaoEnvioAtivo).click();
        cy.get(elAtivo.ELEMENTS_ATIVO.botaoAtivoWhats).click();
        cy.get(elAtivo.ELEMENTS_ATIVO.canalEnvioWhats).select(elAtivo.ELEMENTS_ATIVO.canalEnterprise);
        cy.get(elAtivo.ELEMENTS_ATIVO.responsavel).click({ force: true });
        cy.get(elAtivo.ELEMENTS_ATIVO.telefoneWhats).type(elAtivo.ELEMENTS_ATIVO.telefoneTextoWhats);
        cy.get(elAtivo.ELEMENTS_ATIVO.campoHsm).select(elAtivo.ELEMENTS_ATIVO.hsmEnterprise);
        cy.get(elAtivo.ELEMENTS_ATIVO.criarAtivo).click({ force: true });
        cy.get(elAtivo.ELEMENTS_ATIVO.spanMensagemSucesso).should('have.text', 'Mensagem enviada com sucesso!');
    })

    afterEach(() => {
        Logout.logout();
        Login.loginGestor();
        cardAtendimento.finalizacaoCardStatus(elCardAtendimento.ELEMENTS_CARD_ATENDIMENTO.setorCardHome);
    })

});

describe('Envio de Ativo como operador - Pela home - SMS, E-mail', () => {

    beforeEach(() => {
        Login.loginOperador();
    })

    it('Enviar um ativo pelo E-mail', () => {
        cy.wait(2000);
        cy.get(elAtivo.ELEMENTS_ATIVO.botaoEnvioAtivo).click();
        cy.get(elAtivo.ELEMENTS_ATIVO.botaoAtivoEmail).click();
        cy.get(elAtivo.ELEMENTS_ATIVO.emailRemetente).select(elAtivo.ELEMENTS_ATIVO.canalEmail);
        cy.get(elAtivo.ELEMENTS_ATIVO.nomeDestinatario).type(elAtivo.ELEMENTS_ATIVO.nomeDestinatarioTexto);
        cy.get(elAtivo.ELEMENTS_ATIVO.emailDestinatario).type(elAtivo.ELEMENTS_ATIVO.emailDestinatarioTexto);
        cy.get(elAtivo.ELEMENTS_ATIVO.assuntoDestinatario).type(elAtivo.ELEMENTS_ATIVO.assuntoDestinatarioTexto);
        cy.get(elAtivo.ELEMENTS_ATIVO.criarAtivoEmail).click();
        cy.get(elAtivo.ELEMENTS_ATIVO.campoMensagemOperador).type(elAtivo.ELEMENTS_ATIVO.mensagemOperador);
        cy.get(elAtivo.ELEMENTS_ATIVO.enviarMensagem).click({force: true});
        cy.get(elAtivo.ELEMENTS_ATIVO.conversaOperador).contains(elAtivo.ELEMENTS_ATIVO.mensagemOperador);
    })

    it('Enviar um ativo pelo SMS', () => {
        cy.wait(2000);
        cy.get(elAtivo.ELEMENTS_ATIVO.botaoEnvioAtivo).click();
        cy.get(elAtivo.ELEMENTS_ATIVO.botaoAtivoSms).click();
        cy.get(elAtivo.ELEMENTS_ATIVO.canalEnvioSms).select(elAtivo.ELEMENTS_ATIVO.canalSms);
        cy.get(elAtivo.ELEMENTS_ATIVO.telefoneSms).type(elAtivo.ELEMENTS_ATIVO.telefoneTextoSms);
        cy.get(elAtivo.ELEMENTS_ATIVO.campoMensagemSms).type(elAtivo.ELEMENTS_ATIVO.textoMensagem);
        cy.get(elAtivo.ELEMENTS_ATIVO.criarAtivoSms).click();
        cy.get(elAtivo.ELEMENTS_ATIVO.spanMensagemSucesso).should('have.text', 'Mensagem enviada com sucesso!');
    })

    afterEach(() => {
        Logout.logout();
        Login.loginGestor();
        cardAtendimento.finalizacaoCardStatus(elCardAtendimento.ELEMENTS_CARD_ATENDIMENTO.setorCardHome);
    })
    
});