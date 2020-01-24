const Poke = require('../models/Dev');

module.exports = {
    async index(request,response){
        const { latitude, longitude, types } = request.query;
        //busca

        const typesArray = types.split(',').map(typ => typ.trim());

        const pokes = await Poke.find({
            techs: {
                $in: typesArray,
            },
            location:{
                $near:{
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                }
            }
        });

        return response.json(pokes);
    }
}