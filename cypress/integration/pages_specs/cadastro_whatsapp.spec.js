/// <reference types="cypress" />

import { baseUrl, emailGestor, senhaGestor } from "../../support/elements/login_po";
import { iconePerfil, logout } from "../../support/elements/menu_profile_po";

describe('Acesso ao Mktzap', () => {

    beforeEach(() => {
        cy.visit(baseUrl);
        cy.loginGestor(emailGestor, senhaGestor);    
    })

    it ('Cadastro canal de entrada WhatsApp', () => {
        cy.cadastroWhatsapp();
        cy.logoutMktzap(iconePerfil, logout);
    
    })

});