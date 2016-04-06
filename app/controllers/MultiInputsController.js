'use strict';

App.controller('MultiInputsController', ['$scope', '$http', function ($scope, $http) {
    $scope.items = [];

    $scope.addRow = function () {
        $scope.items.push({name: "", url: ""});
    };

    $scope.moveUp = function (items, index) {
        var currItem = index;
        if (currItem > 0) {
            items.splice(currItem - 1, 0, items.splice(currItem, 1)[0]);
        }
    };

    $scope.moveDown = function (items, index) {
        var currItem = index;
        var newPosition = index + 1;
        if (currItem < items.length) {
            items.splice(newPosition, 0, items.splice(currItem, 1)[0]);
        }
    };

    $scope.removeItem = function (items, index) {
        items.splice(index, 1);
    };
}]);
