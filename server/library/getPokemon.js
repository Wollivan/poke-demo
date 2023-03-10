const axios = require("axios");

async function getPokemon(request, response) {
  // this is where the data is retrieved
  const API = `https://pokeapi.co/api/v2/pokemon/pikachu`;
  const res = await axios.get(API);
  response.status(200).json(res.data.sprites.versions["generation-v"]["black-white"].animated.front_default);
}

module.exports = getPokemon;
