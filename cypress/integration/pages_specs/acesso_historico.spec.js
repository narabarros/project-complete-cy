/// <reference types="cypress" />

import Login from '../../support/pages/login.js';
const elBaseUrl = require ('../../support/elements/urls_acessos.js');
const elHistorico = require ('../../support/elements/historico.js');

describe('Acesso ao historico', () => {

})
    beforeEach(() => {
        Login.loginGestor();
})

    it('Pesquisa no historico', () => {

        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlHistorico);
        cy.get(elHistorico.ELEMENTS_HISTORICO.cxCampoTelefone).type('(14) 99704-5503');
        cy.get(elHistorico.ELEMENTS_HISTORICO.btnFiltrarHistorico).click();


})