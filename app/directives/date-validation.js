App.directive('validateDate', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
                scope.$watch(attrs.ngModel, function (value) {
                    var date = moment(value, attrs.dateFormat);
                    if (typeof value != 'undefined') {
                        if (value.length == attrs.dateFormat.length) {
                            ctrl.$setValidity('invalidDate', date.isValid());
                        }
                    }else{
                        ctrl.$setValidity('invalidDate', true);
                    }
                });
            }
        }
    });