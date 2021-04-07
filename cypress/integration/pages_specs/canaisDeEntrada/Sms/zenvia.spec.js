/// <reference types="cypress" />

import Login from '../../../../support/pages/login.js';
import ExcluirCanal from '../../../../support/pages/excluirCanal.js';
const elBaseUrl = require ('../../../../support/elements/urls_acessos.js');
const elMenu = require('../../../../support/elements/menu.js');
const elSms = require('../../../../support/elements/canaisDeEntrada/sms.js');

describe('Cadastro Zenvia (SMS)', () => {

    beforeEach(() => {
        Login.loginLord();
        cy.wait(4000);
        cy.get(elMenu.ELEMENTS_MENU.btnCanaisEntrada).click();
        cy.get(elMenu.ELEMENTS_MENU.btnCanaisEntradaSms).click();
        cy.url().should('contains', elBaseUrl.ELEMENTS_BASE_URL.baseUrlCanaisEntradaSms);
        cy.get(elSms.ELEMENTS_SMS.btnNovoSms).click();
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-modal');
        cy.get(elSms.ELEMENTS_SMS.selectGateway).select(elSms.ELEMENTS_SMS.optionZenvia);
    })

    it('Sucesso ao cancelar cadastro', () => {
        cy.get(elSms.ELEMENTS_SMS.btnCancelar).click();
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-hidden');
    })

    it('Sucesso ao criar Canal de SMS', () => {
        cy.get(elSms.ELEMENTS_SMS.inputNome).type(elSms.ELEMENTS_SMS.nome);
        cy.get(elSms.ELEMENTS_SMS.selectSetorPadrao).select(elSms.ELEMENTS_SMS.optionSetorPadrao);
        cy.get(elSms.ELEMENTS_SMS.inputProcessor).type(elSms.ELEMENTS_SMS.processor);
        cy.get(elSms.ELEMENTS_SMS.selectTipoSms).select(elSms.ELEMENTS_SMS.optionTipoSms);
        cy.get(elSms.ELEMENTS_SMS.inputConta).type(elSms.ELEMENTS_SMS.conta);
        cy.get(elSms.ELEMENTS_SMS.inputSenha).type(elSms.ELEMENTS_SMS.senha);
        cy.get(elSms.ELEMENTS_SMS.inputIdAgrupador).type(elSms.ELEMENTS_SMS.idAgrupador);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackZenvia).should('have.value', elSms.ELEMENTS_SMS.urlCallback);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackZenvia). should('have.attr', 'readonly');
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
        cy.get(elSms.ELEMENTS_SMS.selectTipoSms).select(elSms.ELEMENTS_SMS.optionTipoSms);
        cy.get(elSms.ELEMENTS_SMS.inputConta).type(elSms.ELEMENTS_SMS.conta);
        cy.get(elSms.ELEMENTS_SMS.inputSenha).type(elSms.ELEMENTS_SMS.senha);
        cy.get(elSms.ELEMENTS_SMS.inputIdAgrupador).type(elSms.ELEMENTS_SMS.idAgrupador);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackZenvia).should('have.value', elSms.ELEMENTS_SMS.urlCallback);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackZenvia). should('have.attr', 'readonly');
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Os dados foram criados com sucesso!');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-hidden');
    })    

    it('Sucesso ao criar Canal de SMS (Envio de Ativo)', () => {
        cy.get(elSms.ELEMENTS_SMS.inputNome).type(elSms.ELEMENTS_SMS.nome);
        cy.get(elSms.ELEMENTS_SMS.selectSetorPadrao).select(elSms.ELEMENTS_SMS.optionSetorPadrao);
        cy.get(elSms.ELEMENTS_SMS.inputProcessor).type(elSms.ELEMENTS_SMS.processor);
        cy.get(elSms.ELEMENTS_SMS.selectTipoSms).select(elSms.ELEMENTS_SMS.optionTipoSms);
        cy.get(elSms.ELEMENTS_SMS.inputConta).type(elSms.ELEMENTS_SMS.conta);
        cy.get(elSms.ELEMENTS_SMS.inputSenha).type(elSms.ELEMENTS_SMS.senha);
        cy.get(elSms.ELEMENTS_SMS.inputIdAgrupador).type(elSms.ELEMENTS_SMS.idAgrupador);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackZenvia).should('have.value', elSms.ELEMENTS_SMS.urlCallback);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackZenvia). should('have.attr', 'readonly');
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
        cy.get(elSms.ELEMENTS_SMS.selectTipoSms).select(elSms.ELEMENTS_SMS.optionTipoSms);
        cy.get(elSms.ELEMENTS_SMS.inputConta).type(elSms.ELEMENTS_SMS.conta);
        cy.get(elSms.ELEMENTS_SMS.inputSenha).type(elSms.ELEMENTS_SMS.senha);
        cy.get(elSms.ELEMENTS_SMS.inputIdAgrupador).type(elSms.ELEMENTS_SMS.idAgrupador);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackZenvia).should('have.value', elSms.ELEMENTS_SMS.urlCallback);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackZenvia). should('have.attr', 'readonly');
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'O "Nome" é obrigatório.');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-modal');
    })

    it('Falha ao criar Canal de SMS (Sem Setor Padrao)', () => {
        cy.get(elSms.ELEMENTS_SMS.inputNome).type(elSms.ELEMENTS_SMS.nome);
        cy.get(elSms.ELEMENTS_SMS.selectSetorPadrao).select('');
        cy.get(elSms.ELEMENTS_SMS.spanHelpBlock).should('have.attr', 'ng-show');
        cy.get(elSms.ELEMENTS_SMS.inputProcessor).type(elSms.ELEMENTS_SMS.processor);
        cy.get(elSms.ELEMENTS_SMS.selectTipoSms).select(elSms.ELEMENTS_SMS.optionTipoSms);
        cy.get(elSms.ELEMENTS_SMS.inputConta).type(elSms.ELEMENTS_SMS.conta);
        cy.get(elSms.ELEMENTS_SMS.inputSenha).type(elSms.ELEMENTS_SMS.senha);
        cy.get(elSms.ELEMENTS_SMS.inputIdAgrupador).type(elSms.ELEMENTS_SMS.idAgrupador);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackZenvia).should('have.value', elSms.ELEMENTS_SMS.urlCallback);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackZenvia). should('have.attr', 'readonly');
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'O "Setor padrão" é obrigatório.');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-modal');
    })

    it('Falha ao criar Canal de SMS (Sem Conta)', () => {
        cy.get(elSms.ELEMENTS_SMS.inputNome).type(elSms.ELEMENTS_SMS.nome);
        cy.get(elSms.ELEMENTS_SMS.selectSetorPadrao).select(elSms.ELEMENTS_SMS.optionSetorPadrao);
        cy.get(elSms.ELEMENTS_SMS.inputProcessor).type(elSms.ELEMENTS_SMS.processor);
        cy.get(elSms.ELEMENTS_SMS.selectTipoSms).select(elSms.ELEMENTS_SMS.optionTipoSms);
        cy.get(elSms.ELEMENTS_SMS.inputConta).type(elSms.ELEMENTS_SMS.conta).clear();
        cy.get(elSms.ELEMENTS_SMS.spanHelpBlock).should('have.attr', 'ng-show');
        cy.get(elSms.ELEMENTS_SMS.inputSenha).type(elSms.ELEMENTS_SMS.senha);
        cy.get(elSms.ELEMENTS_SMS.inputIdAgrupador).type(elSms.ELEMENTS_SMS.idAgrupador);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackZenvia).should('have.value', elSms.ELEMENTS_SMS.urlCallback);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackZenvia). should('have.attr', 'readonly');
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Preencha os campos obrigatórios.');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-modal');
    })

    it('Falha ao criar Canal de SMS (Sem Senha)', () => {
        cy.get(elSms.ELEMENTS_SMS.inputNome).type(elSms.ELEMENTS_SMS.nome);
        cy.get(elSms.ELEMENTS_SMS.selectSetorPadrao).select(elSms.ELEMENTS_SMS.optionSetorPadrao);
        cy.get(elSms.ELEMENTS_SMS.inputProcessor).type(elSms.ELEMENTS_SMS.processor);
        cy.get(elSms.ELEMENTS_SMS.selectTipoSms).select(elSms.ELEMENTS_SMS.optionTipoSms);
        cy.get(elSms.ELEMENTS_SMS.inputConta).type(elSms.ELEMENTS_SMS.conta);
        cy.get(elSms.ELEMENTS_SMS.inputSenha).type(elSms.ELEMENTS_SMS.senha).clear();
        cy.get(elSms.ELEMENTS_SMS.spanHelpBlock).should('have.attr', 'ng-show');
        cy.get(elSms.ELEMENTS_SMS.inputIdAgrupador).type(elSms.ELEMENTS_SMS.idAgrupador);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackZenvia).should('have.value', elSms.ELEMENTS_SMS.urlCallback);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackZenvia). should('have.attr', 'readonly');
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Preencha os campos obrigatórios.');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-modal');
    })

    it('Falha ao criar Canal de SMS (Sem Id do Agrupador)', () => {
        cy.get(elSms.ELEMENTS_SMS.inputNome).type(elSms.ELEMENTS_SMS.nome);
        cy.get(elSms.ELEMENTS_SMS.selectSetorPadrao).select(elSms.ELEMENTS_SMS.optionSetorPadrao);
        cy.get(elSms.ELEMENTS_SMS.inputProcessor).type(elSms.ELEMENTS_SMS.processor);
        cy.get(elSms.ELEMENTS_SMS.selectTipoSms).select(elSms.ELEMENTS_SMS.optionTipoSms);
        cy.get(elSms.ELEMENTS_SMS.inputConta).type(elSms.ELEMENTS_SMS.conta);
        cy.get(elSms.ELEMENTS_SMS.inputSenha).type(elSms.ELEMENTS_SMS.senha);
        cy.get(elSms.ELEMENTS_SMS.inputIdAgrupador).type(elSms.ELEMENTS_SMS.idAgrupador).clear();
        cy.get(elSms.ELEMENTS_SMS.spanHelpBlock).should('have.attr', 'ng-show');
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackZenvia).should('have.value', elSms.ELEMENTS_SMS.urlCallback);
        cy.get(elSms.ELEMENTS_SMS.inputUrlCallbackZenvia). should('have.attr', 'readonly');
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Preencha os campos obrigatórios.');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-modal');
    })
})

