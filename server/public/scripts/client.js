console.log('js');

var app = angular.module('EmployeeApp', []);

app.controller('EmployeeController', function(){
    console.log('controller loaded');
    
    var self = this;
    self.pageTitle = 'Weekend Challenge 4: Full-Stack Employee Salary App';
});