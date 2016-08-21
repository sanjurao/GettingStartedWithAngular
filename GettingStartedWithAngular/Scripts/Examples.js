/// <reference path="C:\D\Personal\Projects\GettingStartedWithAngular\GettingStartedWithAngular\Library/angular.js" />

var exampleApp = angular.module("MyExampleModule", [])
                 .controller("Example1Controller", function ($scope) {
                     $scope.Example1 = "Welcome to getting started with angular"
                     var employee = { name: "San", skils: ".Net", exp: 5 }
                     $scope.employee = employee;

                     var employees= [{ name: "sanju", dob: "04/09/1987", skils: "C#,Java,Angular", Exp: 5 },
                                    { name: "Arush", dob: "01/09/1988", skils: "C#,Java,BIF", Exp: 3 },
                                    { name: "Aneesh", dob: "01/09/1984", skils: "C#,Java,Sharepoint,BIF", Exp: 3 }];
                     $scope.employees = employees;
                 });