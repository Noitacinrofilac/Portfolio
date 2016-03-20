var app = angular.module("mainApp");

var jobs = [
{
	company : "National Institute of informatics",
	link : "www.nii.ac.jp/en/",
	logoSrc : "assets/images/nii.gif",
	subject : "Creation of a Smart Home model checker",
	description : "The project's main goal was to provide a framework which will detect the conflicts between the applications in a smart system. It will then ask the user for the desired actions and adjust the system's definition.\nThis project is developed in C# and the core part uses Model Checking techniques as Promela code, LTL formulas and SPIN framework.",
	technologies : ["CS", "PML", "SPIN"],
	date : {
		start : "March 2015",
		end : "September 2015"
	}
},
{
	company : "Soft Convergence",
	link : "www.softconvergence.com",
	logoSrc : "assets/images/sc.png",
	subject : "Developer internship on ASP.NET mvc",
	description : "Design and development of modules and interfaces of a Software as a Service (SaaS) with Microsoft technologies and the Microsoft Azure platform.\nMy main job was the development of a website for the creation of survey using ASP.NET MVC, Entity Framework and the web technologies as HTML5, CSS3 and Javascript libraries as JSRender and JQuery.",
	technologies : ["CS", "ASPNET", "HTML", "CSS", "JS"],
	date : {
		start : "July 2014",
		end : "August 2014"
	}
}];



app.controller("experienceController", [function() {
	this.experienceList = jobs;
}]);
