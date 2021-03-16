/// <reference types="cypress" />

require("cypress-file-upload");
import Login from '../../support/pages/login.js';
import Logout from '../../support/pages/logout.js';
import cardAtendimento from '../../support/pages/cardAtendimento.js';
const elContato = require('../../support/elements/contato.js');
const elAtivo = require('../../support/elements/ativo.js');

describe('Tela de contato - Envio de ativo', () => {

    beforeEach(() => {
        Login.loginOperador();
        cy.get(elContato.ELEMENTS_CONTATO.acessaContato).click();
        cy.get(elContato.ELEMENTS_CONTATO.acessaLista).click();
        cy.get(elContato.ELEMENTS_CONTATO.campoBusca).type(elContato.ELEMENTS_CONTATO.contatoBusca);
        cy.get(elContato.ELEMENTS_CONTATO.botaoBuscar).click();
        cy.wait(2000);
        cy.get(elContato.ELEMENTS_CONTATO.botaoAcoes).click({ multiple: true, force: true });
        cy.get(elContato.ELEMENTS_CONTATO.botaoEnviar).click({ multiple: true, force: true });
        cy.wait(2000);
    })

    it('Enviar um ativo sem responsavel para Whatsapp Web', () => {
        cy.get(elAtivo.ELEMENTS_ATIVO.canalEnvioWhats).select(elAtivo.ELEMENTS_ATIVO.canalWhats);
        cy.get(elAtivo.ELEMENTS_ATIVO.campoMensagemWhats).type(elAtivo.ELEMENTS_ATIVO.textoMensagem);
        cy.get(elAtivo.ELEMENTS_ATIVO.criarAtivo).click({force: true });
        cy.get(elAtivo.ELEMENTS_ATIVO.spanMensagemSucesso).should('have.text', 'Mensagem enviada com sucesso!');
    })

    it('Enviar um ativo sem responsavel para Whatsapp Web', () => {
        cy.get(elAtivo.ELEMENTS_ATIVO.canalEnvioWhats).select(elAtivo.ELEMENTS_ATIVO.canalWhats);
        cy.get(elAtivo.ELEMENTS_ATIVO.campoMensagemWhats).type(elAtivo.ELEMENTS_ATIVO.textoMensagem);
        cy.get(elAtivo.ELEMENTS_ATIVO.fileInputElement)
            .attachFile({ filePath: elAtivo.ELEMENTS_ATIVO.arquivos });
        cy.wait(3000);
        cy.get(elAtivo.ELEMENTS_ATIVO.criarAtivo).click({force: true });
        cy.get(elAtivo.ELEMENTS_ATIVO.spanMensagemSucesso).should('have.text', 'Mensagem enviada com sucesso!');
    })

    it('Enviar um ativo com responsavel para Whatsapp Web', () => {
        cy.get(elAtivo.ELEMENTS_ATIVO.canalEnvioWhats).select(elAtivo.ELEMENTS_ATIVO.canalWhats);
        cy.get(elAtivo.ELEMENTS_ATIVO.responsavel).click({ force: true });
        cy.get(elAtivo.ELEMENTS_ATIVO.campoMensagemWhats).type(elAtivo.ELEMENTS_ATIVO.textoMensagem);
        cy.get(elAtivo.ELEMENTS_ATIVO.criarAtivo).click({force: true });
        cy.get(elAtivo.ELEMENTS_ATIVO.spanMensagemSucesso).should('have.text', 'Mensagem enviada com sucesso!');
    })

    it('Enviar um ativo com responsavel para Whatsapp Web', () => {
        cy.get(elAtivo.ELEMENTS_ATIVO.canalEnvioWhats).select(elAtivo.ELEMENTS_ATIVO.canalWhats);
        cy.get(elAtivo.ELEMENTS_ATIVO.responsavel).click({ force: true });
        cy.get(elAtivo.ELEMENTS_ATIVO.campoMensagemWhats).type(elAtivo.ELEMENTS_ATIVO.textoMensagem);
        cy.get(elAtivo.ELEMENTS_ATIVO.fileInputElement)
            .attachFile({ filePath: elAtivo.ELEMENTS_ATIVO.arquivos });
        cy.wait(3000);
        cy.get(elAtivo.ELEMENTS_ATIVO.criarAtivo).click({force: true });
        cy.get(elAtivo.ELEMENTS_ATIVO.spanMensagemSucesso).should('have.text', 'Mensagem enviada com sucesso!');
    })

    it('Enviar um ativo sem responsavel para Enterprise', () => {
        cy.get(elAtivo.ELEMENTS_ATIVO.canalEnvioWhats).select(elAtivo.ELEMENTS_ATIVO.canalEnterprise);
        cy.get(elAtivo.ELEMENTS_ATIVO.campoHsm).select(elAtivo.ELEMENTS_ATIVO.hsmEnterprise);
        cy.get(elAtivo.ELEMENTS_ATIVO.criarAtivo).click({force: true });
        cy.get(elAtivo.ELEMENTS_ATIVO.spanMensagemSucesso).should('have.text', 'Mensagem enviada com sucesso!');
    })

    it('Enviar um ativo com responsavel para Enterprise', () => {
        cy.get(elAtivo.ELEMENTS_ATIVO.canalEnvioWhats).select(elAtivo.ELEMENTS_ATIVO.canalEnterprise);
        cy.get(elAtivo.ELEMENTS_ATIVO.responsavel).click({ force: true });
        cy.get(elAtivo.ELEMENTS_ATIVO.campoHsm).select(elAtivo.ELEMENTS_ATIVO.hsmEnterprise);
        cy.get(elAtivo.ELEMENTS_ATIVO.criarAtivo).click({force: true });
        cy.get(elAtivo.ELEMENTS_ATIVO.spanMensagemSucesso).should('have.text', 'Mensagem enviada com sucesso!');
    })

    afterEach(() => {
        Logout.logout();
        Login.loginGestor();
        cardAtendimento.finalizacaoCardStatus();
    })

})

