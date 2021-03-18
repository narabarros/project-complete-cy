/// <reference types="cypress" />

import Login from '../../support/pages/login.js';
const elBaseUrl = require ('../../support/elements/urls_acessos.js');

describe('Acesso as dashboards', () => {

    beforeEach(() => {
        Login.loginGestor();
    })

    it('Acesso a dashboard monitoria de distribuicao', () => {
        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlDashMonitoria);
        cy.wait(2000);
        cy.url().should('contains', elBaseUrl.ELEMENTS_BASE_URL.baseUrlDashMonitoria);
    })

    it('Acesso a dashboard gestao de negocio', () => {
       cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlGestaoNegocio);
       cy.wait(2000);
       cy.url().should('contains', elBaseUrl.ELEMENTS_BASE_URL.baseUrlGestaoNegocio);
    })

    it('Acesso a dashboard gestao de equipe', () => {
        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlDashGestaoEquipe);
        cy.wait(2000);
        cy.url().should('contains', elBaseUrl.ELEMENTS_BASE_URL.baseUrlDashGestaoEquipe);
    })

    it('Acesso a dashboard Resumo operacional', () => {
        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlResumoOperacional);
        cy.wait(2000);
        cy.url().should('contains', elBaseUrl.ELEMENTS_BASE_URL.baseUrlResumoOperacional);
    })

    it('Acesso a dashboard Comunicacao Interna', () => { 
        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlComunicacaoInterna);
        cy.wait(2000);
        cy.url().should('contains', elBaseUrl.ELEMENTS_BASE_URL.baseUrlComunicacaoInterna);
    })

    it('Acesso a dashboard Hora a hora', () => {
        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlHoraaHora);
        cy.wait(2000);
        cy.url().should('contains', elBaseUrl.ELEMENTS_BASE_URL.baseUrlHoraaHora);
    })
    
})
