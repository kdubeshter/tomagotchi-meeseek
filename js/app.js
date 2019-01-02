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


class tomagotchi {
	constructor(hunger, sleepiness, boredom){
		this.hunger = 0;
		this.sleepiness = 0;
		this.boredom = 0;
		this.age = 0;
		this.img = document.querySelector('img');
		this.h = document.querySelector('h3');
	}	
	// init(){
	// 	// initial creation of tomagotchi
	// 	this.img.style.visibility = 'hidden';
	// 	this.h.style.visibility = 'hidden';
	// 	this.render();
	// }
	// render(){
	// 	this.img.style.visibility = 'visible';
	// 	this.h.style.visibility = 'visible';


	// }
}

let meeseek = new tomagotchi(0, 0, 0);


const img = document.querySelector('img');
const h = document.querySelector('h3');

document.querySelector('button').addEventListener('click', tomagotchi.init);
















