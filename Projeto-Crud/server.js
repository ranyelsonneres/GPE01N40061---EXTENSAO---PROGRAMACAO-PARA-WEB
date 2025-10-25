//arquivo principal (entry point)
const express = require('express');
const app = express();
const port = 3000;
const path = require('path') //puxar o caminho dos arquivos estátivos

//informar o lugar dos arquivos estáticos
app.use(express.static('public'));

//criar a conexão com o banco de dados
const db = require('./db');

//rotas do sistema
app.get('/', (req, res) =>{
    //res.send("Funcionando");
    res.sendFile(path.join(__dirname, 'public', 'index.html')); //disponibilizar a página do front
});

//chamar o arquivo de API (rotas)
const apiRoutes = require('./routes/api');

//tratar as requisições do front (JSON)
app.use(express.json()); //middlewares - função que recebe outra função


//endpoint para apontar para rotas (api.js);
// /api/users/
app.use('/api/users/', apiRoutes);

//vincular o servidor a porta
app.listen(port, () =>{
    console.log("Servidor funcionando!!");
});
