'use strict'
var mongoose = require('mongoose')
var carro = mongoose.model('carro')

// GET ALL
exports.lista_todos_os_carros = function(req, res) {
    let pageSize = parseInt(req.query['limit']) || 100
    let page = parseInt(req.query['offset']) || 0
    let marcaFiltro = req.query['marca'] || false
    let query = {}
    if(marcaFiltro) {
        query = {"marca": marcaFiltro}
    }
    carro.find(query, {} ,{limit: pageSize, skip: page}, function(err, carros) {
        if(err) {
            res.status(400).send(err);
        }
        res.json(carros)
    })
}

// GET ID
exports.lista_um_carros = function(req, res) {
    carro.findOne({"_id": req.params.carroId}, function(err, carro) {
        if(err) {
            res.status(400).send(err);
        }
        res.json(carro)
    })
}

// POST
exports.adiciona_um_carro = function(req, res) {
    var novo_carro = new carro(req.body)
    novo_carro.save(function(err, carro) {
        if(err) {
            res.status(400).send(err);
        }
        res.json(carro)
    })
}

// PUT
exports.atualiza_um_carro = function(req, res) {
    carro.findOneAndUpdate({_id: req.params.carroId}, req.body, {new: true}, 
        function(err, carro) {
            if (err) {
                res.status(400).send(err);
            }
            res.json(carro);
        });
}

// DELETE
exports.remove_um_carro = function(req, res) {
    carro.remove({_id: req.params.carroId}, function(err, carro) {
        if(err) {
            res.status(400).send(err);
        }
        res.json({"Mensagem": "carro deletado com sucesso"})
    })
}