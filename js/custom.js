let myApp = angular.module("myApp", []);

myApp.controller("myController", function ($scope, $http, $timeout) {
  $scope.data = [];

  const today = new Date();
  const year = today.getFullYear();

  let fn_jquery = function () {
    wow = new WOW();
    wow.init();
    $(document).ready(function (e) {
      $(".slider").bxSlider({
        pager: false,
      });
    });

    $(window).on("scroll", function () {
      var bodyScroll = $(window).scrollTop(),
        navbar = $(".navbar");

      if (bodyScroll > 50) {
        $(".navbar-logo img").attr("src", './images/logo-black.png');
        navbar.addClass("nav-scroll");
      } else {
        $(".navbar-logo img").attr("src", './images/logo.png');
        navbar.removeClass("nav-scroll");
      }
      $scope.$apply();
    });
    $(window).on("load", function () {
      var bodyScroll = $(window).scrollTop(),
        navbar = $(".navbar");

      if (bodyScroll > 50) {
        $(".navbar-logo img").attr("src", './images/logo-black.png');
        navbar.addClass("nav-scroll");
      } else {
        $(".navbar-logo img").attr("src", './images/logo.png');
        navbar.removeClass("nav-scroll");
      }
      $scope.$apply();


      $.scrollIt({
        easing: "swing", // the easing function for animation
        scrollTime: 900, // how long (in ms) the animation takes
        activeClass: "active", // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -63,
      });
    });
  }

  let fn_init = function () {
    

    fn_jquery();

    $timeout(function() {
      $http.get("./data.json").then(function (res) {
        $scope.year = year;
        $scope.data = res.data;
    });
    }, 500)
  };

  fn_init();
});
