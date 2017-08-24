'use strict';

/**
 * @ngdoc function
 * @name todoappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoappApp
 */
angular.module('todoappApp')
    .controller('ToDoController', function($scope, Task) {
        $scope.taskList = [];
        $scope.achievedTaskList = [];
        $scope.editIndex = false;

        $scope.taskList.push(Task.createTask());
        $scope.taskList.push(Task.createTask('Get eggs'));
        $scope.taskList.push(Task.createTask('Call Paul'));
        $scope.taskList.push(Task.createTask('Gym'));
        var t = Task.createTask('Homework');
        t.done = true;
        $scope.achievedTaskList.push(t);
        $scope.addTask = function(taskTitle) {

            if ($scope.editIndex === false) {
                $scope.taskList.push(Task.createTask(taskTitle));
            } else {
                $scope.taskList[$scope.editIndex].title = taskTitle;
            }
            $scope.editIndex = false;
            $scope.taskTitle = '';
        }

        $scope.editTask = function(index) {
            $scope.taskTitle = $scope.taskList[index].title;
            $scope.editIndex = index;
        }

        $scope.deleteTask = function(index) {
            $scope.taskList.splice(index, 1);
        }

        $scope.deleteAchievedTask = function(index) {
            $scope.achievedTaskList.splice(index, 1);
        }

        $scope.achieveTask = function(index) {
            $scope.taskList[index].done = true;
            $scope.achievedTaskList.push($scope.taskList[index]);
            $scope.taskList.splice(index, 1);
        }
        $scope.unAchieveTask = function(index) {
            $scope.achievedTaskList[index].done = false;
            $scope.taskList.push($scope.achievedTaskList[index]);
            $scope.achievedTaskList.splice(index, 1);
        }
    });