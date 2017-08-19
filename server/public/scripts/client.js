console.log('js');

var app = angular.module('EmployeeApp', []);

app.controller('EmployeeController', ['$http', function($http){
    console.log('controller loaded');
    
    var self = this;
    self.pageTitle = 'Weekend Challenge 4: Full-Stack Employee Salary App';

    self.calcResult = 0;
    self.employeeList = [];

    self.newEmployee = {};

    // get the list of employees from the server, and perform the calculation to display the monthly expenditure
    self.getList = function(){
        $http({
            method: 'GET',
            url: '/list'
        }).then(function(response){
            console.log('GET response:', response.data);
            self.employeeList = response.data;
            self.calcResult = 0;
            for (var i = 0; i < self.employeeList.length; i++) {
                if(self.employeeList[i].is_active){
                    self.calcResult += self.employeeList[i].salary / 12;                
                }
            }
        });    
    };

    // initial table population
    self.getList();

    // send user input to the server, then get an updated list and clear the newEmployee object (and thus the input fields on the DOM)
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

    // takes the id of the employee to update and a boolean that we'll be setting their is_active property in the database to. Sends the id as a URL parameter and the boolean as data. Gets an updated list afterwards
    self.updateEmployee = function(id, activate){
        console.log('updateEmployee(' + id + ')');
        
        $http({
            method: 'PUT',
            url: '/list/' + id,
            data: { active: activate }
        }).then(function(response){
            self.getList();
        });
    }
}]);