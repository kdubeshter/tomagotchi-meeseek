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
const img = document.getElementById('meeeseek');
const h = document.getElementById('h');
const hungry = document.getElementById('hungry');
const sleepy = document.getElementById('sleep');
const bored = document.getElementById('bored');
const yearsOld = document.getElementById('age');

const feedBtn = document.getElementById('feed');
const lightBtn = document.getElementById('light');
const playBtn = document.getElementById('play');
// const createBtn = document.getElementById('createPet');
const button = document.getElementsByTagName('button');

class Tomagotchi {
	constructor(hunger, sleepiness, boredom){
		this.hunger = 1;
		this.sleepiness = 1;
		this.boredom = 1;
		this.age = 0;
		this.img = document.querySelector('img');
		this.h = document.querySelector('h3'); // Reuben recommend to move this to game object
											   // can make it dynamic and change what he says
	}	
	// if want to add a button to generate tomagotchi - revisit and refactor
	init(){
	// initial creation of tomagotchi
	 //	this.img.style.visibility = 'hidden';
	 //	this.h.style.visibility = 'hidden'; 
		return this.render();
	}
	render(){
		hungry.textContent = `Hunger: ${this.hunger} out of 10`;
		bored.textContent = `Boredom: ${this.boredom} out of 10`;
		sleepy.textContent = `Sleepiness: ${this.sleepiness} out of 10`;
		yearsOld.textContent = `Age: ${this.age}`;
	}
	feed(){
		meeseek.hunger--
	}
	light(){
		let light = false;
		const bodyColor = document.querySelector('body');
		if(!light){
			bodyColor.style.backgroundColor = 'darkgrey';
			meeseek.sleepiness--;
			light = true;
		} else {
			bodyColor.style.backgroundColor = 'lightyellow'
			meeseek.sleepiness++;
			light = false;
		}
	}
	play(){
		meeseek.boredom--;
	}	
};

let meeseek = new Tomagotchi(1, 1, 1);
meeseek.init;
meeseek.render();

// createBtn.addEventListener('click', meeseek.render);
// removed code related to additional creation of pet (hide / visible elements)

// Game object

// const game = {
// 	display(msg) {
// 	}
// }

// Event Listeners
feedBtn.addEventListener('click', meeseek.feed);

lightBtn.addEventListener('click', meeseek.light);

playBtn.addEventListener('click', meeseek.play);













