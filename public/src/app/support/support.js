angular.module( 'App.support', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'support', {
    url: '/support',
    views: {
      "main": {
        controller: 'SupportCtrl',
        templateUrl: 'support/support.tpl.html'
      }
    },
    data:{ pageTitle: 'Support' }
  });
})

.controller( 'SupportCtrl', function SupportCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
