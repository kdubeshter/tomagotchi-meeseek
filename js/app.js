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
	 	this.render();
	 	this.aging();
	},
	render(){ 
		$('#hungry').html(`Hunger: ${this.hunger} out of 10`);
		$('#bored').html(`Boredom: ${game.boredom} out of 10`);
		$('#sleepy').html(`Sleepiness: ${game.sleepiness} out of 10`);
		$('#age').html(`Age: ${game.age}`);
	},
	feed(){
		game.hunger -= 1;
		$('#hungry').html(`Hunger: ${game.hunger} out of 10`);
	},
	light(){
		let light = false;
		if(!light){
			$('body').css('background-color','darkgrey');
			game.sleepiness -= 1;
			$('#sleepy').html(`Hunger: ${game.sleepiness} out of 10`);
			light = true;
		} else {  // this part not working
			$('body').css('background-color','lightyellow');
			game.sleepiness += 1;
			$('#sleepy').html(`Hunger: ${game.sleepiness} out of 10`);
			light = false;
		}
	},
	play(){
		game.boredom -= 1;
		$('#bored').html(`Boredom: ${game.boredom} out of 10`);
	},
	aging(){
		// pet shrinks
		$('img').velocity({width: "-=500"}, 7000);
		if(this.age > 0){
			this.interval = setInterval( () => {
				this.hunger += 1;
				game.sleepiness += 1.5;
				game.boredom += 0.7;
				this.render();
			}, 5000);

		}
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
$('img').velocity({
	rotateX: 30,
	translateX: 60,
}, {
	duration: 5000,
	loop: 3,
	deplay: 10
})











