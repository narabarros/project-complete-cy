import {baseUrlMaling } from '../../support/elements/urls_acessos.js';

class Mailing{
    incluirMaling(){
      cy.visit(baseUrlMaling);
      //clica incluir um mailing
      cy.get('#link_add_new_mailing').click();
      //preenche os dados para criar
      cy.get('[id="title"]').type('testeRelease');
      //realizando upload do arquivo para mailing
      const arquivoMailing = 'mailing.csv';
      const fileInputElement = '#upload';
      cy.get(fileInputElement).attachFile({ filePath: arquivoMailing, encoding: 'utf8' });
      cy.get('.col > .btn').click();
      cy.url().should('contains', baseUrlMaling);
    }
}

export default new Mailing();