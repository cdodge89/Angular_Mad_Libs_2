(function(){
	angular.module('display-directives',[])
		.directive('displayStorytabs', function(){
			return{
				restrict: 'E',
				templateUrl: 'views/display-storytabs.html',
				controller: function(){
					this.tab = 1;

					this.setTab = function(newVal){
						this.tab = newVal;
					};

					this.isSet = function(checkTab){
						return this.tab === checkTab;
					}
				},
				controllerAs: 'tab'
			};
		});
})();