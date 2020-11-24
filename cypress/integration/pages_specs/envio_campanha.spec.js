/// <reference types="cypress" />

import Login from '../../support/pages/login.js';
import Mailing from '../../support/pages/mailing.js';
import SelecionarData from '../../support/pages/selecionarData.js';
const elCampanha = require('../../support/elements/campanha.js');
const elBase = require('../../support/elements/urls_acessos.js');

describe('Envio de Campanha pelo sistema', () => {
   before(
      () => {
         Login.loginGestor();
         Mailing.incluirMaling();
      }
   )

   it.only('Enviar uma campanha pelo Whatsapp Web via Mailing', () => {
      cy.visit(elBase.ELEMENTS_BASE_URL.baseUrlCampanha);
      cy.get(elCampanha.ELEMENTS_CAMPANHA.adicionarCampanha).click();
      cy.get(elCampanha.ELEMENTS_CAMPANHA.tituloCampanha).type(elCampanha.ELEMENTS_CAMPANHA.tituloCampanhaTexto);
      SelecionarData.selecionarDataCampanha();
      cy.get(elCampanha.ELEMENTS_CAMPANHA.canalEnvio).select('string:waweb');
      cy.get(elCampanha.ELEMENTS_CAMPANHA.incluirMailing).click();
      cy.get(elCampanha.ELEMENTS_CAMPANHA.setarMailing).click();
      cy.get(elCampanha.ELEMENTS_CAMPANHA.abrirCampoMensagem).click();
      cy.wait(1000);
      cy.get(elCampanha.ELEMENTS_CAMPANHA.campoMensagem).type(elCampanha.ELEMENTS_CAMPANHA.textoMensagem);
      cy.get(elCampanha.ELEMENTS_CAMPANHA.salvarCampanha).click();
      cy.url().should('contains', elBase.ELEMENTS_BASE_URL.baseUrlCampanha);
   })
})