const busModel = require('../models/BusModel');

var BusController = {};

BusController.create = function(req,res){
    let data = {
        numero: req.body.numero,
        ponen: req.precio.ponen,
        precio: req.body.precio
    };
}

module.exports = BusController;