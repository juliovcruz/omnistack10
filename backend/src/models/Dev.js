const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const PokeSchema = new mongoose.Schema({
    name: String,
    poke_name: String,
    avatar_url: String,
    types: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    },
});

module.exports = mongoose.model('Poke', PokeSchema);