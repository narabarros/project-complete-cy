/// <reference types="cypress" />

import { emailGestor, senhaGestor } from '../../support/elements/login_po.js';
import { baseUrl, baseUrlMaling } from '../../support/elements/urls_acessos.js';

describe('Envio de Ativo pelo sistema', () => {

   beforeEach(() => {
      cy.visit(baseUrl);
      cy.loginGestor(emailGestor, senhaGestor);
      cy.visit(baseUrlMaling);
      //clica incluir um mailing
      cy.get('#link_add_new_mailing').click();
      //preenche os dados para criar
      cy.get('[id="title"]').type('testeRelease');
      cy.get('#upload');
   })

    it.only ('Enviar uma campanha pelo Whatsapp Web via Mailing', () => {
    //Clicar no botão data-test="attendances-button-send_active" - precisa trocar pra campanha
    cy.get('.QT-link-menu-config').click();
    //clica no menu drop config
    cy.get('[data-test="menu-a-config_campaign_list"]').click();
    //clica no btn gestao de campanha
    cy.get('[class="btn btn-primary"]').click();
    //clica no btn criar campanha
    cy.get('["class="form-control ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched"]');
    //- precisa inserir a busca aqui p selecionar o calendario c a data ---- incompleto
    cy.get('["value="string:waweb"]').select('string:waweb');
    //seleciona o canal whatsapp web
    cy.get('["mktzap_bt_action_campaign_modal_select_mailing"]').click();
    //clica no btn p inserir mailing
    
   })
})