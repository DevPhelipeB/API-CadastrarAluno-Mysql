const  Sequelize  = require('sequelize');

const sequelize = new Sequelize("usuarios", "root", "admin", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(function(){
        console.log("Ação realizada com sucesso");
    }).catch(function(){
        console.log("Erro: Entre em contato com suporte");
});


module.exports = sequelize;