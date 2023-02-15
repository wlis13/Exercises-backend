const { getFetch } = require('../util/Fetch');

const withdraw = async () => {
  const ids = ['10', '6'];
  const fetch = await getFetch()
  const remaining = fetch.filter((character) => !ids.includes(character.id));
  console.log(remaining);
};

console.log(withdraw());