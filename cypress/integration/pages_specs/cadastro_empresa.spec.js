/// <reference types="cypress" />

import { baseUrlLogout, emailLord, senhaLord, baseUrlLord } from '../../support/elements/login_po.js';
import { iconePerfil, logout } from '../../support/elements/menu_profile_po.js';
import { btnCriarEmpresa, empresaNome, dominioUrl, cnpjEmpresa, btnSalvarEmpresa } from '../../support/elements/cadastro_empresa.po.js';

describe('Acesso ao Mktzap', () => {

    beforeEach(() => {
        cy.visit(baseUrlLord);
        cy.loginLord(emailLord,senhaLord);    
        
    })

    it ('Criar empresa', () => {
       
        cy.get(iconePerfil).click();
        cy.criarEmpresa(btnCriarEmpresa).click();
        cy.criarEmpresa(empresaNome, dominioUrl, cnpjEmpresa);
        cy.criarEmpresa(btnSalvarEmpresa).click();      
        cy.get(logout).click();
        cy.url().should('eq', baseUrlLogout);
    })

});