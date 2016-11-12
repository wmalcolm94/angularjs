(function () 
{
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) 
{
    $scope.name = "William";
    $scope.stateOfBeing = "taco";
    $scope.sayMessage = function()
    {
        return "William likes to eat popcorn.";
    };

    $scope.feedMe = function()
    {
        $scope.stateOfBeing = "burger";
    }
}

})();