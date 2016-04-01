(function(){
	angular.module('madlibsGame',['display-directives'])
		.controller('DisplayController',['$scope', 'Generator', function($scope, Generator){
			var vm = this;
			vm.userWords = {
				nouns:'',
				adjectives:'',
				verbs:'',
				adverbs:''
			};
			vm.currentWords = {
				nouns:[],
				adjectives:[],
				verbs:[],
				adverbs:[]
			};


			$scope.$watch(function(){
				return vm.userWords;
			},function(newVal,oldVal){
				if(newVal.nouns!==oldVal.nouns){
					vm.currentWords.nouns = Generator.generateWordsArr(vm.currentWords.nouns, vm.userWords.nouns, 'nouns', 'story1');
				}
				if(newVal.adjectives!==oldVal.adjectives){
					vm.currentWords.adjectives = Generator.generateWordsArr(vm.currentWords.adjectives, vm.userWords.adjectives, 'adjectives', 'story1');
				}
				if(newVal.verbs!==oldVal.verbs){
					vm.currentWords.verbs = Generator.generateWordsArr(vm.currentWords.verbs, vm.userWords.verbs, 'verbs', 'story1');
				}
				if(newVal.adverbs!==oldVal.adverbs){
					vm.currentWords.adverbs = Generator.generateWordsArr(vm.currentWords.adverbs, vm.userWords.adverbs, 'adverbs', 'story1');
				}
			}, true);

			vm.currentWords.nouns = Generator.generateWordsArr(vm.currentWords.nouns, vm.userWords.nouns, 'nouns', 'story1');
			vm.currentWords.adjectives = Generator.generateWordsArr(vm.currentWords.adjectives, vm.userWords.adjectives, 'adjectives', 'story1');
			vm.currentWords.verbs = Generator.generateWordsArr(vm.currentWords.verbs, vm.userWords.verbs, 'verbs', 'story1');
			vm.currentWords.adverbs = Generator.generateWordsArr(vm.currentWords.adverbs, vm.userWords.adverbs, 'adverbs', 'story1');

		}]);
})();