/* Criar empresa */

export const btnCriarEmpresa = '[data-test="menu-user-bottom-a-create-company"]';
export const nomeEmpresa = '[data-test="company-modal-new_company-input-name"]';
export const dominioEmpresa = '[company-modal-new_company-input-domain]';
export const cnpjEmpresa = '[company-modal-new_company-input-domain]';
export const btnSalvarEmpresa = '[data-test="company-modal-new_company-button-create"]';
export const cancelarCriarEmpresa = '[data-test="company-modal-new_company-button-cancel"]';

//Dados da empresa
export const uuid = () => Cypress._.random(0, 1e6);
export const emp = uuid();
export const empresaNome = `Empresa_${emp}`;
export const dominioUrl = 'qa-poli.infranw.com.br';
export const cnpjValido = '82.521.922/0001-09';


export default {
    btnSalvarEmpresa,
    nomeEmpresa,
    dominioEmpresa,
    cnpjEmpresa,
    btnCriarEmpresa,
    cancelarCriarEmpresa,
    uuid,
    emp

}