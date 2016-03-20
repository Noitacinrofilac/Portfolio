var app = angular.module("mainApp");
var skills = [
{
	name:"Web",
	description:"I am currently working a lpot with web technologies through this website and other side projects",
	details:["Html","CSS","Javascript","Angular"],
	experience:["hylbz","hotw"],
	value:7,
	bgcolor:"bg-orange"
},
{
	name:"Microsoft",
	description:"My experiences were working with this technologies",
	details:["C#", "ASP.NET MVC","WPF mvvc"],
	experience:["shs","scpj"],
	value:8,
	bgcolor:"bg-blue"
}
,
{
	name:"Internet of things",
	description:"The last year focus in my engineering ",
	details:["Linux Kernel", "WCOMP", "Phidget"],
	experience:["wf","sfp","hylbz"],
	value:7,
	bgcolor:"bg-green"
}
,{
	name:"Model checking",
	description:"",
	details:["SPIN","Promela"],
	experience:["shs"],
	value:7,
	bgcolor:"bg-red"
}];

app.controller("skillsController",function($scope,$filter,$interval){
	this.skills = skills;
	this.getProject = function(id){
		var result = $filter('filter')(projects, function (d) {return d.id === id;})[0];
		return result.imgSrc;
	};
});
