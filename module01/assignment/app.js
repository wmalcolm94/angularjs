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
        $scope.message = $scope.lunchItems.split(",").toString();
        // var list = $scope.lunchItems.split(",");
        // if (list.count == 0)
        // {
        //     $scope.message = "Please enter data first"; //list.toString() + maxItems.toString() + 
        // }
        // else if (list.count > maxItems)
        // {
        //     $scope.message = "Too much!"; //list.toString() + maxItems.toString() +  
        // }
        // else
        // {
        //     $scope.message = "Enjoy!"; //list.toString() + maxItems.toString() + 
        // }
    }

}

})();