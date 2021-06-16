const express = require('express');
const router = express.Router();

//RETORNA TODOS OS PRODUTOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'usando GET dentro da rota de produtos'
    });
});

//INSERE UM PRODUTO
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota de produtos'
    });
});


//FAZENDO ROTA COM PARAMETRO
//RETORNA OS DADOS DE UM PRODUTO 
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto;
    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Você descobriu o valor do ID',
            id: id
        });
    }else {
        res.status(200).send({
            mensagem: 'Você fez a requisição por GET e passou um PARAMETRO',
        });
    }
});

//ALTERA UM PRODUTO
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando PATCH dentro da rota de produtos'
    });
});

//EXCLUI UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando DELETE dentro da rota de produtos'
    });
});

module.exports = router;