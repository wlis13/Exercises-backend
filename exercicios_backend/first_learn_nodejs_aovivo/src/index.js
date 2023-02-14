const { askName } = require('./askName');
const npmSearch = require('./npmSearch');
const { getPokemon } = require('./pokemon');

const main = async () => {
  const name = askName();
  const project = await npmSearch.getPackage(name);
  if (!project.name) {
    console.log('Isso não me parece uma Lib...')

  } else { console.log(`${ project.name } é uma Lib...`); }

  const pokemon = await getPokemon(name);
  if (pokemon.statusText === 'Not Found') {
    console.log(`${ name } não existe! provavelmente você digitou um nome incorreto. `)
  }

  if (pokemon.name) {
    console.log(`${ name } é um pokemon.`)
  } else {
    console.log(`${ name } não é um pokemon.`)
  };
};

main();
