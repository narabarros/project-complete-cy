/* Criar Status */

export const menuRegraNegocio = '.QT-link-menu-rules';
export const submenuStatusAtendimento = '[data-test="menu-a-rules_status"]';
export const btnNovoStatus = '[data-test="status-button-create"]';
export const statusNome = '[data-test="status-modal-create-text-name"]';
export const statusTipoClassifica = '[data-test="status-modal-create-radio-type-classification"]';
export const statusTipoFinaliza = '[data-test="status-modal-create-radio-type-finalization"]';
export const statusNeutro = '[data-test="status-modal-create-radio-classification-neutral"]';
export const statusNaoObrigatorio = '[data-test="status-modal-create-radio-no"]';
export const btnCriarStatus = '[data-test="status-modal-create-button-criar"]';

//Dados do Status 
export const uuid = () => Cypress._.random(0, 1e4);
export const novoStatus = uuid();
export const statusNome = `Status_${novoStatus}`;

export default {
    menuRegraNegocio,
    submenuStatusAtendimento,
    btnNovoStatus,
    statusNome,
    statusTipoClassifica,
    statusTipoFinaliza,
    statusNeutro,
    statusNaoObrigatorio,
    btnCriarStatus,
    uuid,
    novoStatus

}