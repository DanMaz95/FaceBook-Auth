angular.module('starter')

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $auth, $location, toastr) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  //$scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
    
    $scope.logout = function () { 
        $auth.logout(); 
        toastr.info("You are logged out."); 
    };

  // Perform the login action when the user submits the login form
    $scope.doLogin = function(provider) {
      $auth.authenticate(provider).then(function (response) { 
            $auth.setToken(response.code); 
            toastr.success("Login Successful."); 
            $scope.modal.hide(); 
      }).catch(function (response) { 
          $scope.modal.hide(); 
          toastr.error("Login not successful."); 
      }); 
  };
    $scope.isAuthenticated = function () { 
        return $auth.isAuthenticated(); 
    }; 

})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
//////////////////////////////////////

//angular.module('MyApp')
//  .controller('LoginCtrl', function($scope, $auth) {
//
//    $scope.authenticate = function(provider) {
//      $auth.authenticate(provider);
//    };
//
//  });
