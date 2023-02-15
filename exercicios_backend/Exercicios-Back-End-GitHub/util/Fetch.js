const fetch = require('node-fetch');
const url = 'https://lms-assets.betrybe.com/lms/simpsons.json';

const getFetch = async () => {
  try {
    const promise = await fetch(url);
    const response = await promise.json();
    return response;

  } catch (error) {
    console.error(`Requisição não concluída ${ error }`)
  }
};

module.exports =
{
  getFetch,
}