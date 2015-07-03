var app = angular.module('portfolio', []);
app.controller('mainController', ['$scope', function($scope) {

	$scope.hi = 'Hej!';
	$scope.intro = 'Mitt namn är Niklas Almqvist. Jag är en 17 år gammal app- och webbutvecklare baserad i Stockholm.';

	$scope.changeLanguage = function(language) {
		var lang = language;
		switch (lang) {
			case 'Swedish': 
				$scope.hi = 'Hej!';
				$scope.intro = 'Mitt namn är Niklas Almqvist. Jag är en 17 år gammal app- och webbutvecklare baserad i Stockholm.';
				break;
			case 'Norwegian':
				$scope.hi = 'Hei!';
				$scope.intro = 'Mitt navn er Niklas Almqvist. Jeg er en 17 år gammel app- og webutvikler basert i Stockholm.';
				break;
			case 'English':
				$scope.hi = 'Hi!';
				$scope.intro = 'My name is Niklas Almqvist. I am a 17 years old app and webdeveloper based in Stockholm';
				break;
			default: 
				$scope.hi = 'Hej!';
				$scope.intro = 'Mitt namn är Niklas Almqvist. Jag är en 17 år gammal app- och webbutvecklare baserad i Stockholm.';
				break;
		}
	}

}]);