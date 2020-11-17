require("cypress-xpath");
require("cypress-file-upload");
/// <reference types="cypress" />

import Login from '../../support/pages/login.js'
import Mailing from '../../support/pages/mailing.js'
import { emailGestor, senhaGestor } from '../../support/elements/login.js';
import {baseUrlCampanha } from '../../support/elements/urls_acessos.js';

describe('Envio de Campanha pelo sistema', () => {
   beforeEach(() => {
      Login.loginGestor(emailGestor,senhaGestor);
      Mailing.incluirMaling();
   })

   it.only('Enviar uma campanha pelo Whatsapp Web via Mailing', () => {
      //Acessando URL campanha
      cy.visit(baseUrlCampanha);
      //clica no btn criar campanha
      cy.get('.page-container > .row > :nth-child(1) > .btn').click();
      // Preencher titulo
      cy.get('#title').type('Campanha Release');
      // Seleciona a data posterior ao dia atual, para geração de data para campanha
      cy.get('.col-md-4 > .form-group > .form-control').click();
      var day = (new Date).getDay();
      var month = (new Date).getMonth();
      var year = (new Date).getMonth();
      var lastDayMonth = (new Date(year, month + 1, 0));
      var currentDate = (new Date(year, month, day));
      if (lastDayMonth === currentDate) {
         // muda mes
         cy.get('.adp-next').click();
      }
      var day = 1, hour = 24;
      var date = (new Date(Date.now() + day * hour * 60 * 60 * 1000)).toISOString().split('T')[0];
      cy.get(`[d2=${date}]`).click();
      //seleciona o canal whatsapp web
      cy.get(':nth-child(2) > :nth-child(2) > .form-group > .form-control').select('string:waweb');
      //clica no btn p inserir mailing
      cy.get('.col-sm-7 > .btn').click();
      //clica no mailing e seleciona
      cy.get('tbody > :nth-child(1) > :nth-child(3) > .btn').click();
      //clica no campo de texto
      cy.get('[ga-event="mktzap_bt_action_campaign_add_text"]').click();
      //clica no campo para preencher (quadrado)
      cy.wait(1000);
      cy.get('#whatsapp-message-0').type("teste_campanha_release");
      //clica no btn p salvar campanha
      cy.get(':nth-child(7) > .col-12 > .btn').click();
      cy.url().should('contains', baseUrlMaling);
   })
})