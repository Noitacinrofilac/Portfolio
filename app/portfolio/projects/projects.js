var app = angular.module("mainApp");
var projects = [{
	id : "hylbz",
	category : 1,
	name : "Hylbz",
	desc : "Application allowing the users to connected together into a room. This application allow the users to share files and their location. Full stack application ",
	technos : ["JS", "Angular", "EXPRESS"],
	time : 3,
	members : 4,
	imgSrc:"assets/images/projects/flow.png"
}, {
	id : "wf",
	category : 1,
	name : "Who's Hungry",
	desc : "Windows phone application allowing the users to know how many time they stop by a fast food. The user is allow to visit two times a week a fast food. Once this limit reached the application will create notifications alerting the users. The application is using the phone GPS and is linked with the OSM API.",
	technos : ["WP8", "CS"],
	time : 3,
	members : 3,
	imgSrc:"assets/images/projects/flow.png"
}, {
	id : "sfp",
	category : 1,
	name : "Smart Flower Pot",
	desc : "Creation of a smart flower pot from the specification to a final product. The flower pot system allows the users to receive notification describing the plant's needs. The flower pot will actually pour water thanks to a pomp as well.",
	technos : ["MONO", "LINUX", "PHIDGET"],
	time : 3,
	members : 3,
	imgSrc:"assets/images/projects/flow.png"
}, {
	id : "hotw",
	category : 2,
	name : "Hash on the web",
	desc : "This project intend to give a portfolio of my experience and project with a new design. It also allows me to work on my web technologies //// This project intend to give a portfolio of my experience and project with a new design. It also allows me to work on my web technologiesThis project intend to give a portfolio of my experience and project with a new design. It also allows me to work on my web technologiesThis project intend to give a portfolio of my experience and project with a new design. It also allows me to work on my web technologiesThis project intend to give a portfolio of my experience and project with a new design. It also allows me to work on my web technologies",
	technos : ["JS", "Angular"],
	time : 1,
	members : 1,
	imgSrc:"assets/images/projects/testImage.png"
}, {
	id : "scpj",
	category : 2,
	name : "Online survey creator",
	desc : "Development of a SaaS allowing the user to create wide surveys",
	technos : ["CS"],
	time : 1,
	member : 1,
	imgSrc:"assets/images/projects/startengosurv.png"
}, {
	id : "shs",
	category : 2,
	name : "Model checker for Smart Home System",
	desc : "Development of a model checker for smart home system ",
	technos : ["PML", "SPIN", "CS"],
	time : 1,
	member : 1,
	imgSrc:"assets/images/projects/modelchecking.png"
}, {
	id : "gios",
	category : 2,
	name : "GAme development on IOS",
	desc : "Development of a game for Ipad",
	technos : ["IOS"],
	time : 1,
	member : 1,
	imgSrc:"assets/images/projects/ipad.png"
}];
app.controller("projectController", function($scope) {
	$scope.projects = projects;
	this.projectList = projects;
}); 