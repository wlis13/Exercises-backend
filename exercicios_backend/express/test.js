const Sequelize = require('sequelize');
const sequelize = new Sequelize('Test', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

const Postagen = sequelize.define('postagens', {
  titulo: {
    type: Sequelize.STRING,
  },
  conteudo: {
    type: Sequelize.TEXT,
  }
});

const Filme = sequelize.define('filmes', {
  nome_filme: {
    type: Sequelize.STRING,
  },
  genero: {
    type: Sequelize.STRING,
  },
  tempo_de_exibisao: {
    type: Sequelize.TIME,
  }
})

Filme.create({
  nome_filme: "Star Wars",
  genero: "ficção científica",
  tempo_de_exibisao: "02:15:01"
})



// Filme.sync({ force: true })





sequelize.authenticate().then(function () {
  console.log('conectado com sucesso!')
}).catch(function (error) {
  console.log("falha ao se conectar" + error)
})