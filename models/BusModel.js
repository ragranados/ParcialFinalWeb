const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusModel = new Schema({
    numero: String,
    ponen: String,
    precio: String
});

module.exports = mongoose.model('busModel',BusModel);