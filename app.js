(function() {
	var app = angular.module('mainApp', ['ngMaterial']);
	var technologies = [{
		id : "HTML",
		desc : "Html5",
		img : "assets/icons/html.png"
	}, {
		id : "CSS",
		desc : "CSS3",
		img : "assets/icons/css.png"
	}, {
		id : "JS",
		desc : "Javascript",
		img : "assets/icons/js.png"
	}, {
		id : "EXPRESS",
		desc : "Express JS",
		img : "assets/icons/express.png"
	}, {
		id : "Angular",
		desc : "AngularJS",
		img : "assets/icons/angular.jpg"
	}, {
		id : "CS",
		desc : "C#",
		img : "assets/icons/csharp.png"
	}, {
		id : "WP8",
		desc : "Windows Phone 8",
		img : "assets/icons/wp8.png"
	}, {
		id : "ASPNET",
		desc : "ASP.NET MVC",
		img : "assets/icons/aspnetmvc.jpg"
	}, {
		id : "JAVA",
		desc : "Java",
		img : "assets/icons/java.png"
	}, {
		id : "MONO",
		desc : "Framework Mono",
		img : "assets/icons/mono.png"
	}, {
		id : "LINUX",
		desc : "Linux",
		img : "assets/icons/linux.png"
	}, {
		id : "PHIDGET",
		desc : "Phidget cards and components",
		img : "assets/icons/phidget.png"
	}, {
		id : "PML",
		desc : "PROcess MEta LAnguage",
		img : "assets/icons/pmlLogo.png"
	}, {
		id : "SPIN",
		desc : "SPIN Framework",
		img : "assets/icons/spinLogo.png"
	}, {
		id : "IOS",
		desc : "IOS",
		img : "assets/icons/ios.png"
	}];

	app.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default').primaryPalette('indigo');
	});
	app.config(function($mdIconProvider) {
		$mdIconProvider.defaultIconSet('node_modules/mdi.svg')
	});
	app.run(function($log, $anchorScroll) {
		$anchorScroll.yOffset = 65;
		// always scroll by 50 extra pixels
		$log.debug("starterApp + ngMaterial running...");
	});

	app.controller('headerController', ['$anchorScroll', '$location', '$scope',
	function($anchorScroll, $location, $scope) {
		$scope.gotoAnchor = function(newHash) {
			if ($location.hash() !== newHash) {
				$location.hash(newHash);
			} else {
				$anchorScroll();
			}
		};
		$scope.display = function() {
			console.log("function display");
		};
	}]);

	app.controller('generalController', function($scope, $filter) {
		this.tech = technologies;
		$scope.getTech = function(techId) {
			var result = $filter('filter')(technologies, function (d) {return d.id === techId;})[0];

			if (result) {
				return result;
			} else {
				var d = "logo " + techId + " unavailable";
				return {
					id : "null",
					img : "assets/icons/undefined.png",
					desc : d
				};
			}
		};
	});
	

})();
