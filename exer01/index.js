const express = require('express');
const bodyParse = require('body-parser');

const jokesController = require('./controller/jokesControllers');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', jokesController.listJokers);

app.listen(3000, () => {
  console.log('Servidor iniciado');
});
