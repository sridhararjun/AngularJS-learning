var myApp = angular.module("app3",[]);


myApp.controller("groceryController",function($scope){
    $scope.groceries = [
        {item:"tomato",purchased:"false"},
        {item:"brinjal",purchased:"false"},
        {item:"papaya",purchased:"false"}
    ];

    $scope.displayList = function(){
       return $scope.value ? "unorderedgrocerylist.htm" : "grocerylist.html";
    };
});
