'use strict'
module.exports = function(app) {
    var computadorController = require('../controllers/computadorController')

    app.route('/computador')
        .get(computadorController.lista_todos_os_computadores)
        .post(computadorController.adiciona_um_computador)
    
    app.route('/computador/:computadorId')
        .get(computadorController.lista_um_computadores)
        .put(computadorController.atualiza_um_computador)
        .delete(computadorController.remove_um_computador)

}