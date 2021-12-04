'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var computadorSchema = Schema({
    nome: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model('computador', computadorSchema)