const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os pedidos'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Cria um pedido'
    });
});

router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "Altera Pedido"
    });
});

router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Excluí pedido'
    })
})

module.exports = router;