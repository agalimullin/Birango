'use strict';

var birangoApp = angular.module('birangoApp', []);

birangoApp.controller('birangoController', ['$scope', '$http', '$compile', function ($scope, $http, $compile) {
    angular.element(document).ready(function () {
        var modal = $("#myModal");
        var btn = $("#modalFavoriteBtn")[0];
        var span = $(".close")[0];

        // Открытие модалки по нажатию
        btn.onclick = function () {
            modal.show();
        };

        // Закрытие модалки по нажатию на X
        span.onclick = function () {
            modal.hide();
        };

        // Если модалка открыта и был совершен клик за её областью, закрываем
        window.onclick = function (event) {
            console.log($(event.target)[0]);
            if ($(event.target)[0] === modal[0]) {
                modal.hide();
            }
        }
    });
}]);