export const ELEMENTS_CAMPANHA = {
    adicionarCampanha: '.page-container > .row > :nth-child(1) > .btn',
    tituloCampanha: '#title',
    tituloCampanhaTexto: 'Campanha Release',
    dataCampanha: '.col-md-4 > .form-group > .form-control',
    canalEnvio: ':nth-child(2) > :nth-child(2) > .form-group > .form-control',
    canalEnterprise: '[ng-model="vmCampaignFormCtrl.campaign.whatsapp.prefix_channel_id"]',
    brokerSms: '[ng-model="vmCampaignFormCtrl.campaign.sms.broker"]',
    setarBaseContato: '[for="to-all-subscribers"]',
    nextData: '.adp-next',
    incluirMailing: '.col-sm-7 > .btn',
    setarMailing: 'tbody > :nth-child(1) > :nth-child(3) > .btn',
    abrirCampoMensagem: '[ga-event="mktzap_bt_action_campaign_add_text"]',
    campoMensagem: '#whatsapp-message-0',
    campoMensagemSms: '#sms-message',
    textoMensagem: "teste_campanha_release",
    setarHsm: '[ng-model="vmCampaignFormCtrl.campaign.whatsapp.hsm_template"]',
    salvarCampanha: '[ga-event="mktzap_bt_action_campaign_save"]'
}
