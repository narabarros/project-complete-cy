require("cypress-file-upload");
const elBase = require('../elements/urls_acessos.js')
const elMailing = require('../elements/mailing.js');

class Mailing{
  incluirMaling(){
    cy.visit(elBase.ELEMENTSBASEURL.baseUrlMaling);
    //clica incluir um mailing
    cy.get(elMailing.ELEMENTSMAILING.adicionarMailing).click();
    //preenche os dados para criar
    cy.get(elMailing.ELEMENTSMAILING.tituloMailing).type(elMailing.ELEMENTSMAILING.tituloMailingTexto);
    //realizando upload do arquivo para mailing
    cy.get(elMailing.ELEMENTSMAILING.fileInputElement).attachFile({ filePath: elMailing.ELEMENTSMAILING.arquivoMailing, encoding: 'utf8' });
    cy.get(elMailing.ELEMENTSMAILING.botaoSalvar).click();
    cy.url().should('contains', elBase.ELEMENTSBASEURL.baseUrlMaling);
  }
}

export default new Mailing();