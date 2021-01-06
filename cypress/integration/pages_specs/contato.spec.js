/// <reference types="cypress" />

import Login from '../../support/pages/login.js';
const elContato = require('../../support/elements/contato.js');
const elAtivoHome = require('../../support/elements/ativo_home.js');

describe('Tela de contato' , () => {

    before(() => {
        Login.loginOperador();
        cy.get(elContato.ELEMENTS_CONTATO.acessaContato).click();
        cy.get(elContato.ELEMENTS_CONTATO.acessaLista).click();
        
    })

    it('Enviar um ativo sem responsavel para Whatsapp Web', () => {
        cy.get(elContato.ELEMENTS_CONTATO.campoBusca).type('14997142480');
        cy.get(elContato.ELEMENTS_CONTATO.botaoBuscar).click();
        cy.wait(1000);
        cy.get(elContato.ELEMENTS_CONTATO.botaoAcoes).click({ force: true });
        cy.get(elContato.ELEMENTS_CONTATO.botaoEnviar).click({ multiple: true });
        cy.wait(1000);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.canalEnvioWhats).select('string:waweb_30');
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.campoMensagemWhats).type(elAtivoHome.ELEMENTS_ATIVO_HOME.textoMensagem);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.criarAtivo).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.spanMensagemSucesso).should('have.text', 'Mensagem enviada com sucesso!');
    })
    it('Enviar um ativo sem responsavel para Whatsapp Web', () => {
        cy.get(elContato.ELEMENTS_CONTATO.campoBusca).type('14997142480');
        cy.get(elContato.ELEMENTS_CONTATO.botaoBuscar).click();
        cy.wait(1000);
        cy.get(elContato.ELEMENTS_CONTATO.botaoAcoes).click({ force: true });
        cy.get(elContato.ELEMENTS_CONTATO.botaoEnviar).click({ multiple: true });
        cy.wait(1000);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.canalEnvioWhats).select('string:waweb_30');
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.campoMensagemWhats).type(elAtivoHome.ELEMENTS_ATIVO_HOME.textoMensagem);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.fileInputElement)
            .attachFile({ filePath: elAtivoHome.ELEMENTS_ATIVO_HOME.arquivos });
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.criarAtivo).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.spanMensagemSucesso).should('have.text', 'Mensagem enviada com sucesso!');
    })
    it('Enviar um ativo com responsavel para Whatsapp Web', () => {
        cy.get(elContato.ELEMENTS_CONTATO.campoBusca).type('14997142480');
        cy.get(elContato.ELEMENTS_CONTATO.botaoBuscar).click();
        cy.wait(1000);
        cy.get(elContato.ELEMENTS_CONTATO.botaoAcoes).click({ force: true });
        cy.get(elContato.ELEMENTS_CONTATO.botaoEnviar).click({ multiple: true });
        cy.wait(1000);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.canalEnvioWhats).select('string:waweb_30');
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.responsavel).click({ force: true });
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.campoMensagemWhats).type(elAtivoHome.ELEMENTS_ATIVO_HOME.textoMensagem);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.criarAtivo).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.spanMensagemSucesso).should('have.text', 'Mensagem enviada com sucesso!');
    })
    it('Enviar um ativo com responsavel para Whatsapp Web', () => {
        cy.get(elContato.ELEMENTS_CONTATO.campoBusca).type('14997142480');
        cy.get(elContato.ELEMENTS_CONTATO.botaoBuscar).click();
        cy.wait(1000);
        cy.get(elContato.ELEMENTS_CONTATO.botaoAcoes).click({ force: true });
        cy.get(elContato.ELEMENTS_CONTATO.botaoEnviar).click({ multiple: true });
        cy.wait(1000);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.canalEnvioWhats).select('string:waweb_30');
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.responsavel).click({ force: true });
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.campoMensagemWhats).type(elAtivoHome.ELEMENTS_ATIVO_HOME.textoMensagem);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.fileInputElement)
            .attachFile({ filePath: elAtivoHome.ELEMENTS_ATIVO_HOME.arquivos });
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.criarAtivo).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.spanMensagemSucesso).should('have.text', 'Mensagem enviada com sucesso!');
    })
    
    it.only('Enviar um ativo sem responsavel para Enterprise', () => {
        cy.get(elContato.ELEMENTS_CONTATO.campoBusca).type('14997142480');
        cy.get(elContato.ELEMENTS_CONTATO.botaoBuscar).click();
        cy.wait(1000);
        cy.get(elContato.ELEMENTS_CONTATO.botaoAcoes).click({ force: true });
        cy.get(elContato.ELEMENTS_CONTATO.botaoEnviar).click({ multiple: true });
        cy.wait(1000);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.canalEnvioWhats).select('string:waent_6');
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.campoHsm).select('number:4');
        cy.wait(1000);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.criarAtivo).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.spanMensagemSucesso).should('have.text', 'Mensagem enviada com sucesso!');
    })

    it('Enviar um ativo com responsavel para Enterprise', () => {
        cy.get(elContato.ELEMENTS_CONTATO.campoBusca).type('14997142480');
        cy.get(elContato.ELEMENTS_CONTATO.botaoBuscar).click();
        cy.wait(1000);
        cy.get(elContato.ELEMENTS_CONTATO.botaoAcoes).click({ force: true });
        cy.get(elContato.ELEMENTS_CONTATO.botaoEnviar).click({ multiple: true });
        cy.wait(1000);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.canalEnvioWhats).select('string:waent_6');
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.responsavel).click({ force: true });
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.campoHsm).select('number:4');
        cy.wait(1000);
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.criarAtivo).click();
        cy.get(elAtivoHome.ELEMENTS_ATIVO_HOME.spanMensagemSucesso).should('have.text', 'Mensagem enviada com sucesso!');
    })
    after(() => {
        
    })

    
})