const fetch = require('node-fetch');

const API = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemon = async (name) => {
  try {
    const response = await fetch(`${ API }${ name }`);
    if (response.statusText === 'Not Found') {
      return response;
    }
    return response.json();

  } catch (error) {
    console.error(`error: ${ error }`);
  }
};

module.exports =
{
  getPokemon,
}