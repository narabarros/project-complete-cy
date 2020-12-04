///// <reference types= "cypress" />

const elRelatorio = require ('../../support/elements/relatorios.js')


describe('Envio de Ativo pelo sistema como operador - Pela tela inicial', () => {

   beforeEach(() => {

    Login.loginGestor();
   })

    it('Extrair o relatorio analitico do MktZap', () => {

        cy.url('https://qa-poli.infranw.com.br/reports/analytic');
        cy.get('"data-test="menu-a-report"').click();
        cy.get("data-test=menu-a-report_bi_complete").click();
        cy.get("data-test=menu-a-report_analytic").click();
        cy.get("vm.utils.checkPeriodReports(90, 'analytic', vm ,vm.download)").click();
    })

    it('Extrair o relatorio efetividade do MktZap', () => {
        
        cy.url('')
        cy.get('data-test="menu-a-report_effectiviness"').click();
        cy.get('ng-click="vm.downloadCsv()"').click();
        cy.get('data-test="menu-a-report_productivity"').click();
    })

    it('Extrair o relatorio efetividade do MktZap', () => {

        cy.get('ng-model="vm.filters.type"').select('aqui precisa inserir a insp do campo de selecao')
        //clica no tipo para selecionar a opcao
        cy.get('')
        //extracao do relatorio de enquetes
        cy.get('data-test="menu-a-report_polls"')
        //clica no btn de abrir o relatorio de enquetes
        cy.get('ng-model="vm.poll"').select()
    

    })



})
