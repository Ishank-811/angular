var myApp = angular.module("mymodule", []);

var mycontroller = function ($scope) {
  $scope.message = "angular js posist";
  $scope.num = "";
  $scope.val = true;
  $scope.ordering = "name"  ; 
  $scope.rowlimit = 2;
  $scope.names="10"; 
  // $scope.searchtext = "" ; 
  $scope.arr = [12, 11, 10, 2];
  $scope.obj = {
    company: "posist",
    employee: "xyz",
    // funct : function(a , b){
    //     return a+b ;
    // }
  };

  var employees = [
    { name: "a", gender: "male", age: "10", likes: 2, dislike: 0 },
    { name: "b", gender: "male", age: "11", likes: 4, dislike: 0 },
    { name: "c", gender: "female", age: "12", likes: 1, dislike: 0 },
    { name: "d", gender: "male", age: "13", likes: 0, dislike: 0 },
  ];

  $scope.incrementall = function () {
    $scope.employees.forEach((element) => {
      element.likes++;
    });
  };

  $scope.increment = function (num) {
    console.log(num);
    num.likes++;
  };
  $scope.decrement = function (num) {
    if (num.likes > 0) {
      num.likes--;
    } else {
      alert("cant disliked");
    }
  };
//   $scope.reversesort = false;  
//   $scope.getsorted = function(column){
//     $scope.reversesort = (column==$scope.reversesort ? !$scope.reversesort : false ); 
//   }

  var countries = [
    { name: "India", cities: ["a", "b"] },

    { name: "India1", cities: ["c", "d"] },

    { name: "India2", cities: ["e", "f"] },
  ];
  $scope.countries = countries;

  $scope.employees = employees;
};

myApp.controller("mycontroller", mycontroller);

// second controller..............................................

var mycontroller2 = function ($scope) {
  $scope.testing = "testing";
};

myApp.controller("mycontroller2", mycontroller2);

//second module and controller ........................................

// var myapp2 = angluar.module("mymodule2" , []);

// var mycontroller3 = function($scope){

//     $scope.testings = "testing2";
// }
// myapp2.controller("mycontroller3" , mycontroller3);
