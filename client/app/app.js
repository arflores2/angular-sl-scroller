angular.module('app', ['sl.scroller'])
  
  .controller('AppCtrl', function AppCtrl($scope, $sce) {

    $scope.app = {};
    $scope.app.name = "Angular Scroller" 
    $scope.app.topOffset = 103;
    // $scope.app.topOffsetElId = 'banner';

  });