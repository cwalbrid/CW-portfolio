var app = angular.module('portfolio', []);


app.controller('projectDataCtrl', function($scope){

lightbox.option({
	'showImageNumberLabel': false,
	'wrapAround': true,
	'positionFromTop': 35
});

$scope.projectData =  [
	{
		title: 'To-Do List',
		thumbSrc: '../img/thumb-to-do.jpg',
		scapeSrc: '../img/scape-to-do.jpg',
		caption: 'A to-do list to manage tasks',
		subdomain: 'http://www.to-do-list-lab.colinwalbridge.com',
		description: 'An AngularJS app that displays a list of tasks to accomplish. Users can add new tasks, remove completed tasks, and filter for tasks by keyword(s).',
		skills: 'AngularJS, HTML5, CSS3'
	},
	{
		title: 'Shopping Cart',
		thumbSrc: '../img/thumb-shopping-cart.jpg',
		scapeSrc: '../img/scape-shopping-cart.jpg',
		caption: 'Add items to your cart and calculate your total cost',
		subdomain: 'http://www.shopping-list-lab.colinwalbridge.com',
		description: 'A JavaScript app that displays a shopping list. The list includes cost for individual items, and the total cost of the list. When users add new items and costs to the list, the app adjusts the total price accordingly.',
		skills: 'JavaScript, HTML5, CSS3'
	},
	{
		title: 'Poor Man' + "'" +'s Reddit',
		thumbSrc: '../img/thumb-reddit.jpg',
		scapeSrc: '../img/scape-reddit.jpg',
		caption: 'Displays the top ten posts on the subreddit r/AnimalsBeingBros',
		subdomain: 'http://poor-mans-reddit-lab.colinwalbridge.com',
		description: 'A JavaScript app that uses a JSON request to reddit.com to display the top ten posts from the subreddit r/AnimalsBeingBros.',
		skills: 'JSON, jQuery, HTML5, CSS3'
	},
	{
		title: 'Six-Year-Old Simulator',
		thumbSrc: '../img/thumb-six-year-sim.jpg',
		scapeSrc: '../img/scape-six-year-sim.jpg',
		caption: 'An app that spews six-year-old words and phrases',
		subdomain: 'http://www.six-year-old-sim-lab.colinwalbridge.com',
		description: 'An AngularJS app that talks- a lot. Users press different buttons on the app to display a random word or phrase that a six-year-old might say.',
		skills: 'AngularJS, HTML5, CSS3'
	},
	{
		title: 'Fantastic Libs and Where to Find Them',
		thumbSrc: '../img/thumb-fantastic-libs.jpg',
		scapeSrc: '../img/scape-fantastic-libs.jpg',
		caption: 'Record your observations of magical beasts in this magical Mad Libs app',
		subdomain: 'http://www.mad-libs-lab.colinwalbridge.com',
		description: 'A Harry Potter-themed AngularJS app that prompts users to enter a set of words on the Field Notes page. The user-generated words then populate a journal entry on the Expedition Journal page.',
		skills: 'AngularJS, HTML5, CSS3'
	},
	{
		title: 'Woodward Avenue Cinema',
		thumbSrc: '../img/thumb-midterm.jpg',
		scapeSrc: '../img/scape-midterm.jpg',
		caption: 'An app for reserving movie theatre seats',
		subdomain: 'http://www.midterm-project.colinwalbridge.com',
		description: 'Reserve your seat at the luxurious Woodward Avenue Cinema with this jQuery app. Users select the seat(s) they want to reserve, then enter their name into a confirmation form. Once a seat is reserved, it cannot be selected by another patron.',
		skills: 'jQuery, HTML5, CSS3'
	},
	{
		title: 'Soundscape',
		thumbSrc: '../img/thumb-soundscape.jpg',
		scapeSrc: '../img/scape-soundscape.jpg',
		caption: 'An AngularJS app that allows users to craft + share moments by pairing music with places',
		subdomain: 'https://soundscapeapp.github.io/public/#',
		description: 'An AngularJS app that allows users to create Soundscapes by attaching tracks from Spotify to a Google Maps location, which can be viewed by other users.',
		skills: 'AngularJS, API, JSON, HTML5, CSS3'
	},
	{
		title: 'Brick Oven Pizza Co.',
		thumbSrc: '../img/thumb-brick-oven-pizza.jpg',
		scapeSrc: '../img/scape-brick-oven-pizza.jpg',
		caption: 'An AngularJS site built for the fictional Brick Oven Pizza Company',
		subdomain: 'https://www.brick-oven-pizza-project.colinwalbridge.com',
		description: 'View the specialty pizzas for each franchise of the fictional Brick Oven Pizza Company while learning the history of its founder, Giuseppe Giacosa.',
		skills: 'AngularJS, HTML5, CSS3'
	}
];



//
});

app.directive('myProject', function(){
	return {
		restrict: 'E',
		templateUrl: '../project.html'
	};
});

//slideshow
var slideIndex = 1;
console.log(slideIndex)
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}