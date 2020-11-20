import {baseUrlMaling } from '../../support/elements/urls_acessos.js';
const el = require('../elements/mailing.js');

class Mailing{
  incluirMaling(){
    cy.visit(baseUrlMaling);
    //clica incluir um mailing
    cy.get(el.ELEMENTSMAILING.adicionarMailing).click();
    //preenche os dados para criar
    cy.get(el.ELEMENTSMAILING.tituloCampanha).type(el.ELEMENTSMAILING.tituloCampanhaTexto);
    //realizando upload do arquivo para mailing
    cy.get(el.ELEMENTSMAILING.fileInputElement).attachFile({ filePath: el.ELEMENTSMAILING.arquivoMailing, encoding: 'utf8' });
    cy.get(el.ELEMENTSMAILING.botaoSalvar).click();
    cy.url().should('contains', baseUrlMaling);
  }
}

export default new Mailing();