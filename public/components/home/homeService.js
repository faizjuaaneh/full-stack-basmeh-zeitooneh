var app = angular.module("bassmaApp");
app.service("homeService", ["$http", function ($http) {
    var self = this;
    this.student = [];

    this.getstudent = function () {
        return $http.get("http://localhost:8000/api/student").then(function (response) {
            self.student = response.data;
            return response.data;
        })
    }

    this.addstudent = function (newstudent) {
        return $http.post("http://localhost:8000/api/student", newstudent).then(function (response) {
            self.student.push(response.data);
        })
    };
    this.deletestudent = function (student, index) {
        return $http.delete("http://localhost:8000/api/student/" + student._id).then(function (response) {
            self.student.splice(index, 1);
        });
    };
    this.updatestudent = function (student, index) {
        return $http.put("http://localhost:8000/api/student/" + student._id).then(function (response) {
            self.student[index] = response.data;
        });
    };
}]);