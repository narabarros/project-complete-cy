const elBase = require('../elements/urls_acessos.js')
const elLogout = require('../elements/logout.js');

class Logout{
    
    logout(){
        cy.get(elLogout.ELEMENTS_LOGOUT.iconePerfil).click({ force: true });
        cy.get(elLogout.ELEMENTS_LOGOUT.bntLogout).click({ force: true });
        cy.url().should('eq', elBase.ELEMENTS_BASE_URL.baseUrlLogout);
    }

}
 export default new Logout();