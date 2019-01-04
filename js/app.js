console.log('tomagotchi WoWEE')

// TOMAGOTCHI MINI-PROJECT
// Description
// Let's use our front-end web development skills to create a "living" pet! We'll use HTML, CSS, and JavaScript/jQuery to interact with our pet.

// REQUIREMENTS
// Create a repo for your tomagotchi pet
// make a commit after you finish each one of the following
// Create a Class (JS Class, look at your notes if your forget) for your tomagotchi
// Instatiate your Tomagotchi
// Display a character of your choice on the screen to represent your pet
// Display the following metrics for your pet:
// Hunger (1-10 scale)
// Sleepiness (1-10 scale)
// Boredom (1-10 scale)
// Age
// Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
// Add the ability to name your pet.
// Style the page.
// Increase your pet's age every x minutes
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// You pet should die if Hunger, Boredom, or Sleepiness hits 10.
// Morph your pet at certain ages.
// Animate your pet across the screen while it's alive.
// Extras
// Have your tomagotchi give birth to baby tomagotchi...
// ...with special powers (extend the class)!
// Add an excercise() method to your tomagotchi, that affects certain properties
// Add anything you can think of... use your imagination!

// refractor and add those applicable to game object vs. meeseeks class




// Guide
//const speak = document.getElementById('pet-speak');


// 	<img id="happy-pet" src="https://m4gnation.files.wordpress.com/2018/04/mrmeeseeks.png">
//	<img id="dancing-pet" src="https://cdn140.picsart.com/240164869012212.png?r240x240">
//	<img id="die-pet" src="https://cdn.dribbble.com/users/4971/screenshots/2846308/mr-meeseeks.png">

// Hidden elements on page prior to creating pet

$('#init-pet').css('visibility', 'hidden');
$('#feed').css('visibility', 'hidden');
$('#light').css('visibility', 'hidden');
$('#play').css('visibility', 'hidden');


class Tomagotchi {
	constructor(petName){
		this.name = petName;
		this.age = 0;	
	}
};

const game = {
	pet: 1,
	name: '',
	hunger: 1,
	sleepiness: 1,
	boredom: 1,
	age: 0,
	time: 60,
	timeElapsed: 0,
	startAge: true,
	interval: 0,
	createPet(petName){
	 	$('#init-pet').css('visibility', 'visible');
	 	$('#feed').css('visibility', 'visible');
	 	$('#light').css('visibility', 'visible');
	 	$('#play').css('visibility', 'visible');

		petName = this.name;	
	 	$('#speak').html("Hi! I'm mr. " + petName + " look at me!").css('font-size', '30px');
 		
		$('form').remove();
	 	//const pet = new Tomagotchi();
	 	$('#init-pet').velocity({
			rotateX: 30,
			translateX: 60,
		}, {
			duration: 5000,
			loop: 1,
			deplay: 10
		});

	 	this.render();
	 	this.aging();
	},
	render(){ 
		$('#hungry').html(`Hunger: ${this.hunger} out of 10`);
		$('#bored').html(`Boredom: ${this.boredom} out of 10`);
		$('#sleepy').html(`Sleepiness: ${this.sleepiness} out of 10`);
		$('#age').html(`Age: ${this.age}`);
	},
	feed(){
		game.hunger -= 1;
		game.render();
	},
	light(){
		let light = false;
		if(game.sleepiness === 0){
			$('#speak').html(`mr. ${game.name} is not tired. Let's play and teach Jerry how to swing!`)
		}
		if(!light){
			$('body').css('background-color','rgb(169,169,169)');
			game.sleepiness -= 1;
			light = true;
			game.render();
		} 
		if($('body').css('background-color') === 'rgb(169,169,169)'){ // this part not working
			$('body').css('background-color','lightyellow');
			game.sleepiness += 1;
			light = false;
			game.render();
		}
	},
	play(){
		game.boredom -= 1;
		game.render();
		
		$('#init-pet').remove();

		const $playImg = $('<img id="play-pet"></img>');
		$('#play-pet').attr('src', 'https://m4gnation.files.wordpress.com/2018/04/mrmeeseeks.png');
		$('#pet-img').append($playImg);

		$('#play-pet').velocity({
			rotateX: "+=360",
			translateX: 100,
		}, 	{
			duration: 5000,
			loop: 2,
			easing: "linear",
			deplay: 10
		})
	},
	aging(){
		// pet shrinks
//		$('img').velocity({width: "-=500"}, 7000);
		if(this.age >= 0){
			this.interval = setInterval( () => {
				this.hunger += 1;
				this.sleepiness += 1.5;
				this.boredom += 0.25;
				this.age += 2;
				this.render();
			}, 10000);
		if(this.hunger >= 10 || this.sleepiness >= 10 || this.boredom >= 10) {
				this.dead();
			}
		}	
	},
	dead(){
		$('#init-pet').remove();
		$('body').remove();

		const $deadImg = $('<img id="dead-pet"></img>');
		$('#dead-pet').attr('src', 'https://cdn.dribbble.com/users/4971/screenshots/2846308/mr-meeseeks.png');
		$('title').append($deadImg);

		$('#speak').remove();
	}
}

// Event Listeners
$('form').on('submit', (e) => {
	e.preventDefault();
	
	const petName = $("input[name='name']").val();
	game.name = petName;

	game.createPet();
	game.aging();
})


// Buttons 
$('#feed').on('click', game.feed);
$('#light').on('click', game.light);
$('#play').on('click', game.play);


// Initial Pet Moving











