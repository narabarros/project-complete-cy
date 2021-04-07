/// <reference types="cypress" />

import Login from '../../../../support/pages/login.js';
import ExcluirCanal from '../../../../support/pages/excluirCanal.js';
const elBaseUrl = require ('../../../../support/elements/urls_acessos.js');
const elMenu = require('../../../../support/elements/menu.js');
const elSms = require('../../../../support/elements/canaisDeEntrada/sms.js');

describe('Cadastro Pontal (SMS)', () => {

    beforeEach(() => {
        Login.loginLord();
        cy.get(elMenu.ELEMENTS_MENU.btnCanaisEntrada).click();
        cy.get(elMenu.ELEMENTS_MENU.btnCanaisEntradaSms).click();
        cy.url().should('contains', elBaseUrl.ELEMENTS_BASE_URL.baseUrlCanaisEntradaSms);
        cy.get(elSms.ELEMENTS_SMS.btnNovoSms).click();
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-modal');
        cy.get(elSms.ELEMENTS_SMS.selectGateway).select(elSms.ELEMENTS_SMS.optionMovile);
    })

    it('Sucesso ao cancelar cadastro', () => {
        cy.get(elSms.ELEMENTS_SMS.btnCancelar).click();
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-hidden');
    })

    it('Sucesso ao criar Canal de SMS', () => {
        cy.get(elSms.ELEMENTS_SMS.inputNome).type(elSms.ELEMENTS_SMS.nome);
        cy.get(elSms.ELEMENTS_SMS.selectSetorPadrao).select(elSms.ELEMENTS_SMS.optionSetorPadrao);
        cy.get(elSms.ELEMENTS_SMS.inputProcessor).type(elSms.ELEMENTS_SMS.processor);
        cy.get(elSms.ELEMENTS_SMS.inputLogin).type(elSms.ELEMENTS_SMS.login);
        cy.get(elSms.ELEMENTS_SMS.inputTokenAutenticacao).type(elSms.ELEMENTS_SMS.tokenAutenticacao);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackMovile).should('have.value', elSms.ELEMENTS_SMS.urlCallback);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackMovile). should('have.attr', 'readonly');
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Os dados foram criados com sucesso!');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-hidden');
    })

    it('Sucesso ao criar Canal de SMS (Ativo)', () => {
        cy.get(elSms.ELEMENTS_SMS.inputNome).type(elSms.ELEMENTS_SMS.nome);
        cy.get(elSms.ELEMENTS_SMS.btnAtivo).check({force: true});
        cy.get(elSms.ELEMENTS_SMS.btnAtivo).should('have.class', elSms.ELEMENTS_SMS.checkActive);
        cy.get(elSms.ELEMENTS_SMS.selectSetorPadrao).select(elSms.ELEMENTS_SMS.optionSetorPadrao);
        cy.get(elSms.ELEMENTS_SMS.inputProcessor).type(elSms.ELEMENTS_SMS.processor);
        cy.get(elSms.ELEMENTS_SMS.inputLogin).type(elSms.ELEMENTS_SMS.login);
        cy.get(elSms.ELEMENTS_SMS.inputTokenAutenticacao).type(elSms.ELEMENTS_SMS.tokenAutenticacao);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackMovile).should('have.value', elSms.ELEMENTS_SMS.urlCallback);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackMovile). should('have.attr', 'readonly');
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Os dados foram criados com sucesso!');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-hidden');
    })

    it('Sucesso ao criar Canal de SMS (Envio Ativo)', () => {
        cy.get(elSms.ELEMENTS_SMS.inputNome).type(elSms.ELEMENTS_SMS.nome);
        cy.get(elSms.ELEMENTS_SMS.selectSetorPadrao).select(elSms.ELEMENTS_SMS.optionSetorPadrao);
        cy.get(elSms.ELEMENTS_SMS.inputProcessor).type(elSms.ELEMENTS_SMS.processor);
        cy.get(elSms.ELEMENTS_SMS.inputLogin).type(elSms.ELEMENTS_SMS.login);
        cy.get(elSms.ELEMENTS_SMS.inputTokenAutenticacao).type(elSms.ELEMENTS_SMS.tokenAutenticacao);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackMovile).should('have.value', elSms.ELEMENTS_SMS.urlCallback);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackMovile). should('have.attr', 'readonly');
        cy.get(elSms.ELEMENTS_SMS.btnEnvioAtivo).check({force: true});
        cy.get(elSms.ELEMENTS_SMS.btnEnvioAtivo).should('have.class', elSms.ELEMENTS_SMS.checkActive);
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Os dados foram criados com sucesso!');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-hidden');
    })
    
    it('Falha ao criar Canal de SMS (Sem Nome)', () => {
        cy.get(elSms.ELEMENTS_SMS.inputNome).type(elSms.ELEMENTS_SMS.nome).clear();
        cy.get(elSms.ELEMENTS_SMS.spanHelpBlock).should('have.attr', 'ng-show');
        cy.get(elSms.ELEMENTS_SMS.selectSetorPadrao).select(elSms.ELEMENTS_SMS.optionSetorPadrao);
        cy.get(elSms.ELEMENTS_SMS.inputProcessor).type(elSms.ELEMENTS_SMS.processor);
        cy.get(elSms.ELEMENTS_SMS.inputLogin).type(elSms.ELEMENTS_SMS.login);
        cy.get(elSms.ELEMENTS_SMS.inputTokenAutenticacao).type(elSms.ELEMENTS_SMS.tokenAutenticacao);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackMovile).should('have.value', elSms.ELEMENTS_SMS.urlCallback);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackMovile). should('have.attr', 'readonly');
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'O "Nome" é obrigatório.');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-modal');
    })

    it('Falha ao criar Canal de SMS (Sem Setor Padrão)', () => {
        cy.get(elSms.ELEMENTS_SMS.inputNome).type(elSms.ELEMENTS_SMS.nome);
        cy.get(elSms.ELEMENTS_SMS.selectSetorPadrao).select('');
        cy.get(elSms.ELEMENTS_SMS.spanHelpBlock).should('have.attr', 'ng-show');
        cy.get(elSms.ELEMENTS_SMS.inputProcessor).type(elSms.ELEMENTS_SMS.processor);
        cy.get(elSms.ELEMENTS_SMS.inputLogin).type(elSms.ELEMENTS_SMS.login);
        cy.get(elSms.ELEMENTS_SMS.inputTokenAutenticacao).type(elSms.ELEMENTS_SMS.tokenAutenticacao);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackMovile).should('have.value', elSms.ELEMENTS_SMS.urlCallback);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackMovile). should('have.attr', 'readonly');
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'O "Setor padrão" é obrigatório.');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-modal');
    })

    it('Falha ao criar Canal de SMS (Sem Login)', () => {
        cy.get(elSms.ELEMENTS_SMS.inputNome).type(elSms.ELEMENTS_SMS.nome);
        cy.get(elSms.ELEMENTS_SMS.selectSetorPadrao).select(elSms.ELEMENTS_SMS.optionSetorPadrao);
        cy.get(elSms.ELEMENTS_SMS.inputProcessor).type(elSms.ELEMENTS_SMS.processor);
        cy.get(elSms.ELEMENTS_SMS.inputLogin).type(elSms.ELEMENTS_SMS.login).clear();
        cy.get(elSms.ELEMENTS_SMS.spanHelpBlock).should('have.attr', 'ng-show');
        cy.get(elSms.ELEMENTS_SMS.inputTokenAutenticacao).type(elSms.ELEMENTS_SMS.tokenAutenticacao);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackMovile).should('have.value', elSms.ELEMENTS_SMS.urlCallback);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackMovile). should('have.attr', 'readonly');
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Preencha os campos obrigatórios.');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-modal');
    })

    it('Falha ao criar Canal de SMS (Sem Token de Autenticação)', () => {
        cy.get(elSms.ELEMENTS_SMS.inputNome).type(elSms.ELEMENTS_SMS.nome);
        cy.get(elSms.ELEMENTS_SMS.selectSetorPadrao).select(elSms.ELEMENTS_SMS.optionSetorPadrao);
        cy.get(elSms.ELEMENTS_SMS.inputProcessor).type(elSms.ELEMENTS_SMS.processor);
        cy.get(elSms.ELEMENTS_SMS.inputLogin).type(elSms.ELEMENTS_SMS.login);
        cy.get(elSms.ELEMENTS_SMS.inputTokenAutenticacao).type(elSms.ELEMENTS_SMS.tokenAutenticacao).clear();
        cy.get(elSms.ELEMENTS_SMS.spanHelpBlock).should('have.attr', 'ng-show');
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackMovile).should('have.value', elSms.ELEMENTS_SMS.urlCallback);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackMovile). should('have.attr', 'readonly');
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Preencha os campos obrigatórios.');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-modal');
    })

})

describe('Alterar setor do canal na tela de SMS', () => {

    beforeEach(() => {
        Login.loginLord();
        cy.get(elMenu.ELEMENTS_MENU.btnCanaisEntrada).click();
        cy.get(elMenu.ELEMENTS_MENU.btnCanaisEntradaSms).click();
        cy.url().should('contains', elBaseUrl.ELEMENTS_BASE_URL.baseUrlCanaisEntradaSms);
    })

    it('Sucesso ao alterar o setor do canal', () => {
        cy.get(elSms.ELEMENTS_SMS.selectSetorTelaSMS).select(elSms.ELEMENTS_SMS.novoOptionSetorPadrao);
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Os dados foram atualizados com sucesso!');
    })

})

describe('Excluir cadastros Pontal (SMS)', () => {

    beforeEach(() => {
        Login.loginLord();
    })

    it('Sucesso ao excluir canal', () => {
        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlCanaisEntradaSms);
        cy.url().should('contains', elBaseUrl.ELEMENTS_BASE_URL.baseUrlCanaisEntradaSms);
        ExcluirCanal.excluirTodosCanaisSms();
    })
})