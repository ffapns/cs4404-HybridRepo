'use strict';

angular.module('todoappApp').service('Task', function() {
    var self = this;
    self.createTask = function(title = 'Untitled task') {
        return {
            title: title,
            isCompleted: false
        };
    };
});