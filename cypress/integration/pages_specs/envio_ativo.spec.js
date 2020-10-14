/// <reference types="cypress" />

import { baseUrl, emailOperador, senhaOperador } from '../../support/elements/login_po.js';


describe('Envio de Ativo pelo sistema', () => {

   beforeEach(() => {
      cy.visit(baseUrl);
      cy.loginOperador(emailOperador, senhaOperador);
   })

it.only ('Enviar um ativo sem responsavel para Whatsapp Web', () => {
    //Clicar no botão data-test="attendances-button-send_active"
    cy.get('#dropdownMenuLink').click();
    //Clicar no botão data-test="attendances-button-send_whatsapp_active"
    cy.get('[ng-show="!vm.waitingActiveModal"]').click();
    //Validar abertura da Modal de ativo
    //cy.should('#formActiveWhatsapp > .modal-header > .text-center');
    //Selecionar o canal
    cy.get('#activeChannel').select('string:waweb_30');
    //Preencher o numero
    cy.get('.col-9 > .form-control').type('14997142480');
    //Digitar mensagem
    cy.get('#activeMessage').type('Testes cypress');
    //Clicar em Criar
    cy.get('#formActiveWhatsapp > .modal-footer > .btn-secondary').click();
    //Adicionou o card 
    //cy.contains('class="mkz-toast-title mkz-toast-success"').should('be.visible');
    //should('Mensagem enviada com sucesso!');
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