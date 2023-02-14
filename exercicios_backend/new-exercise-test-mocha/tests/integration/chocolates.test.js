const chai = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

const { expect } = chai;

const output = [
  { id: 1, name: 'Mint Intense', brandId: 1 },
  { id: 2, name: 'White Coconut', brandId: 1 },
  { id: 3, name: 'Mon Chéri', brandId: 2 },
  { id: 4, name: 'Mounds', brandId: 3 },
];

const mockChocolates = JSON.stringify(output);

chai.use(chaiHttp);

describe('Testando a API chocolates', function () {
  describe('Usando o método GET em /chocolate', function () {
    it('Retorna a lista completa de chocolates', async function () {
      sinon.stub(fs.promises, 'readFile')
        .resolves(mockChocolates);
      const response = await chai
        .request(app)
        .get('/chocolates');

      expect(response.body.result).to.be.instanceOf(Array);
      expect(response.status).to.be.equal(200);
      expect(response.body.result).to.deep.equal(output);
      sinon.restore();
    });
  });

  describe('Testando o método POST em /chocolate', function () {
    it('Retorna a lista com um novo objeto', async function () {
      sinon.stub(fs.promises, 'writeFile').resolves();
      const response = await chai.request(app).post('/chocolates').send({
        name: 'novo chocolate',
        brandId: 4,
      });
      expect(response.status).to.be.equal(201);
      expect(response.body).to.haveOwnProperty('result');
      expect(response.body.result).to.be.instanceOf(Array);
      expect(response.body.result).to.length(5);
      sinon.restore();
    });
  });

  describe('Testando métos PUT em /chocolate/:id', function () {
    it('Testando atualização de objetos', async function () {
      sinon.stub(fs.promises, 'writeFile').resolves();
      const response = await chai.request(app).put(`/chocolates/${ 2 }`).send({
        name: 'Mounds2',
        brandId: 4,
      });
      expect(response.status).to.be.equal(202);
      expect(response.body).to.haveOwnProperty('result');
      expect(response.body.result).to.be.instanceOf(Array);
      expect(response.body.result).to.length(4);
      expect(response.body.result[0]).to.haveOwnProperty('brandId');
      expect(response.body.result[0].name).to.be.equal('Mint Intense');
      sinon.restore();
    });
  });
});
