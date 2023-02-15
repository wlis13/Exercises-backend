const personagen = (id, arr) => {
  const ids = ['2', '4', '5'];
  if (ids.includes(id)) {
    const infoPersonagem = arr.find((info) => {
      return info.id === id;
    });
    return `${ infoPersonagem.id } ${ infoPersonagem.name }`;
  } else { console.log('ID não encontrado'); }
};

module.exports =
{
  personagen,
}

