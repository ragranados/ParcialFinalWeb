const mongoose = require('mongoose');

const BusModel = new mongoose.Schema({
    numero: String,
    ponen: String,
    precio: String
});

module.exports = mongoose.model('busModel',BusModel);