'use strict';

describe('Directive: brandsChart', function () {

  // load the directive's module
  beforeEach(module('bootstrapAngularAdminWebAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<brands-chart></brands-chart>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the brandsChart directive');
  }));
});
