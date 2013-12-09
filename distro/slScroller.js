angular.module('sl.scroller', [])
  
  .directive('slScroller', function() {
    return {
      restrict: 'A',
      replace: false,
      scope: {
        slScrollerTopOffset: '='
      },

      link: function($scope, $element, $attrs) {
        $element.on('click', function() {
          var $btn = $element,
              $location = $($btn.attr('href')),
              topOffset = $scope.slScrollerTopOffset || 0,
              offset = $location.offset().top - topOffset;

          $('body').animate({scrollTop: offset}, "slow");
        });
      }
    }  
  });
