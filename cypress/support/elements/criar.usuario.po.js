/* Criar Usuário */
export const menuConfig = '.QT-link-menu-config';
export const submenuMinhaEmpresa = '[data-test="menu-a-config_company"]';
export const tabUsuarios = '[data-test="company-tab-users"]';
export const btnAddUsuario = '[data-test="company-tab-user-button-add_user"]';
export const usuarioNome = '[data-test="company-modal-user-input-name"]';
export const usuarioEmail = '[data-test="company-modal-user-input-email"]';
export const usuarioNomeExibicao = '[data-test="company-modal-user-input-display_name"]';
export const usuarioSenha = '[data-test="company-modal-user-input-password"]';
export const usuarioGeneroFeminino = '[data-test="company-modal-user-input-female"]';
export const usuarioGeneroMasculino = '[data-test="company-modal-user-input-male"]';
export const usuarioFuncaoGestor = '[data-test="company-modal-user-select-role"]';
export const usuarioFuncaoOperador = '[data-test="company-modal-user-select-role"]';
export const btnSalvarUsuario = '[data-test="company-modal-user-button-save"]';



//Dados do Usuário 
export const uuid = () => Cypress._.random(0, 1e6);
export const status = uuid();
export const statusNome = `Status_${status}`;

export default {
    menuConfig,
    submenuMinhaEmpresa,
    tabUsuarios,
    btnAddUsuario,
    usuarioNome,
    usuarioEmail,
    usuarioNomeExibicao,
    usuarioSenha,
    usuarioGeneroFeminino,
    usuarioGeneroMasculino,
    usuarioFuncaoGestor,
    usuarioFuncaoOperador,
    btnSalvarUsuario,
    uuid
    

}