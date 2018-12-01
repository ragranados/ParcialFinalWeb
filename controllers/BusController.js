const busModel = require('../models/BusModel');

var BusController = {};

BusController.create = function (req, res) {
    let data = {
        numero: req.body.numero,
        ponen: req.body.ponen,
        precio: req.body.precio
    };

    var nuevo = new busModel(data);

    nuevo.save(function (err) {
        if (err) {
            res.json({ ok: false });
        } else {
            res.json({ ok: true });
        }
    });
};

BusController.get = function(req,res){
    busModel.findById(req.params.id,function(err,ruta){
        if(err){
            res.json({status: 500});
        }else{
            res.json({ok:true,ruta});
        }
    });
};

BusController.getAll = function (req, res) {
    busModel.find({}, function (err, todos) {
        if (err) {
            res.json({ err })
        } else {
            res.json({ ok: true, todos });
        }
    })
};

BusController.update = function (req, res) {
    newData = {
        numero: req.body.numero,
        ponen: req.body.ponen,
        precio: req.body.precio
    };

    busModel.findById(req.params.id, function (err, nuevo) {

        if (err) {
            res.json({err});
        } else {
            nuevo.save(function (err, updated) {
                if (err) {
                    res.json({ status: 500 }, err);
                } else {
                    res.json({ ok: true, updated });
                }
            });
        }
    });
};

BusController.delete = function(req,res){
    busModel.findByIdAndRemove(req.params.id,function(err,borrado){
        if(err){
            res.json({status: 500});
        }else{
            res.json({ok: true, borrado});
        }
    });
}



module.exports = BusController;