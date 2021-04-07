/// <reference types="cypress" />
const elSms = require('../elements/canaisDeEntrada/sms.js');

class excluirCanal {

    excluirTodosCanais(elementBtnExcluir, fnExcluir) {

        cy.get('tbody > tr').then((list) => {
            for (var i = list.length - 1; i >= 0 ; i--) {
                const btnExcluir = elementBtnExcluir;
                fnExcluir(btnExcluir);
            }
        })
    }

    excluirTodosCanaisSms() {
        this.excluirTodosCanais(elSms.ELEMENTS_SMS.btnExcluir, this.excluirSms);
    }

    excluirSms(btnExcluir) {
        cy.get(btnExcluir).click();
        cy.get(elSms.ELEMENTS_SMS.modalExclusao).should('have.attr', 'aria-modal');
        cy.get(elSms.ELEMENTS_SMS.btnConfirmarExclusao).click();
        cy.get(elSms.ELEMENTS_SMS.spanMensagem).should('have.text', 'O Canal foi apagado com sucesso!');
        cy.get(elSms.ELEMENTS_SMS.modalExclusao).should('have.attr', 'aria-hidden');
    }

}

export default new excluirCanal();