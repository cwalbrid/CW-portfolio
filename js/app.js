var app = angular.module('portfolio', []);


app.controller('projectDataCtrl', function($scope){

lightbox.option({
	'showImageNumberLabel': false,
	'wrapAround': true
})

$scope.projectData =  [
	{
		title: 'Number Guess',
		src: 'https://images.unsplash.com/photo-1475439242971-afb6fcc1ba22?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=c221a5935a8ea54887ae7178aeff7725/350x350',
		caption: 'An app that prompts you to correctly guess a number between 1 and 10',
		subdomain: 'http://www.number-guess-lab.colinwalbridge.com',
		description: 'A simple JavaScript app that generates a random integer from 1-10, then prompts users to guess the integer. If a user guesses high, the app prompts them to go lower; if they guess low, it prompts to go higher. The user receives a congratulatory alert when they enter the correct answer.',
		skills: 'JavaScript'
	},
	{
		title: 'To-Do List',
		src: 'https://images.unsplash.com/photo-1473800447596-01729482b8eb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=40eba4c15ec393c84db9c76380d26869',
		caption: 'A to-do list to manage tasks',
		subdomain: 'http://www.to-do-list-lab.colinwalbridge.com',
		description: 'An AngularJS app that displays a list of tasks to accomplish. Users can add new tasks, remove tasks once they’ve been completed, and filter for tasks by keyword(s).',
		skills: 'AngularJS, HTML5, CSS3'
	},
	{
		title: 'Shopping List',
		src: 'https://images.unsplash.com/photo-1473800447596-01729482b8eb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=40eba4c15ec393c84db9c76380d26869',
		caption: 'Add items to your cart and calculate your total cost',
		subdomain: 'http://www.shopping-list-lab.colinwalbridge.com',
		description: 'A JavaScript app that displays a shopping list. The list includes cost for individual items, and the total cost of the list. When users add new items and costs to the list, the app adjusts the total price accordingly',
		skills: 'JavaScript, HTML5, CSS3'
	},
	{
		title: 'Poor Man' + "'" +'s Reddit',
		src: 'https://images.unsplash.com/photo-1473800447596-01729482b8eb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=40eba4c15ec393c84db9c76380d26869',
		caption: 'Displays the top ten posts on the subreddit r/AnimalsBeingBros',
		subdomain: 'http://poor-mans-reddit-lab.colinwalbridge.com',
		description: 'A JavaScript app that uses a JSON request to reddit.com to display the top ten posts from the subreddit r/AnimalsBeingBros',
		skills: 'JSON, jQuery, HTML5, CSS3'
	},
	{
		title: 'Six-Year-Old Simulator',
		src: 'https://images.unsplash.com/photo-1473800447596-01729482b8eb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=40eba4c15ec393c84db9c76380d26869',
		caption: 'An app that spews six-year-old words and phrases',
		subdomain: 'http://www.six-year-old-sim-lab.colinwalbridge.com',
		description: 'An AngularJS app that talks… a lot. Users press different buttons on the app to display a random word or phrase that a six-year-old might say.',
		skills: 'AngularJS, HTML5, CSS3'
	},
	{
		title: 'Mad Libs',
		src: 'https://images.unsplash.com/photo-1473800447596-01729482b8eb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=40eba4c15ec393c84db9c76380d26869',
		caption: 'Create your own mad libs using AngularJS views + routing',
		subdomain: 'http://www.mad-libs-lab.colinwalbridge.com',
		description: 'An AngularJS app that prompts users to enter a set of nouns, verbs, and adjectives on the ‘Form’ page. The user-generated words then populate a set of mad libs when the user navigates to the ‘Libs’ page.',
		skills: 'AngularJS, HTML5, CSS3'
	},
	{
		title: 'Woodward Avenue Cinema',
		src: 'https://images.unsplash.com/photo-1473800447596-01729482b8eb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=40eba4c15ec393c84db9c76380d26869',
		caption: 'An app for reserving movie theatre seats',
		subdomain: 'http://www.midterm-project.colinwalbridge.com',
		description: 'Reserve your seat at the luxurious Woodward Avenue Cinema with this jQuery app. Users select the seat(s) they want to reserve, then enter their name into a confirmation form. Once a seat is reserved, it cannot be selected by another patron.',
		skills: 'jQuery, HTML5, CSS3'
	},
	{
		title: 'Soundscape',
		src: 'https://images.unsplash.com/photo-1473800447596-01729482b8eb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=40eba4c15ec393c84db9c76380d26869',
		caption: 'An AngularJS app that allows users to craft + share moments by pairing music with places',
		subdomain: 'https://soundscapeapp.github.io/public/#',
		description: 'An AngularJS app that allows users to create Soundscapes by attaching tracks from Spotify to a Google Maps location, which can be viewed by other users.',
		skills: 'AngularJS, API, JSON, HTML5, CSS3'
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