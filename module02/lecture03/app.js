(function () 
{
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loves', LovesFilter)
.filter('truth', TruthFilter);

MsgController.$inject = ['$scope', 'lovesFilter'];
function MsgController($scope, lovesFilter) 
{
    $scope.name = "William";
    $scope.stateOfBeing = "taco";
    
    $scope.sayMessage = function()
    {
        var message = "William likes to eat all of the food.";
        //var output = $filter('uppercase')(message);
        return message;
    };

    $scope.sayLovesMessage = function()
    {
        var message = "William likes to eat all of the food.";
        message = lovesFilter(message);
        return message;
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

function LovesFilter()
{
    return function(input)
    {
        input = input || "";
        input = input.replace("likes", "loves");
        return input;
    };
}

function TruthFilter()
{
    return function(input, target, replace)
    {
        input = input || "";
        input = input.replace(target, replace);
        return input;
    };
}

})();