'use strict';

/* Controllers */

app
// Flot Chart controller
    .controller('discountCtrl', ['$rootScope', '$scope',  function ($rootScope, $scope) {
    		$scope.discount=[
    							{
    								"name":"DPAM",
									"pcdiscount" : 80,
									"averagediscount" : 75
								},
								{
									"name":"LAHALLE",
									"pcdiscount" : 83,
									"averagediscount" : 71
								},
								{
									"name":"ORCHESTRA",
									"pcdiscount" : 82,
									"averagediscount" : 63
								},
								{
									"name":"OKAIDI",
									"pcdiscount" : 77,
									"averagediscount" : 77
								},
								{
									"name":"KIABI",
									"pcdiscount" : 80,
									"averagediscount" : 79
								}
							];

        
    }]);
