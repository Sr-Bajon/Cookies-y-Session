module.exports = function(app){
    var index = require('../controllers/index.server.controller.js');

    app.get('/', index.raiz);

    app.get('/about', index.about);

    app.post('/procesaForm', index.procesaForm);
};