/// <reference types="cypress" />
import { baseUrl } from '../../support/elements/urls_acessos.js';


describe('Envio de Ativo pelo sistema como operador - Pela tela inicial', () => {

   beforeEach(() => {

    cy.visit(baseUrl);
    cy.loginOperador();
   })
    it('Extrair os relatorios do MktZap', () => {

        cy.get('"data-test="menu-a-report"').click();
        //clica no btn "relatorios"
        
        //-->extracao do relatorio analitico
        cy.get("data-test=menu-a-report_bi_complete").click();
        //clica no btn "relatorio completo novo"
        //alinhar o que seria inserido aqui
        cy.get("data-test=menu-a-report_analytic").click();
        //clica no bnt "relatorio analitico"
        cy.get("vm.utils.checkPeriodReports(90, 'analytic', vm ,vm.download)").click();
        //faz o download do relatorio analitico
        
        //--> extracao do relatorio de efetividade
        cy.get('data-test="menu-a-report_effectiviness"').click();
        //clique no menu - efetividade (aqui ja mostra o periodo atual exibido em tela)
        cy.get('ng-click="vm.downloadCsv()"').click();
        //clica no btn de baixar o csv
        cy.get('data-test="menu-a-report_productivity"').click();
        
        //-->extracao do relatorio de produtividade
        cy.get('ng-model="vm.filters.type"').select(aqui precisa inserir a insp do campo de selecao)
        //clica no tipo para selecionar a opcao
        cy.get('')

        //extracao do relatorio de enquetes
        cy.get('data-test="menu-a-report_polls"')
        //clica no btn de abrir o relatorio de enquetes
        cy.get('ng-model="vm.poll"').select()




