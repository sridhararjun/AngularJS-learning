var myApp = angular.module("app9", [])
    .directive("jqlDirective", function () {
        return function (scope, element, attrs) {
            var players = element.children();
            var ListOfPlayers = "";

            for (i = 0; i < players.length; i++) {
                if (players.eq(i).text() == "Barry Bonds") {
                    players.eq(i).css("color", "blue");
                    players.eq(i).attr("number", "25");
                }
                if (players.eq(i).text() == "Steve Bonds") {
                    players.eq(i).addClass("thick");
                }
                ListOfPlayers += players.eq(i).text() + ",";
            }
            angular.element(document.querySelector("#listOfPlayers")).text(ListOfPlayers);

            var numBar = angular.element(document.querySelector("#barry")).attr("number");
            angular.element(document.querySelector("#barNum")).text(numBar);

            var bolda = angular.element(document.querySelector("#Steve")).hasClass("thick");
            angular.element(document.querySelector("#hanke")).text(bolda);
            var Idpls = angular.element(document.querySelector("#barry")).prop("id");
            angular.element(document.querySelector("#machiIDEna")).text(Idpls);

        }
    })
    .controller("mainCtrl", function ($scope) {
        $scope.unBold = function () {
            angular.element(document.querySelector("#Steve")).toggleClass("thick");
        }
    });