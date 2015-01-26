exports.pag404 = function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - No encontrada');
};

exports.pag500 =  function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
};