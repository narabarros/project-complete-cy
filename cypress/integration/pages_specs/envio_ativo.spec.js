/// <reference types="cypress" />

import { emailOperador, senhaOperador } from '../../support/elements/login_po.js';
import { baseUrl } from '../../support/elements/urls_acessos.js';

describe('Envio de Ativo pelo sistema como operador - Pela tela inicial', () => {

   beforeEach(() => {
      cy.visit(baseUrl);
      cy.loginOperador(emailOperador, senhaOperador);
   })

it('Enviar um ativo sem responsavel para Whatsapp Web', () => {
    //Clicar no botão data-test="attendances-button-send_active"
    cy.get('#dropdownMenuLink').click();
    //Clicar no botão data-test="attendances-button-send_whatsapp_active"
    cy.get('[ng-show="!vm.waitingActiveModal"]').click();
    //Validar abertura da Modal de ativo
    //Selecionar o canal
    cy.get('#activeChannel').select('string:waweb_30');
    //Preencher o numero
    cy.get('.col-9 > .form-control').type('14997142480');
    //Digitar mensagem
    cy.get('#activeMessage').type('Testes cypress');
    //Clicar em Criar
    cy.get('#formActiveWhatsapp > .modal-footer > .btn-secondary').click();    
    })

it ('Enviar um ativo com responsavel para Whatsapp Web', () => {
    //Clicar no botão data-test="attendances-button-send_active"
    cy.get('#dropdownMenuLink').click();
    //Clicar no botão data-test="attendances-button-send_whatsapp_active"
    cy.get('[ng-show="!vm.waitingActiveModal"]').click();
    //Validar abertura da Modal de ativo
    //cy.get('#formActiveWhatsapp > .modal-header > .text-center').should('have.value', 'Nova mensagem - Whatsapp')
    //Setar o responsavel do atendimento para pessoa que esta criando ativo
    cy.get('.custom-control').click();
    //Selecionar o canal
    cy.get('#activeChannel').select('string:waweb_30');
    //Preencher o numero
    cy.get('.col-9 > .form-control').type('14997142480');
    //Digitar mensagem
    cy.get('#activeMessage').type('Testes cypress');
    //Clicar em Criar
    cy.get('#formActiveWhatsapp > .modal-footer > .btn-secondary').click();
    //Adicionou o card  
})

it.only('Enviar um ativo sem responsavel pelo Enterprise', () => {
    //Clicar no botão data-test="attendances-button-send_active"
    cy.get('#dropdownMenuLink').click();
    //Clicar no botão data-test="attendances-button-send_whatsapp_active"
    cy.get('[ng-show="!vm.waitingActiveModal"]').click();
    //Selecionar o canal
    cy.get('#activeChannel').select('string:waent_6');
    //Preencher o numero
    cy.get('.col-9 > .form-control').type('14997142480');
    //Inserir um HSM para envio
    cy.get('#activeHsmModel').select('number:4');
    //Clicar em Criar
    cy.get('#formActiveWhatsapp > .modal-footer > .btn-secondary').click();
}) 
});