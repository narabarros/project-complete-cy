/// <reference types="cypress" />

import Login from '../../support/pages/login.js';
import Mailing from '../../support/pages/mailing.js';
import SelecionarData from '../../support/pages/selecionarData.js';
const el = require('../../support/elements/campanha.js');
const elbase = require('../../support/elements/urls_acessos.js');

describe('Envio de Campanha pelo sistema', () => {
   before(() => {
      Login.loginGestor();
      Mailing.incluirMaling();
   })

   it.only('Enviar uma campanha pelo Whatsapp Web via Mailing', () => {
      cy.visit(elbase.ELEMENTSBASEURL.baseUrlCampanha);
      cy.get(el.ELEMENTSCAMPANHA.adicionarCampanha).click();
      cy.get(el.ELEMENTSCAMPANHA.tituloCampanha).type(el.ELEMENTSCAMPANHA.tituloCampanhaTexto);
      //SelecionarData.selecionarDataCampanha();
      cy.get(el.ELEMENTSCAMPANHA.canalEnvio).select('string:waweb');
      cy.get(el.ELEMENTSCAMPANHA.incluirMailing).click();
      cy.get(el.ELEMENTSCAMPANHA.setarMailing).click();
      cy.get(el.ELEMENTSCAMPANHA.abrirCampoMensagem).click();
      cy.wait(1000);
      cy.get(el.ELEMENTSCAMPANHA.campoMensagem).type(el.ELEMENTSCAMPANHA.textoMensagem);
      cy.get(el.ELEMENTSCAMPANHA.salvarCampanha).click();
      cy.url().should('contains', elbase.ELEMENTSBASEURL.baseUrlCampanha);
   })
})