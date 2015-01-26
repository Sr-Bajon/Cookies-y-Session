//Se cofiguran las rutas para el modulo example. Se usa ngRoute,
//en este bloque de configuracion se usa $routeProvider, que sirve para configurar
//las rutas
//when sirve para definir una ruta, el primer argumento es la ruta, y el segundo
//es un objeto de opciones donde se define el template que se usará en la ruta
//otherwise se usa para manejar la ruta cuando el usuario va a una pagina no definida
angular.module('example')
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'example/views/example.client.view.html'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }
    ]);