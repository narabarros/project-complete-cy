require("cypress-xpath");
/// <reference types="cypress" />
import { emailGestor, senhaGestor } from '../../support/elements/login_po.js';
import { baseUrl, baseUrlMaling, baseUrlCampanha } from '../../support/elements/urls_acessos.js';

describe('Envio de Campanha pelo sistema', () => {

   beforeEach(() => {
      cy.visit(baseUrl);
      cy.loginGestor(emailGestor, senhaGestor);
      //cy.visit(baseUrlMaling);
      //clica incluir um mailing
      //cy.get('#link_add_new_mailing').click();
      //preenche os dados para criar
      //cy.get('[id="title"]').type('testeRelease');
      //cy.get('#upload');
   })

    it.only ('Enviar uma campanha pelo Whatsapp Web via Mailing', () => {
    //Acessando URL campanha
    cy.visit(baseUrlCampanha);
    //clica no btn criar campanha
    cy.get('[class="btn btn-primary"]').click();
    //clica no btn criar campanha
    cy.xpath('/html/body/div[1]/section[1]/div[1]/form/div[1]/div[3]div/input').click();
    //inspeciona calendario
    cy.xpath('/html/body/div[7]/div[2]').each(($i,index,$list)=>{
        var Date = $i.text()
        if (Date == "15") {
            cy.wrap($i).click()
        }
        //seleciona data de calendario (percorre todas as datas e seleciona a atual)
    })

    cy.get('["value="string:waweb"]').select('string:waweb');
    //seleciona o canal whatsapp web
    cy.get('["mktzap_bt_action_campaign_modal_select_mailing"]').click();
    //clica no btn p inserir mailing
    cy.get('["mktzap_bt_action_campaign_select_mailing"]').click();
    //clica no mailing e seleciona
    cy.get('["mktzap_bt_action_campaign_add_text"]').click();
    //clica no campo de texto
    cy.get('["whatsapp-message-0"]').type("teste_campanha_release");
    //clica no campo para preencher (quadrado)
    cy.get('["mktzap_bt_action_campaign_save"]').click();
    //clica no btn p salvar campanha
   })

   //envio por base de contatos

   cy.get('')
})