//Module 
//Controller
//Register controller to module

var myApp=angular.module("myModule",[]);
var myController=function($scope){
	$scope.msg="hello angular";
	var student={
		Name:"Bony Amin",
		Age:23
	}
	$scope.student=student;
};
myApp.controller("myCntl",myController);
