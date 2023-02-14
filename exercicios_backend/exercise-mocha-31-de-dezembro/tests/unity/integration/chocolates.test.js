const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');
const app = require('../../../src/app');

const { expect, use } = chai;

const mockArquivo = {
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
};

const mockArquivoIndex2 = mockArquivo.chocolates[1];

const mockArquivoUpdate = [
  {
    id: 1,
    name: 'Mint Intense',
    brandId: 1,
  },
  {
    id: 3,
    name: 'Mon Chéri',
    brandId: 2,
  },
  {
    id: 4,
    name: 'Mounds',
    brandId: 3,
  },
  {
    id: 2,
    name: 'batton',
    brandId: 4,
  },
];

use(chaiHttp);

describe('Testando todos os endpoints', function () {
  describe('Testando módulo chocolates GET/chocolates', function () {
    it('Testa se é exibido o conteúdo completo do arquivo json', async function () {
      sinon.stub(fs.promises, 'readFile').resolves(JSON.stringify(mockArquivo));
      const response = await chai.request(app).get('/chocolates');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal(mockArquivo);
      expect(response.body).to.haveOwnProperty('brands');
      expect(response.body).to.haveOwnProperty('chocolates');
      expect(response.body.brands).to.be.instanceOf(Array);
      expect(response.body.chocolates).to.be.instanceOf(Array);
      sinon.restore();
    });
  });

  describe('Testes GET/chocolates/:id', function () {
    it('Testa o status', async function () {
      const response = await chai.request(app).get(`/chocolates/${ 2 }`);

      expect(response.status).to.be.equal(200);
    });

    it('Testa se está correto o resultado do retorno', async function () {
      const response = await chai.request(app).get(`/chocolates/${ 2 }`);
      sinon.stub(fs.promises, 'readFile').resolves(JSON.stringify(mockArquivoIndex2));

      expect(response.body).to.deep.equal(mockArquivo.chocolates[1]);
      sinon.restore();
    });

    it('Testa se está correto as propriedades do resultado', async function () {
      const response = await chai.request(app).get(`/chocolates/${ 2 }`);
      sinon.stub(fs.promises, 'readFile').resolves(JSON.stringify(mockArquivoIndex2));
      expect(response.body).to.haveOwnProperty('id');
      expect(response.body).to.haveOwnProperty('name');
      expect(response.body).to.haveOwnProperty('brandId');
      sinon.restore();
    });

    it('Testa se está correto os valores das propriedades do resultado', async function () {
      const response = await chai.request(app).get(`/chocolates/${ 2 }`);
      sinon.stub(fs.promises, 'readFile').resolves(JSON.stringify(mockArquivoIndex2));
      expect(response.body.id).to.be.equal(2);
      expect(response.body.name).to.be.equal('White Coconut');
      expect(response.body.brandId).to.be.equal(1);
      sinon.restore();
    });
  });

  describe('Testando PUT/chocolates', function () {
    it('Testando status da resposta', async function () {
      const response = await chai.request(app).put(`/chocolates/${ 2 }`).send(
        {
          name: 'batton',
          brandId: 4,
        },
      );
      await sinon.stub(fs.promises, 'writeFile').resolves(JSON.stringify(mockArquivoUpdate));
      expect(response.status).to.be.equal(200);
      sinon.restore();
    });

    it('Testando se o retorno da busca está correto', async function () {
      const response = await chai.request(app).put(`/chocolates/${ 2 }`).send(
        {
          name: 'batton',
          brandId: 4,
        },
      );
      sinon.stub(fs.promises, 'writeFile').resolves(JSON.stringify(mockArquivoUpdate));
      expect(response.body).to.deep.equal(mockArquivoUpdate);
      sinon.restore();
    });

    it('Testando as propriedades do objeto retornado', async function () {
      const response = await chai.request(app).put(`/chocolates/${ 2 }`).send(
        {
          name: 'batton',
          brandId: 4,
        },
      );
      sinon.stub(fs.promises, 'writeFile')
        .resolves(JSON.stringify(mockArquivoUpdate));
      expect(response).to.haveOwnProperty('id');
    });
  });
});
