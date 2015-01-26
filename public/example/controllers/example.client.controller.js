angular.module('example')
    .controller('ExampleController', ['$scope',
        'Authentication',
    function($scope, Authentication) {
        //$scope.name = 'MEAN Application';
        $scope.authentication = Authentication;
    }
]);