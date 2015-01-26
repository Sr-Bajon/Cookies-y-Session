exports.raiz = function(req, res){
    if(!req.session.visitas){
        req.session.visitas = 1
    }else{
        req.session.visitas++;
    }

    res.type('text/html');
    res.render('index', {
        mostrar: req.flash('mostrar') || false,
        tipo : req.flash('tipo') || '',
        intro : req.flash('intro') || '',
        mensaje: req.flash('mensaje') || '',
        color : req.session.color || '#ffffff',
        visitas : req.session.visitas
    });
};

exports.about = function(req, res){
    res.type('text/plain');
    res.send('Acerca de');
};

exports.procesaForm = function(req, res) {
    if (!req.body.nombre) {
        req.flash('mostrar', '0');
    } else if (req.body.nombre == 'Supercalifragilisticoespiralidoso') {
        req.flash('mostrar', '1');
        req.flash('tipo', 'success');
        req.flash('intro', 'Correcto!');
        req.flash('mensaje', 'Bien escrito');
    } else {
        req.flash('mostrar', '1');
        req.flash('tipo', 'danger');
        req.flash('intro', 'Error!');
        req.flash('mensaje', 'Lo has escrito mal');
    }

    req.session.color = req.body.color || '#ffffff';

    res.status('302');
    res.redirect('/');
};