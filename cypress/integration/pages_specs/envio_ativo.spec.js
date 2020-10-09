/// <reference types="cypress" />

import { baseUrl, baseUrlLogado, baseUrlLord, emailLord, senhaLord } from '../../support/elements/login_po.js';


describe('Envio de Ativo pelo sistema', () => {

   beforeEach(() => {
      cy.visit(baseUrlLord);
      cy.loginLord(emailLord, senhaLord);
   })

it.only ('Enviar um ativo sem responsavel para Whatsapp Web', () => {
    //Clicar no botão data-test="attendances-button-send_active"
    cy.get('#dropdownMenuLink').click();
    //Clicar no botão data-test="attendances-button-send_whatsapp_active"
    cy.get('.text-right > .dropdown > .dropdown-menu > .dropdown-item').click();
    //Validar abertura da Modal de ativo
    cy.should('#formActiveWhatsapp > .modal-header > .text-center');
    //Selecionar o canal
    cy.get('#activeChannel');
    //Preencher o numero
    //Digitar mensagem
    //Clicar em Criar
    //Adicionou o card  
    })

it ('Enviar um ativo com responsavel para Whatsapp Web', () => {
    //Clicar no botão data-test="attendances-button-send_active"
    //Clicar no botão data-test="attendances-button-send_whatsapp_active"
    //Validar abertura da Modal de ativo
    //Setar o responsavel do atendimento para pessoa que esta criando ativo
    //Selecionar o canal
    //Preencher o numero
    //Digitar mensagem
    //Clicar em Criar
    //Adicionou o card  
})

});