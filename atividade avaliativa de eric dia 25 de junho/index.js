const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const sequelize = require('./bd');
const estudante = require('./models/estudante.model');









app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', exphbs.engine({defaultLayout:false}));
app.set('view engine', 'handlebars');



app.get('/', (req, res) => {
  res.render('listarEstudantes', {
    nome: 'pedro',
    idade: '16'
  });
});
app.get('/estudante/create', (req, res) => {
  res.render('listarEstudantes', {
    nome: 'pedro',
    idade: '16'
  });
});
app.get('/estudante/', (req, res) => {
  res.render('home', {
    nome: 'pedro',
    idade: '16'
  });
});

async function conectarBD() {
  try {
    await sequelize.sync();
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  } catch (erro) {
    console.error('Erro ao conectar:', erro);
  }
}

async function conectarBD() {
  await sequelize.sync();
}

conectarBD();

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);