const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');
const chai = require('chai');
const app = require('../../src/app');

const objectGames = JSON.stringify([
  { id: 1, name: 'Mint Intense', brandId: 1 },
  { id: 3, name: 'Mon Chéri', brandId: 2 },
  { id: 4, name: 'Mounds', brandId: 3 },
  { id: 2, name: 'Mounds2', brandId: 4 },
]);

describe('Teste de simulação', function () {
  it('Testando simulação GET/chocolates', async function () {
    sinon.stub(fs.promises, 'readFile').resolves(objectGames);
    const response = await chai.request(app).get('/chocolates');

    expect(response.status).to.be.equal(200);
    sinon.restore();
  });
});
