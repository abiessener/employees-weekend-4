console.log('js');

var app = angular.module('EmployeeApp', []);

app.controller('EmployeeController', ['$http', function($http){
    console.log('controller loaded');
    
    var self = this;
    self.pageTitle = 'Weekend Challenge 4: Full-Stack Employee Salary App';

    // test GET route
    $http({
        method: 'GET',
        url: '/list'
    }).then(function(response){
        console.log('GET response:', response);    
    });

    // test POST route
    $http({
        method: 'POST',
        url: '/list'
    }).then(function(response){
        console.log('POST response:', response);
    });

    // test PUT route
    $http({
        method: 'PUT',
        url: '/list'
    }).then(function(response){
        console.log('PUT response:', response);
    });
}]);