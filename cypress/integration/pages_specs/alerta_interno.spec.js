/// <reference types="cypress" />

import Login from '../../support/pages/login.js';
const elBaseUrl = require ('../../support/elements/urls_acessos.js');
const elAlertaInterno = require ('../../support/elements/alertainterno.js');

describe('Envio de alerta interno', () => {

    beforeEach(() => {
        Login.loginGestor();
    })

    it('Criacao e envio de alerta interno', () => {

        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlAlertaInterno);
        cy.get(elAlertaInterno.ELEMENTS_ALERTAINTERNO.radioInicial).click();
        cy.get(elAlertaInterno.ELEMENTS_ALERTAINTERNO.cxTexto).type('Teste');
        cy.get(elAlertaInterno.ELEMENTS_ALERTAINTERNO.btnEnviar).click();

    })
})
