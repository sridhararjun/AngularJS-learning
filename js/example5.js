var myApp =  angular.module("app5",[]);

myApp.controller("gListCtrl",function($scope){

    $scope.groceries = [
        {item:"tomato",purchased:false},
        {item:"brinjal",purchased:false},
        {item:"papaya",purchased:false}
    ];

    $scope.add = function(newly){
        if(!(newly === undefined && newly == null)){
        $scope.groceries.push({item:newly , purchased: false})
    }
    else{
        $scope.missing = "Empty";
    }
    }

    

});