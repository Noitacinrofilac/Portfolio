var app = angular.module("mainApp");
var education = [
{
	school : "Polytech Nice Sophia",
	link : "www.polytechnice.fr/",
	logoSrc : "assets/images/pns.png",
	description : "Engineering diploma equivalent of a Master degree, specialized in distributed application and ubiquitous computing. This speciality contains three main areas: Design of embedded and distributed software application.Technologies needed to design, specify and prototype new ubiquitous services. Design of interactive places and communicating objects.",
	diploma : "Engineering degree (Master) in computer science",
	date : {
		start : 2012,
		end : 2015
	}
}, 
{
	school : "City University of Hong Kong",
	link : "www.cityu.edu.hk",
	logoSrc : "assets/images/cityu.png",
	description : "Exchange semester at the city university of Hong Kong. I was following different Computer Science courses in connection with my 4th year of school at Polytech'Nice",
	diploma:"none",
	date : {
		start : "September 2013",
		end : "December 2013"
	}
	
},
{
	school : "University of Montpellier 2",
	link : "www.umontpellier.fr/",
	logoSrc : "assets/images/um2.jpg",
	description : "University of science with a computer science and engineering focus. This is where I discover computer science and be really into it",
	diploma : "Bacchelor degree in computer science",
	date : {
		start : 2009,
		end : 2012
	}
}];

app.controller('educationController', function(){
	this.educationList = education;
});
