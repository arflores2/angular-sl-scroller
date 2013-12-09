angular.module('app', ['sl.scroller'])

  .controller('AppCtrl', function AppCtrl($scope, $sce) {

    $scope.app = {};
    $scope.app.name = "Angular Carousel" 

  });