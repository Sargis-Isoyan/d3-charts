'use strict';

/**
 * @ngdoc directive
 * @name bootstrapAngularAdminWebAppApp.directive:brandsChart
 * @description
 * # brandsChart
 */
angular.module('bootstrapAngularAdminWebAppApp')
  .directive('brandsChart', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the brandsChart directive');
      }
    };
  });
