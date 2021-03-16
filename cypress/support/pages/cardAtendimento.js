/// <reference types="cypress" />
const elAtivo = require('../elements/ativo.js');
const elCardAtendimento = require('../elements/cardAtendimento.js')

class cardAtendimento {
    finalizacaoCardStatus() {
        cy.wait(2000);
        cy.get(elCardAtendimento.ELEMENTS_CARD_ATENDIMENTO.setorCard).click();
        cy.wait(2000);
        cy.get(elCardAtendimento.ELEMENTS_CARD_ATENDIMENTO.encontraCard).then(($btn) => {
            const a = $btn.attr('data-test');
            var contact_id = a.slice(17);
            cy.get(`[data-test="attendances-card-${contact_id}"]`).click({ force: true });
        })
        cy.wait(2000);
        cy.get(elCardAtendimento.ELEMENTS_CARD_ATENDIMENTO.botaoFinalizar)
            .select(elCardAtendimento.ELEMENTS_CARD_ATENDIMENTO.statusFinalizacao);
        cy.get(elAtivo.ELEMENTS_ATIVO.spanMensagemSucesso).should('have.text', 'Status alterado com sucesso!');
    }

}

export default new cardAtendimento();