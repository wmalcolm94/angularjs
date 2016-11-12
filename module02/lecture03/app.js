(function () 
{
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];
function CounterController($scope)
{
    $scope.onceCounter = 0;
    $scope.counter = 0;

    $scope.showNumberOfWatchers = function()
    {
        console.log("# of Watchers: ", $scope.$$watchersCount);
    };

    $scope.countOnce = function()
    {
       $scope.onceCounter++;
    };

    $scope.upCounter = function()
    {
        $scope.counter++;
    }

    $scope.$watch('onceCounter', function (newValue, oldValue)
    {
        console.log("onceCounter old value: ", oldValue);
        console.log("once counter new value: ", newValue);
    });

    $scope.$watch('counter', function(newValue, oldValue)
    {
        console.log("counter oldValue: ", oldValue);
        console.log("counter newValue: ", newValue);
    });
}

})();