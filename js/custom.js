let myApp = angular.module("myApp", []);

myApp.controller("myController", function ($scope, $http, $timeout) {
  $scope.data = [];

  const today = new Date();
  const year = today.getFullYear();

  let fn_jquery = function () {
    $(document).ready(function (e) {
      $(".slider").bxSlider({
        pager: false,
      });
    });
  };

  let fn_init = function () {

    $http.get("./data.json").then(function (res) {
      $scope.year = year;
      $scope.data = res.data;
      fn_jquery();
    });

  };

  fn_init();
});