describe('Tela Contato - Editar/Detalhes', () => {

    before(() => {
        Login.loginOperador();
        cy.get(elContato.ELEMENTS_CONTATO.acessaContato).click();
        cy.get(elContato.ELEMENTS_CONTATO.acessaLista).click();
        cy.get(elContato.ELEMENTS_CONTATO.campoBusca).type(elContato.ELEMENTS_CONTATO.contatoBusca);
        cy.get(elContato.ELEMENTS_CONTATO.botaoBuscar).click();
        cy.wait(2000);
    })

    it('Cancelar a edição do contato', () => {
        cy.get(elContato.ELEMENTS_CONTATO.botaoAcoes).click({ multiple: true, force: true });
        cy.get(elContato.ELEMENTS_CONTATO.botaoEditar).click({ multiple: true, force: true });
        cy.get(elContato.ELEMENTS_CONTATO.campoNome).clear().type(elContato.ELEMENTS_CONTATO.textoCampoNome);
        cy.get(elContato.ELEMENTS_CONTATO.botaoCancelar).click();
        cy.get(elContato.ELEMENTS_CONTATO.modal).should('not.be.disabled');
    })

    it('Editar o contato', () => {
        cy.get(elContato.ELEMENTS_CONTATO.botaoAcoes).click({ multiple: true, force: true });
        cy.get(elContato.ELEMENTS_CONTATO.botaoEditar).click({ multiple: true, force: true });
        cy.get(elContato.ELEMENTS_CONTATO.campoNome).clear().type(elContato.ELEMENTS_CONTATO.textoCampoNome);
        cy.get(elContato.ELEMENTS_CONTATO.botaoSalvar).click();
        cy.get(elAtivo.ELEMENTS_ATIVO.spanMensagemSucesso).should('have.text', 'Contato alterado com sucesso.');
    })

    it('Detalhes do contato', () => {
        cy.get(elContato.ELEMENTS_CONTATO.botaoDetalhe).click({ multiple: true, force: true });
        cy.get(elContato.ELEMENTS_CONTATO.botaoCancelar).click({ force: true });
        cy.get(elContato.ELEMENTS_CONTATO.modal).should('not.be.disabled');
    })

})
