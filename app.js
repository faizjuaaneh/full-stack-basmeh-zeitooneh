var app = angular.module("bassmaApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "public/components/home/home.html",
            controller: "miancontroller"
        })
        .when("/database", {
            templateUrl: "public/components/home/database.html",
            controller: "miancontroller"

        })
        .when("/search", {
            templateUrl: "public/components/home/search.html",
            controller: "mainController"
        })
        .when("/about", {
            templateUrl: "public/components/home/about.html",
            controller: "miancontroller"
        })
        .when("/PeaceEducation", {
            templateUrl: "public/components/home/PeaceEducation.html",
            controller: "miancontroller"
        })
        .when("/contact", {
            templateUrl: "public/components/home/contact.html",
            controller: "miancontroller"
        })
        .when("/ADMIN", {
            templateUrl: "public/components/home/ADMIN.html",
            controller: "miancontroller"
        })
        .when("/Workshop", {
            templateUrl: "public/components/home/Workshop.html",
            controller: "miancontroller"
        })

}]);