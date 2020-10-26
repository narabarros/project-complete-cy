import { iconePerfil, logout } from "./elements/menu_profile_po";

Cypress.Commands.add("logoutMktzap", () => {

  cy.get(iconePerfil).click();

  cy.get(logout).click();

})

