var app = angular.module("ramApp", ["ngAnimate"]);

app.controller("MainCtrl", ["$scope", "apiCall", function($scope, apiCall){
  $scope.rickAndMortyify = function() {
    $scope.monologue = "";
    if($scope.name1 && $scope.name2 !== "") {
      apiCall.makeCall($scope.name1, $scope.name2).then(function(data) {
        $scope.monologue = data.data.monologue;
      });
      $scope.name1 = "";
      $scope.name2 = "";
    } else {
      alert("you gotta enter both names");
    }
  };
}]);

app.factory("apiCall", ["$http", function($http) {
  var factory = {};

  factory.makeCall = function(name1, name2) {
    var url = "http://bvworks.lv5.org/api/tv/years100?person1=" + name1 + "&person2=" + name2;
    return $http.get(url);
  };
  
  return factory;
}]);
