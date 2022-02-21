const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('users', {
    id_aluno: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    apelido: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

User.sync();
User.sync({ alter: true})
module.exports = User;