var app = angular.module("bassmaApp");

app.controller("miancontroller", ["$scope", "homeService", function ($scope, homeService) {
    $scope.student = homeService.student;
    $scope.editing = false;

    homeService.getstudent().then(function (data) {
        $scope.student = data;
    });
    $scope.addstudent = function (newstudent) {
        homeService.addstudent(newstudent);
        homeService.getstudent().then(function (data) {
            $scope.student = data;
        });

    }
    $scope.deletestudent = function (student, index) {
        homeService.deletestudent(student, index)
    }
    $scope.completestudent = function (student, index) {
        homeService.updatestudent(student, index);
    }
    $scope.updatestudent = function (student, index) {
        homeService.updatestudent(student, index).then(function () {
            student.editing = false;
        });
    }
}]);