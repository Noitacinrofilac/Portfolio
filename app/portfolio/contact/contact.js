var app = angular.module("mainApp",['uiGmapgoogle-maps']);
var contact = {
	email : "hadrien.luttiau@gmail.com",
	address : "Torggatan 26, Skövde 54130, Sweden",
	phone : "+46 7 68 37 47 68",
	linkedin : "www.linkedin.com",
	github : "www.github.com"
}

app.controller('contactController', function($anchorScroll, $location, $scope) {
	this.contact = contact;
	//contact menu
	this.buttonClicked = function(item) {
		console.log("going to " + item);
		console.log("Address: " + this.addressH, "email: " + this.emailH, "phone: " + this.phoneH);
		if ($location.hash() !== 'contact') {
			$location.hash('contact');
		} else {
			$anchorScroll();
		}
	};

	//COPY CONTACTS
	this.copyToClipboard = function(contactInfo) {
		console.log("received : ", contactInfo);
		switch(contactInfo){
			case("email"):
			window.prompt("Copy to clipboard: Ctrl+C, Enter", contact.email);
			break;
			case("address"):
			window.prompt("Copy to clipboard: Ctrl+C, Enter", contact.address);
			break;
			case("phone"):
			window.prompt("Copy to clipboard: Ctrl+C, Enter", contact.phone);
			break;
			case("linkedin"):
			window.prompt("Copy to clipboard: Ctrl+C, Enter", contact.linkedin);
			break;
			case("github"):
			window.prompt("Copy to clipboard: Ctrl+C, Enter", contact.github);
		}
		
	};

}); 

app.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
});
app.controller("someController", function($scope, uiGmapGoogleMapApi) {
    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []
$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {

    });
});