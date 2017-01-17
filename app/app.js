var app = angular.module("myApp", ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when("/Home", {
        templateUrl : "pages/Home.html"
        
    })
    .when("/Display",{
        templateUrl:"pages/displayBook.html",
        controller:"displayCtrl"
    })
    .when("/update/:id",{
        templateUrl:"pages/updateBook.html",
        controller:"updateCtrl"
    })
    .when("/Add",{
        templateUrl:"pages/addBook.html",
        controller:"addCtrl"
    })
    .otherwise({
        template : "<h1>None</h1><p>Nothing has been selected,</p>"
    });
   
}]);
