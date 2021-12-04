'use strict'
var mongoose = require('mongoose')
var computador = mongoose.model('computador')

// GET ALL
exports.lista_todos_os_computadores = function(req, res) {
    let pageSize = parseInt(req.query['limit']) || 100
    let page = parseInt(req.query['offset']) || 0
    let nomeFiltro = req.query['nome'] || false
    let query = {}
    if(nomeFiltro) {
        query = {"nome": nomeFiltro}
    }
    computador.find(query, {} ,{limit: pageSize, skip: page}, function(err, computadores) {
        if(err) {
            res.status(400).send(err);
        }

        console.log(err);
        res.json(computadores)
    })
}

// GET ID
exports.lista_um_computadores = function(req, res) {
    computador.findOne({"_id": req.params.computadorId}, function(err, computador) {
        if(err) {
            res.status(400).send(err);
        }
        res.json(computador)
    })
}

// POST
exports.adiciona_um_computador = function(req, res) {
    var novo_computador = new computador(req.body)
    console.log(req.body);
    novo_computador.save(function(err, computador) {
        console.log(err);
        if(err) {
            res.status(400).send(err);
        }
        res.json(computador)
    })
}

// PUT
exports.atualiza_um_computador = function(req, res) {
    computador.findOneAndUpdate({_id: req.params.computadorId}, req.body, {new: true}, 
        function(err, computador) {
            if (err) {
                res.status(400).send(err);;
            }
            res.json(computador);
        });
}

// DELETE
exports.remove_um_computador = function(req, res) {
    computador.remove({_id: req.params.computadorId}, function(err, computador) {
        if(err) {
            res.status(400).send(err);
        }
        res.json({"Mensagem": "Computador deletado com sucesso"})
    })
}