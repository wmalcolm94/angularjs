(function () 
{
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) 
{
    $scope.lunchItems = "";
    $scope.message = "";

    var maxItems = 3;

    $scope.validateLunch = function()
    {
        //console.log($scope.lunchItems);
        var list = $scope.lunchItems.split(",");
        if (list.length == 0 || $scope.lunchItems == "")
        {
            $scope.message = "Please enter data first"; //list.toString() + maxItems.toString() + 
        }
        else if (list.length > maxItems)
        {
            $scope.message = "Too much!"; //list.toString() + maxItems.toString() +  
        }
        else
        {
            $scope.message = "Enjoy!"; //list.toString() + maxItems.toString() + 
        }
    }

}

})();