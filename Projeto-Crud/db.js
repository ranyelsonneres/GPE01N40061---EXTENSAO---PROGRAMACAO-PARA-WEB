//arquivo para gerar a conexão com o banco de dados
const mysql = require('mysql2');

//criar a instância de conexão (credenciais)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123', //catolica
    database: 'userdb_1',
    port: '3306'
});

//estabelecer a conexão
db.connect(err =>{
    if (err) throw err;
    console.log('deu certo!!!');
});

//exportar o módulo de conexão do banco
module.exports = db;
