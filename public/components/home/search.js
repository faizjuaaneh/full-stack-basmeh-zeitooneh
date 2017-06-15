var app = angular.module("bassmaApp");
app.service("myService", ["$http", function ($http) {
    var self = this;
    var stuobj = {};   
    this.getstudent = function (stunum) {
        console.log("{fffffffffffffffffffff");        
        return $http.get("/api/student?stdNumber=" + stunum)
            .then(function (response) {                
                self.stuobj = response.data;
                return response.data;    
            });
    };
}]);
app.controller("mainController", ["$scope", "myService", function ($scope, myService) {    
    $scope.getstudent = function () {
        console.log("hiiiiiiiiiiiii " + $scope.text1)
        myService.getstudent($scope.text1).then(function (stuobj) {            
            $scope.stuobj = stuobj;        
        });    
    };
}]);