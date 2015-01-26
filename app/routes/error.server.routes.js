module.exports = function(app) {
    errorC = require('../controllers/error.server.controller');
    // Pagina 404
    app.use(errorC.pag404);

    // Pagina de error 500
    app.use(errorC.pag500);
};