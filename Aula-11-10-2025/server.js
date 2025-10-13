const express = require('express'); //chamar o módulo Express (framework)
const app = express(); //inicializar a aplicação do express
const port = 3000; //estabelecer a porta do servidor

//trabalhar com requisições (JSON)
app.use(express.urlencoded({extended: true}));

//arquivo estático (middleware)
app.use(express.static('public'));

//rotas (/) -> GET (caminho raiz '/')
app.get('/', (req, res) =>{
    //res.send('Rota padrão');
    res.sendFile(__dirname + 'public/index.html');
});

app.get('/eu', (req, res) =>{
    res.send('Nome: Ranyelson Neres Carvalho');
});

//criar a rota do contato
app.post('/contato', (req, res) =>{
    //res.send("Dados recebidos!");
    const {nome, email} = req.body; //acessar o corpo da requisição
    res.send(`Dados recebidos: ${nome}, ${email}`); //resposta a requisição
});


//inicializar a porta do servidor
app.listen(port, () =>{
    console.log("Servidor rodando na porta 3000");
});
