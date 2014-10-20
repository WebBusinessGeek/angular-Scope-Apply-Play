var app = angular.module('app', [])


app.directive('watchedFalse', function(){
	return{
		restrict: 'E', 
		template: 'Not watched: <button class="btn btn-success">I was clicked {{counter1}} times</button>',
		controller: function($scope){
			$scope.counter1 = 0;
		},
		link: function(scope, element, attrs){
			element.bind('click', function(){
				scope.counter1++;
			});
		}
	}


})


app.directive('watchedTrue', function(){
	return{
		restrict: 'E', 
		template: 'Watched: <button class="btn btn-primary">I was clicked {{counter2}} times</button>',
		controller: function($scope){
			$scope.counter2 = 0;
		},
		link: function(scope, element, attrs){
			element.bind('click', function(){
				scope.$apply(function(){
					scope.counter2++;
				});
			});
		}
	}

})