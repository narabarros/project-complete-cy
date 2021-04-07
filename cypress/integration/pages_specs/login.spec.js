/// <reference types="cypress" />

import Login from '../../support/pages/login.js';
import Logout from '../../support/pages/logout.js';
const elBase = require('../../support/elements/urls_acessos.js');
const elLogin = require('../../support/elements/login.js')

describe('Acesso ao Mktzap', () => {

    it('Login e Logout como Gestor', () => {
        Login.loginGestor();
        Logout.logout();               
    })

    it('Login e Logout como Operador', () => {
        Login.loginOperador(); 
        Logout.logout();       
    })

    it.only('Login e Logout como Lord', () => {
        Login.loginLord();
        Logout.logout();
    })

});