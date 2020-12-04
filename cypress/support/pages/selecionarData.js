/// <reference types="cypress" />
const elCampanha = require('../elements/campanha.js');

class SelecionarData{
    selecionarDataCampanha(){
        // Seleciona a data posterior ao dia atual, para geração de data para campanha
        cy.get(elCampanha.ELEMENTS_CAMPANHA.dataCampanha).click();
        var day = (new Date).getDay();
        var month = (new Date).getMonth();
        var year = (new Date).getMonth();
        var lastDayMonth = (new Date(year, month + 1, 0));
        var currentDate = (new Date(year, month, day));
        if (lastDayMonth === currentDate) {
            // muda mes
            cy.get(elCampanha.ELEMENTS_CAMPANHA.nextData).click();
        }
        var day = 1, hour = 24;
        var date = (new Date(Date.now() + day * hour * 60 * 60 * 1000)).toISOString().split('T')[0];
        cy.get(`[d2=${date}]`).click();
    }
    
}
export default new SelecionarData();