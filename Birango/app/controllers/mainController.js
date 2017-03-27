'use strict';

var birangoApp = angular.module('birangoApp', []);

birangoApp.controller('birangoController', ['$scope', '$http', '$compile', function ($scope, $http, $compile) {
    angular.element(document).ready(function () {
        var favoriteModal = $("#favoriteModal");
        var countiesModal = $("#countriesModal");

        // Открытие модалки <избранное> по нажатию
        $scope.openFavorite = function () {
            favoriteModal.show();
        };

        // Закрытие модалки <избранное> по нажатию на X
        $scope.closeFavorite = function () {
            favoriteModal.hide();
        };

        // Если модалка открыта и был совершен клик за её областью, закрываем
        window.onclick = function (event) {
            if ($(event.target)[0] === favoriteModal[0]) {
                favoriteModal.hide();
            }
        };

        $scope.openCountries = function () {
            countiesModal.show();
            countiesModal.animate({'top':'0px'},1500);
        };

        $scope.closeCountries = function () {

        };
    });
}]);