
$scope.api.addSwipeListener = function(callbackKey, callback, swipeDirection, component) {
    if (!$scope.model.callbacks) {
        $scope.model.callbacks = []
    }
    $scope.model.callbacks.push({ callbackKey, callback, swipeDirection, component })
}

$scope.api.removeSwipeListener = function(callbackKey) {
    if ($scope.model.callbacks) {
        for (var i = 0; i < $scope.model.callbacks.length; i++) {
            if ($scope.model.callbacks[i].callbackKey === callbackKey) {
                $scope.model.callbacks.splice(i, 1);
                return true;
            }
        }
    }
    return false;
}