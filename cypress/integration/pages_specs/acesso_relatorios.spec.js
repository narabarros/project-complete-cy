///// <reference types= "cypress" />

import Login from '../../support/pages/login.js'
const elRelatorio = require ('../../support/elements/relatorios.js')
const elBaseUrl = require ('../../support/elements/urls_acessos.js')


describe('Envio de Ativo pelo sistema como operador - Pela tela inicial', () => {

   beforeEach(() => {

    Login.loginGestor();
   })

    it('Extrair o relatorio analitico do MktZap', () => {

        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlRelatorioAnalitico);
        cy.get('"data-test="menu-a-report"').click();
        cy.get("data-test=menu-a-report_bi_complete").click();
        cy.get("data-test=menu-a-report_analytic").click();
        cy.get("vm.utils.checkPeriodReports(90, 'analytic', vm ,vm.download)").click();
    })

    it('Extrair o relatorio efetividade do MktZap', () => {
        
        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlRelatorioEfetividade);
        cy.get('data-test="menu-a-report_effectiviness"').click();
        cy.get('ng-click="vm.downloadCsv()"').click();
    })

    it('Extrair o relatorio enquete do MktZap', () => {

        cy.visit(elBaseUrl.ELEMENTS_BASE_URL.baseUrlRelatorioEnquete);
        cy.get('ng-model="vm.filters.type"').select('18');
        cy.get('data-test="menu-a-report_polls"');
        cy.get('ng-model="vm.poll"').select();
    

    })



})
