const express = require('express');
const app = express();
const User = require('./models/User');

app.use(express.json());

app.get('/', async (req, res) => {
    res.send("Home Page do Portal !!!!");
});


app.post('/cadastro', async (req, res) => {
    res.send("Portal Cadastro Geral !!!!");
});

app.post('/cadastro/aluno', async (req, res) => {
    await User.create(req.body) //CADASTRANDO USUARIO NO BD
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Seu usuário foi cadastrado com sucesso"
            })
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Usuário não foi cadastrado houve um erro"
            })
        });
});


app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});