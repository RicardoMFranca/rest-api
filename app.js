const express = require('express');
const app = express();

const rota_produtos = require('./routes/produtos');
const rota_pedidos = require('./routes/pedidos');
const morgan = require('morgan')

app.use(morgan('dev'));
app.use('/produtos', rota_produtos);
app.use('/pedidos', rota_pedidos);

// app.use((req, res, next) => {
//     res.status(200).send({
//         mensagem: 'Ok, deu certo!'
//     });
// });

//QUANDO NÃO ACHA A ROTA
app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    }) 
});
module.exports = app;