describe('Editar cadastro Zenvia (SMS)', () => {

    beforeEach(() => {
        Login.loginLord();
        cy.wait(4000);
        cy.get(elMenu.ELEMENTS_MENU.btnCanaisEntrada).click();
        cy.get(elMenu.ELEMENTS_MENU.btnCanaisEntradaSms).click();
        cy.url().should('contains', elBaseUrl.ELEMENTS_BASE_URL.baseUrlCanaisEntradaSms);
        cy.get(elSms.ELEMENTS_SMS.btnEditar).click();
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-modal');
    })

    it('Sucesso ao cancelar edição', () => {
        cy.get(elSms.ELEMENTS_SMS.btnCancelar).click();
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-hidden');
    })

    it('Sucesso ao editar o nome do canal', () => {
        cy.get(elSms.ELEMENTS_SMS.inputNome).clear().type(elSms.ELEMENTS_SMS.novoNome);
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Os dados foram atualizados com sucesso!');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-hidden');
    })

    it('Sucesso ao inativar o canal', () => {
        cy.get(elSms.ELEMENTS_SMS.btnAtivo).click({force: true});
        cy.get(elSms.ELEMENTS_SMS.btnAtivo).should('have.class', elSms.ELEMENTS_SMS.checkNotActive);
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Os dados foram atualizados com sucesso!');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-hidden');
    })

    it('Sucesso ao ativar o canal', () => {
        cy.get(elSms.ELEMENTS_SMS.btnAtivo).check({force: true});
        cy.get(elSms.ELEMENTS_SMS.btnAtivo).should('have.class', elSms.ELEMENTS_SMS.checkActive);
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Os dados foram atualizados com sucesso!');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-hidden');
    })

    it('Sucesso ao editar o setor padrão do canal', () => {
        cy.get(elSms.ELEMENTS_SMS.selectSetorPadrao).select(elSms.ELEMENTS_SMS.novoOptionSetorPadrao);
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Os dados foram atualizados com sucesso!');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-hidden');
    })

    it('Sucesso ao editar o processor do canal (Removendo valor)', () => {
        cy.get(elSms.ELEMENTS_SMS.inputProcessor).clear();
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Os dados foram atualizados com sucesso!');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-hidden');
    })

    it('Sucesso ao editar o processor do canal (Adicionando valor)', () => {
        cy.get(elSms.ELEMENTS_SMS.inputProcessor).type(elSms.ELEMENTS_SMS.processor);
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Os dados foram atualizados com sucesso!');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-hidden');
    })

    it('Sucesso ao editar o tipo de sms do canal', () => {
        cy.get(elSms.ELEMENTS_SMS.selectTipoSms).select(elSms.ELEMENTS_SMS.novoOptionTipoSms);
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Os dados foram atualizados com sucesso!');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-hidden');
    })

    it('Sucesso ao editar a conta do canal', () => {
        cy.get(elSms.ELEMENTS_SMS.inputConta).clear().type(elSms.ELEMENTS_SMS.novaConta);
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Os dados foram atualizados com sucesso!');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-hidden');
    })

    it('Sucesso ao editar a senha do canal', () => {
        cy.get(elSms.ELEMENTS_SMS.inputSenha).clear().type(elSms.ELEMENTS_SMS.novaSenha);
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Os dados foram atualizados com sucesso!');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-hidden');
    })

    it('Sucesso ao editar o id do agrupador do canal', () => {
        cy.get(elSms.ELEMENTS_SMS.inputIdAgrupador).clear().type(elSms.ELEMENTS_SMS.novoIdAgrupador);
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Os dados foram atualizados com sucesso!');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-hidden');
    })

    it('Sucesso ao habilitar o envio de ativo do canal', () => {
        cy.get(elSms.ELEMENTS_SMS.btnEnvioAtivo).check({force: true});
        cy.get(elSms.ELEMENTS_SMS.btnEnvioAtivo).should('have.class', elSms.ELEMENTS_SMS.checkActive);
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Os dados foram atualizados com sucesso!');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-hidden');
    })

    it('Sucesso ao desabilitar o envio de ativo do canal', () => {
        cy.get(elSms.ELEMENTS_SMS.btnEnvioAtivo).click({force: true});
        cy.get(elSms.ELEMENTS_SMS.btnEnvioAtivo).should('have.class', elSms.ELEMENTS_SMS.checkNotActive);
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Os dados foram atualizados com sucesso!');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-hidden');
    })

    it('Falha ao editar o nome do canal', () => {
        cy.get(elSms.ELEMENTS_SMS.inputNome).clear();
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanHelpBlock).should('have.attr', 'ng-show');
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'O "Nome" é obrigatório.');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-modal');
    })

    it('Falha ao editar o setor padrão do canal', () => {
        cy.get(elSms.ELEMENTS_SMS.selectSetorPadrao).select('');
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanHelpBlock).should('have.attr', 'ng-show');
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'O "Setor padrão" é obrigatório.');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-modal');
    })

    it('Falha ao editar o tipo de sms do canal', () => {
        cy.get(elSms.ELEMENTS_SMS.selectTipoSms).select('');
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanHelpBlock).should('have.attr', 'ng-show');
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Preencha os campos obrigatórios.');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-modal');
    })

    it('Falha ao editar a conta do canal', () => {
        cy.get(elSms.ELEMENTS_SMS.inputConta).clear();
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanHelpBlock).should('have.attr', 'ng-show');
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Preencha os campos obrigatórios.');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-modal');
    })

    it('Falha ao editar a senha do canal', () => {
        cy.get(elSms.ELEMENTS_SMS.inputSenha).clear();
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanHelpBlock).should('have.attr', 'ng-show');
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Preencha os campos obrigatórios.');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-modal');
    })

    it('Falha ao editar o id do agrupador do canal', () => {
        cy.get(elSms.ELEMENTS_SMS.inputIdAgrupador).clear();
        cy.get(elSms.ELEMENTS_SMS.btnSalvar).click();
        cy.get(elSms.ELEMENTS_SMS.spanHelpBlock).should('have.attr', 'ng-show');
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Preencha os campos obrigatórios.');
        cy.get(elSms.ELEMENTS_SMS.modalCadastro).should('have.attr', 'aria-modal');
    })

})

describe('Alterar setor do canal na tela de SMS', () => {

    beforeEach(() => {
        Login.loginLord();
        cy.wait(4000);
        cy.get(elMenu.ELEMENTS_MENU.btnCanaisEntrada).click();
        cy.get(elMenu.ELEMENTS_MENU.btnCanaisEntradaSms).click();
        cy.url().should('contains', elBaseUrl.ELEMENTS_BASE_URL.baseUrlCanaisEntradaSms);
    })

    it('Sucesso ao alterar o setor do canal', () => {
        cy.get(elSms.ELEMENTS_SMS.selectSetorTelaSMS).select(elSms.ELEMENTS_SMS.novoOptionSetorPadrao);
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'Os dados foram atualizados com sucesso!');
    })

})

describe('Excluir cadastros Zenvia (SMS)', () => {

    beforeEach(() => {
        Login.loginLord();
        cy.wait(4000);
    })

    it('Sucesso ao excluir canal', () => {
        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlCanaisEntradaSms);
        cy.url().should('contains', elBaseUrl.ELEMENTS_BASE_URL.baseUrlCanaisEntradaSms);
        ExcluirCanal.excluirTodosCanaisSms();
    })
})