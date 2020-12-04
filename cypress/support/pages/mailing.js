require("cypress-file-upload");
const elBase = require('../elements/urls_acessos.js')
const elMailing = require('../elements/mailing.js');

class Mailing{
  incluirMaling(){
    cy.visit(elBase.ELEMENTS_BASE_URL.baseUrlMaling);
    cy.get(elMailing.ELEMENTS_MAILING.adicionarMailing).click();
    cy.get(elMailing.ELEMENTS_MAILING.tituloMailing).type(elMailing.ELEMENTS_MAILING.tituloMailingTexto);
    cy.get(elMailing.ELEMENTS_MAILING.fileInputElement).attachFile({ filePath: elMailing.ELEMENTS_MAILING.arquivoMailing, encoding: 'utf8' });
    cy.get(elMailing.ELEMENTS_MAILING.botaoSalvar).click();
    cy.url().should('contains', elBase.ELEMENTS_BASE_URL.baseUrlMaling);
  }
}

export default new Mailing();