const Chance = require('chance');
var chance = new Chance();

var telefone = chance.phone({ country:"us"});

const data = {
    numeroTelefone: telefone,
    nomeCanalWhats: chance.name() + ' Canal whats',
    exibicao: 'WhatsApp cadastro',
    status: 'Online',
    chip: telefone
    

};

export default { data };
