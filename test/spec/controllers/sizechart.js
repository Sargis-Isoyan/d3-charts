'use strict';

describe('Controller: SizechartCtrl', function () {

  // load the controller's module
  beforeEach(module('bootstrapAngularAdminWebAppApp'));

  var SizechartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SizechartCtrl = $controller('SizechartCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SizechartCtrl.awesomeThings.length).toBe(3);
  });
});
