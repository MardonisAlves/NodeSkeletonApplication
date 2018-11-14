/*import framework web express*/
var express = require('express');

/*import modulo consign */
var consign = require('consign');

/*import o nossso modulo body-parser*/
var bodyparser = require('body-parser');

/*import o modulo validator express*/
var expressValidator =  require('express-validator');

/*Inicia o objeto express*/
var app =  express();

/*setar as variaveis de view-engine e views do expresss*/
app.set('view engine' , 'ejs');
app.set('views' , './app/views');

/*configuração dos Meddleware  express.ststic*/
app.use(express.static('./app/public'));

/*configuração dos Meddleware  body-parser*/
app.use(bodyparser.urlencoded({extended: true}));

/*configurar o middleware express-validatro*/
app.use(expressValidator());

/*Efetua o autoloader das ROUTES, MODELS , Controllers*/
consign()
        .include('app/routes')
        .then('app/models')
        .then('app/controllers')
        .into(app);
/*Aqui exportamos o objeto APP para a nossa a plicação*/
module.exports = app;