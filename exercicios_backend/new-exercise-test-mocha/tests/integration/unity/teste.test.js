const { expect } = require('chai');

const { resultadoMedia } = require('../../../func');

describe('testa quando a média for menor que 7', function () {
  it('retorna reprovação', function () {
    const resposta = resultadoMedia(4);

    expect(resposta).to.be.equals('Reprovado!');
  });

  it('retorna aprovação', function () {
    const resposta = resultadoMedia(7);

    expect(resposta).to.be.equals('Aprovado!');
  });

  it('retorna aprovação com número maior que 7', function () {
    const resposta = resultadoMedia(9);

    expect(resposta).to.be.equals('Aprovado!');
  });
});
