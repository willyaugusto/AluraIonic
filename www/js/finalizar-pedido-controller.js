angular.module('starter')
    .controller('FinalizarPedidoController', 
        function ($scope, $stateParams, $ionicPopup, $state) {

        $scope.carroFinalizado = angular.fromJson($stateParams.carro);

        $scope.finalizarPedido = function(){

            $ionicPopup.alert({
                title: 'Parabéns',
                template: 'Você acaba de comprar um carro'
            }).then(function(){

                $state.go('listagem');
            });
        }
    });