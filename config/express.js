//en este archivo se realizará la configuración de express
var config = require('./config'),
    express = require('express');

module.exports = function(){
    var app = express(),
        cookieParser = require('cookie-parser'),
        session = require('express-session'),
        flash = require('connect-flash'),
        bodyParser = require('body-parser');

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    /*cookie-parser acepta dos valores, el primero es una contraseña para usar
     con las cookies firmadas, el segundo, un objeto de configuracion

     cookie-parser crea una nueva propiedad en el objeto response,
     response.cookie

     podemos crear una cookie así:
     res.cookie(name, value, options)
     res.cookie('name', 'tobi');  //cookie normal
     res.cookie('name', 'tobi', { signed: true });  //signed cookie

     si hay cookies en el cliente, se almacenarán en
     res.cookies  o res.signedCookies dependiendo de si son firmadas o no

     para borrar una cookie
     res.clearCookie('nombreCookie');
     */
    app.use(cookieParser(config.sesionPass));

    /*express-session puede recibir también un objeto de configuración

    Crea un nuevo objeto, en req.session, que podemos usar para guardar los
    datos que queramos:
    req.session.userName = Pepe;
    req.session.userName = null; //esto no borra userName
    delete req.session.userName; //esto si lo borra
    */
    app.use(session({
        resave : false,
        saveUninitialized: true,
        secret : config.sesionPass
    }));

    /*connect-flash es para mostrar mensajes flash en las vistas, son mensajes
    que se borran automaticamente despues de mostrarlos
    req.flash('info', 'Hi there!');
    req.flash('info', ['Welcome', 'Please Enjoy']);
    */
    app.use(flash());

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());


    //AQUI SE INCLUIRAN LAS RUTAS
    require('../app/routes/index.server.routes.js')(app);
    /*express.static debe estar antes de la ruta para la pagina 404, esto es
     porque al no encontrar un archivo, en vez de enviar error 404 lo busca en
     el directorio que hayamos indicado
     */
    app.use(express.static('public'));
    require('../app/routes/error.server.routes.js')(app);
    //FIN RUTAS

    return app;
};