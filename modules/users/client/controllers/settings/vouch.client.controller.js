'use strict';

angular.module('users').controller('VouchController', ['$scope', '$http', '$location', 'Users', 'Authentication',
  function($scope, $http, $location, Users, Authentication) {
    $scope.user = Authentication.user;

    console.log($scope.user.providerData);

    console.log($scope.user.league);

    // Update a user profile
    $scope.checkStatus = function() {
      $http.get('/api/users/mmrs/'+$scope.user.providerData.steamid).
        success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(data);
        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
    };
  }
]);