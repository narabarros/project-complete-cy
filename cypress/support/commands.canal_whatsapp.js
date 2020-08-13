import { MenuCanais, submenuCanalWhatsapp, btnNovoWhats, numeroCadastro, nomeCanal, nomeExibicao, nomeStatus, numeroChip, selectSetor, btnsalvarCadastroWhats } from "./elements/cadastro_whatsapp.po";
import { data } from "./data/whatsapp"

Cypress.Commands.add("cadastroWhatsapp", () => { 
    
    cy.get(MenuCanais)
      .click();
    
    cy.get(submenuCanalWhatsapp)
      .click();

    cy.get(btnNovoWhats)
      .click();

    cy.get(numeroCadastro)
      .type(data.numeroTelefone);   
    
    cy.get(nomeCanal)
      .type(data.nomeCanalWhats);

    cy.get(nomeExibicao)
      .type(data.exibicao);

    cy.get(nomeStatus)
      .type(data.status);

    cy.get(numeroChip)
      .type(data.chip);

    cy.get(selectSetor)
      .select('1').should('have.value', '1');

    cy.get(btnsalvarCadastroWhats)
      .click(); 

    cy.wait(2000);

     
}) //add login
