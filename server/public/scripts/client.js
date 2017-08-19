console.log('js');

var app = angular.module('EmployeeApp', []);

app.controller('EmployeeController', ['$http', function($http){
    console.log('controller loaded');
    
    var self = this;
    self.pageTitle = 'Weekend Challenge 4: Full-Stack Employee Salary App';

    self.calcResult = 0;
    self.employeeList = [];

    self.newEmployee = {};

    self.getList = function(){
        $http({
            method: 'GET',
            url: '/list'
        }).then(function(response){
            console.log('GET response:', response);
            self.employeeList = response.data;
            self.calcResult = 0;
            for (var i = 0; i < self.employeeList.length; i++) {
                self.calcResult += self.employeeList[i].salary / 12;                
            }
        });    
    };

    self.getList();

    self.addEmployee = function(){
        console.log('addEmployee');
        
        $http({
            method: 'POST',
            url: '/list',
            data: self.newEmployee
        }).then(function(response){
            self.newEmployee = {};
            self.getList();
        });
    };


    // // test GET route
    // $http({
    //     method: 'GET',
    //     url: '/list'
    // }).then(function(response){
    //     console.log('GET response:', response);    
    // });

    // // test POST route
    // $http({
    //     method: 'POST',
    //     url: '/list'
    // }).then(function(response){
    //     console.log('POST response:', response);
    // });

    // // test PUT route
    // $http({
    //     method: 'PUT',
    //     url: '/list'
    // }).then(function(response){
    //     console.log('PUT response:', response);
    // });
}]);