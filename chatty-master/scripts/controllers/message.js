'use strict';

angular.module('chattyApp').controller('MessageCtrl', function ($scope, messageservice) {
    $scope.messages = [];

MessageService.getMessages().then(function(response) {
  $scope.messages = response.data;
});


  });
