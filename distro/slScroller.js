angular.module('sl.scroller', [])
  .directive('slScroller', function() {
    return {
      restrict: 'A',
      replace: false,
      scope: {
        slScrollerTopOffset: '='
      },

      link: function($scope, $element, $attrs) {
        $element.on('click', function(e) {

          e.stopPropagation();

          var $btn = $element,
              ref = $btn.attr('href'),
              $ref = $(ref),
              topOffset = $scope.slScrollerTopOffset || 0,
              offset = $ref.offset().top - topOffset;

          $('body').animate({scrollTop: offset}, "slow");
        });
      }
    }  
  });
