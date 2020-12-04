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

   it('Enviar uma campanha pelo Whatsapp Web via Mailing', () => {
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

   it('Enviar uma campanha pelo Whatsapp Web com Base de Contatos', () => {
      cy.visit(elBase.ELEMENTS_BASE_URL.baseUrlCampanha);
      cy.get(elCampanha.ELEMENTS_CAMPANHA.adicionarCampanha).click();
      cy.get(elCampanha.ELEMENTS_CAMPANHA.tituloCampanha).type(elCampanha.ELEMENTS_CAMPANHA.tituloCampanhaTexto);
      SelecionarData.selecionarDataCampanha();
      cy.get(elCampanha.ELEMENTS_CAMPANHA.canalEnvio).select('string:waweb');
      cy.wait(1000)
      cy.get(elCampanha.ELEMENTS_CAMPANHA.setarBaseContato).click({ force: true });
      cy.get(elCampanha.ELEMENTS_CAMPANHA.abrirCampoMensagem).click();
      cy.wait(1000);
      cy.get(elCampanha.ELEMENTS_CAMPANHA.campoMensagem).type(elCampanha.ELEMENTS_CAMPANHA.textoMensagem);
      cy.get(elCampanha.ELEMENTS_CAMPANHA.salvarCampanha).click();
      cy.url().should('contains', elBase.ELEMENTS_BASE_URL.baseUrlCampanha);
   })

   it('Enviar uma campanha pelo Whatsapp Enterprise', () => {
      cy.visit(elBase.ELEMENTS_BASE_URL.baseUrlCampanha);
      cy.get(elCampanha.ELEMENTS_CAMPANHA.adicionarCampanha).click();
      cy.get(elCampanha.ELEMENTS_CAMPANHA.tituloCampanha).type(elCampanha.ELEMENTS_CAMPANHA.tituloCampanhaTexto);
      SelecionarData.selecionarDataCampanha();
      cy.get(elCampanha.ELEMENTS_CAMPANHA.canalEnvio).select('string:waent');
      cy.wait(1000);
      cy.get(elCampanha.ELEMENTS_CAMPANHA.canalEnterprise).select('string:waent_6').trigger('change');
      cy.get(elCampanha.ELEMENTS_CAMPANHA.incluirMailing).click();
      cy.get(elCampanha.ELEMENTS_CAMPANHA.setarMailing).click();
      cy.get(elCampanha.ELEMENTS_CAMPANHA.setarHsm).select('object:330').trigger('change');
      cy.get(elCampanha.ELEMENTS_CAMPANHA.salvarCampanha).click();
      cy.url().should('contains', elBase.ELEMENTS_BASE_URL.baseUrlCampanha);
   })

   it('Enviar uma campanha pelo SMS', () => {
      cy.visit(elBase.ELEMENTS_BASE_URL.baseUrlCampanha);
      cy.get(elCampanha.ELEMENTS_CAMPANHA.adicionarCampanha).click();
      cy.get(elCampanha.ELEMENTS_CAMPANHA.tituloCampanha).type(elCampanha.ELEMENTS_CAMPANHA.tituloCampanhaTexto);
      SelecionarData.selecionarDataCampanha();
      cy.get(elCampanha.ELEMENTS_CAMPANHA.canalEnvio).select('string:sms');
      cy.wait(1000);
      cy.get(elCampanha.ELEMENTS_CAMPANHA.brokerSms).select('object:389', { force: true }).trigger('change');
      cy.get(elCampanha.ELEMENTS_CAMPANHA.incluirMailing).click();
      cy.get(elCampanha.ELEMENTS_CAMPANHA.setarMailing).click();
      cy.get(elCampanha.ELEMENTS_CAMPANHA.abrirCampoMensagem).click();
      cy.wait(1000);
      cy.get(elCampanha.ELEMENTS_CAMPANHA.campoMensagemSms).type(elCampanha.ELEMENTS_CAMPANHA.textoMensagem);
      cy.get(elCampanha.ELEMENTS_CAMPANHA.salvarCampanha).click();
      cy.url().should('contains', elBase.ELEMENTS_BASE_URL.baseUrlCampanha);
   })
})