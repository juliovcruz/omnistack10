const axios = require('axios');
const Poke = require('../models/Dev');

// index, show, store, update, destroy

module.exports = {
    async index(request, response){
        const pokes = await Poke.find();

        return response.json(pokes);
    },

    async store(request, response){
        const{ poke_name, types, latitude, longitude } = request.body;


        const apiResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke_name}`);
        // continuar
        
        const { name, sprites , id  } = apiResponse.data;

        console.log(name , sprites.front_default , id, poke_name);
    
        const typesArray = types.split(',').map(typ => typ.trim());

        const location = {
            type: 'Point',
            coordinates: [longitude,latitude],
        }
    
        const poke = await Poke.create({
            poke_name,
            name,
            avatar_url: sprites.front_default,
            types: typesArray,
            location,
        });

    
        return response.json(poke);
    }
}