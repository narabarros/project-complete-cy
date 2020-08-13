
import { btnSalvarEmpresa, nomeEmpresa, dominioEmpresa, cnpjEmpresa, btnCriarEmpresa } from './elements/cadastro_empresa.po.js';

//Função do Login do gestor-- This add login function
Cypress.Commands.add("criarEmpresa", (empresaNome, dominioUrl, cnpjValido) => { 
    
    cy.get(btnCriarEmpresa)
      .click();

    cy.get(nomeEmpresa)
      .type(empresaNome);   
      
    cy.get(dominioEmpresa)
      .type(dominioUrl);

    cy.get(cnpjEmpresa)
      .type(cnpjValido);  

    cy.get(btnSalvarEmpresa)
      .click();

    cy.wait(2000);
  
}) //add login
