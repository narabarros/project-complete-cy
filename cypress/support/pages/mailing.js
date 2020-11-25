require("cypress-file-upload");
const elBase = require('../elements/urls_acessos.js')
const elMailing = require('../elements/mailing.js');

class Mailing{
  incluirMaling(){
    cy.visit(elBase.ELEMENTS_BASE_URL.baseUrlMaling);
    //clica incluir um mailing
    cy.get(elMailing.ELEMENTS_MAILING.adicionarMailing).click();
    //preenche os dados para criar
    cy.get(elMailing.ELEMENTS_MAILING.tituloMailing).type(elMailing.ELEMENTS_MAILING.tituloMailingTexto);
    //realizando upload do arquivo para mailing
    cy.get(elMailing.ELEMENTS_MAILING.fileInputElement).attachFile({ filePath: elMailing.ELEMENTS_MAILING.arquivoMailing, encoding: 'utf8' });
    cy.get(elMailing.ELEMENTS_MAILING.botaoSalvar).click();
    cy.url().should('contains', elBase.ELEMENTS_BASE_URL.baseUrlMaling);
  }
}

export default new Mailing();