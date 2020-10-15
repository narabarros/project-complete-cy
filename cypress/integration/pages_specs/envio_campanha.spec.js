/// <reference types="cypress" />

import { baseUrl, emailGestor, senhaGestor } from '../../support/elements/login_po.js';


describe('Envio de Ativo pelo sistema', () => {

   beforeEach(() => {
      cy.visit(baseUrl);
      cy.loginGestor(emailGestor, senhaGestor);
      //precisa trocar pra gestor

      //criacao de Mailing aqui:
      cy.get('[data-test="menu-a-nostatus"]').click();
      //clica no menu drop config
      cy.get('[data-test="menu-a-config_mailing_settings"]').click();
      //clica no btn mailing
      cy.get('[class="btn btn-primary"]').click();
      //clica no btn add novo mailing
      cy.get('[id="title"]').type('testeRelease');
      //clica no label txt e escreve o titulo
      cy.get('id="upload"').click();

      //localizar uma alternativa para importar um doc local e inserir na aplicacao

   })

    it.only ('Enviar uma campanha pelo Whatsapp Web via Mailing', () => {
    //Clicar no botão data-test="attendances-button-send_active" - precisa trocar pra campanha
    cy.get('[data-test="menu-a-nostatus"]').click();
    //clica no menu drop config
    cy.get('[data-test="menu-a-config_campaign_list"]').click();
    //clica no btn gestao de campanha
    cy.get('[class="btn btn-primary"]').click();
    //clica no btn criar campanha
    cy.get('["class="form-control ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"]');
    //- precisa inserir a busca aqui

   })
})