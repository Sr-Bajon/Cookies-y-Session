//este es el archivo principal de la aplicación.

//toma por defecto la variable de entorno development si no existe,
//en linux se declara asi en el terminal
//  $ export NODE_ENV=development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express'),
    config = require('./config/config');

var app = express();

app.listen(config.puerto, function(){
    console.log( 'Servidor iniciado en http://localhost:' +
        config.puerto + '; presiona Ctrl-C para terminar.' );
});