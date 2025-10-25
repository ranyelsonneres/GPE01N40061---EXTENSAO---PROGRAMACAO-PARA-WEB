//importar o módulo do express
const express = require('express');

//trazer a conexão com banco
const db = require('../db');

//rotas modularizada
const router = express.Router();

//primeira rota (cadastrar usuário)
//create (POST): /api/users/
router.post('/', (req, res) =>{
    //receber os dados da requisição do cliente
    const {nome, email} = req.body;

    //executar a instrução SQL
    db.query('INSERT INTO users (nome, email) VALUES (?, ?)', 
        [nome, email], (err, result) =>{
            if (err) return res.status(500).send(err);

            res.status(201).json({id: result.insertId, nome, email});
        });
});

//exportar as rotas
module.exports = router;
