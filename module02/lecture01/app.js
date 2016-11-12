(function () 
{
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope', '$filter'];
function MsgController($scope, $filter) 
{
    $scope.name = "William";
    $scope.stateOfBeing = "taco";
    $scope.foodCost = .45;
    
    $scope.sayMessage = function()
    {
        var message = "William likes to eat all of the food.";
        var output = $filter('uppercase')(message);
        return output;
    };

    $scope.feedMe = function()
    {
        if ($scope.stateOfBeing == "taco")
        {
            $scope.stateOfBeing = "burger";
        }
        else
        {
            $scope.stateOfBeing = "taco";
        }
        
    }
}

})();