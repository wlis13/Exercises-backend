const readLine = require('readline-sync');
const { infoUser } = require('./bmi');
const { print } = require('./printSimpsons');
const { personagen } = require('./printPersonagem');
const { getFetch } = require('../util/Fetch');

const main = async () => {
  const fetchSimpsons = await getFetch();
  console.log(infoUser());
  console.log(print(fetchSimpsons));
  const idValue = readLine.question('digite um número de id: ')
  console.log(personagen(idValue, fetchSimpsons))
};

main();