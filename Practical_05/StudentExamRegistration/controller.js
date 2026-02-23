app.controller("examCtrl", function($scope) {

    $scope.student = {
        subjects: {}
    };

    $scope.submitted = false;

    $scope.submitForm = function() {

        if ($scope.examForm.$valid) {
            $scope.submitted = true;
            alert("Exam Registration Successful!");
        } else {
            alert("Please fill all required fields properly.");
        }

    };

});