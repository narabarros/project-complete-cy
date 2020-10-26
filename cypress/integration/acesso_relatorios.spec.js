/// <reference types="cypress" />

import { baseUrl, emailGestor, senhaGestor } from '../../support/elements/login_po.js';


describe('Extracao de relatorios', () => {

   beforeEach(() => {
      cy.visit(baseUrl);
      cy.loginGestor(emailGestor, senhaGestor);
   })