//carga el archivo de configuración dependiendo del entorno en que estemos
var entorno = process.env.NODE_ENV || 'development';
module.exports = require('./env/' + entorno + '.js');