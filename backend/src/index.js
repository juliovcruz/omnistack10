const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-sabas.mongodb.net/test?retryWrites=true&w=majority' ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(express.json());
app.use(cors());

// yarn add
// express nodemon mongoose
// axios = chamada para outras API
// yarn create react-app web

/* METODOS HTTP:
--------get, post, put delete--------
GET = Receber informação da aplicação
POST = Criar um recurso na aplicação
PUT = Editar um recurso na aplicação
DELETE = Deletar um recurso na aplicação
-------------------------------------
*/

/* Tipos de paramêtros:
Query Params: request.query (Filtros, ordenação, paginação, etc)

Route Params: request.params (Identificar um recurso na alteração ou remoção)

Body: request.body (Dados para criação ou alteração de um registro)
*/

app.use(routes);
app.listen(3333);