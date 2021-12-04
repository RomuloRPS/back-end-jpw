'use strict'
module.exports = function(app) {
    var carroController = require('../controllers/carroController')

    app.route('/carro')
        .get(carroController.lista_todos_os_carros)
        .post(carroController.adiciona_um_carro)
    
    app.route('/carro/:carroId')
        .get(carroController.lista_um_carros)
        .put(carroController.atualiza_um_carro)
        .delete(carroController.remove_um_carro)

}