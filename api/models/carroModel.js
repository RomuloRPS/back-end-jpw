'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var carroSchema = Schema({
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    cor: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('carro', carroSchema)