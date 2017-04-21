angular.module('starter')
.controller('ListagemController', function($scope) {

    $scope.carros = [
        {"nome" : "BMW 120i" , "preco" : 70000},
        {"nome" : "Onix 1.4" , "preco" : 35000},
        {"nome" : "Fiesta 1.6", "preco" : 52000},
        {"nome" : "C3 1.2", "preco" : 22000},
        {"nome" : "Uno Fire", "preco" : 11000},
        {"nome" : "Sentra 2.0", "preco" : 53000},
        {"nome" : "Astra Sedan", "preco" : 39000},
        {"nome" : "Vectra 2.4", "preco" : 37000},
        {"nome" : "Hilux 4x4", "preco" : 90000},
        {"nome" : "Strada Cabine dupla", "preco" : 57000},
        {"nome" : "Outlander 2.4" ,"preco" : 99000},
        {"nome" : "Fusca 1500", "preco" : 6000}
    ];
    
    $scope.dataAtual = "01/01/2018";
});