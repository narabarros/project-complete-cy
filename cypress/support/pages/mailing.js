require("cypress-file-upload");
const elbase = require('../elements/urls_acessos.js')
const el = require('../elements/mailing.js');

class Mailing{
  incluirMaling(){
    cy.visit(elbase.ELEMENTSBASEURL.baseUrlMaling);
    //clica incluir um mailing
    cy.get(el.ELEMENTSMAILING.adicionarMailing).click();
    //preenche os dados para criar
    cy.get(el.ELEMENTSMAILING.tituloMailing).type(el.ELEMENTSMAILING.tituloMailingTexto);
    //realizando upload do arquivo para mailing
    cy.get(el.ELEMENTSMAILING.fileInputElement).attachFile({ filePath: el.ELEMENTSMAILING.arquivoMailing, encoding: 'utf8' });
    cy.get(el.ELEMENTSMAILING.botaoSalvar).click();
    cy.url().should('contains', elbase.ELEMENTSBASEURL.baseUrlMaling);
  }
}

export default new Mailing();