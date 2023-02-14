const resultadoMedia = (media) => {
  if (media < 7) {
    return 'Reprovado!';
  }
  if (media >= 7) {
    return 'Aprovado!';
  }
};

module.exports = { resultadoMedia };