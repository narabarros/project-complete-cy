/// <reference types="cypress" />

import Login from '../../support/pages/login.js';
const elContato = require('../../support/elements/contato.js');

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
        
    })
})