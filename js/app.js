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
const initImg = document.getElementById('init-pet');
initImg.style.visibility = 'hidden';
// const happyImg = document.getElementById('happy-pet');
// happyImg.style.visibility = 'hidden';
// const danceImg = document.getElementById('dancing-pet');
// danceImg.style.visibility = 'hidden';
// const deadImg = document.getElementById('die-pet');
// deadImg.style.visibility = 'hidden';

const feedBtn = document.getElementById('feed');
feedBtn.style.visibility = 'hidden';
const lightBtn = document.getElementById('light');
lightBtn.style.visibility = 'hidden';
const playBtn = document.getElementById('play');
playBtn.style.visibility = 'hidden';
// const createBtn = document.getElementById('createPet');
const button = document.getElementsByTagName('button');

class Tomagotchi {
	constructor(name){
		this.name = name;	
		this.hunger = 1;
		this.sleepiness = 1;
		this.boredom = 1;
		this.age = 0;
		this.img = document.querySelector('img');
		this.speak = document.getElementById('pet-speak')
	};	
	// if want to add a button to generate tomagotchi - revisit and refactor
	init(name){
	// initial creation of tomagotchi
	 //	this.img.style.visibility = 'hidden';
	 //	this.h.style.visibility = 'hidden'; 
	 	const pet = new Tomagotchi(name);

		game.render();
	}
	feed(){
		meeseek.hunger--;
		this.hunger--;
	}
	light(){
		let light = false;
		const bodyColor = document.querySelector('body');
		if(!light){
			bodyColor.style.backgroundColor = 'darkgrey';
			meeseek.sleepiness--;
			this.sleepiness--;
			light = true;
		} else {
			bodyColor.style.backgroundColor = 'lightyellow'
			meeseek.sleepiness++;
			this.sleepiness++;
			light = false;
		}
	}
	play(){
		meeseek.boredom--;
		this.boredom--;
	}	
	getName(){

	}
};

// createBtn.addEventListener('click', meeseek.render);
// removed code related to additional creation of pet (hide / visible elements)


const game = {
	pet: 1,
	speak: document.querySelector('h3'),
	createPet(name){
	 	initImg.style.visibility = 'visible';
	 	feedBtn.style.visibility = 'visible';
	 	lightBtn.style.visibility = 'visible';
	 	playBtn.style.visibility = 'visible';


		this.speak.val(`Hi, my name is ${name}`)

		const form = document.querySelector('form');
		form.style.visibility = 'hidden';

		Tomagotchi.init();
	},
	render(){
		$('#hungry').val(`Hunger: ${Tomagotchi.hunger} out of 10`);
		$('#bored').val(`Boredom: ${Tomagotchi.boredom} out of 10`);
		$('#sleepy').val(`Sleepiness: ${Tomagotchi.sleepiness} out of 10`);
		$('#age').val(`Age: ${Tomagotchi.age}`);
	}

}

// Event Listeners
const form = document.querySelector('form')
const petName = document.querySelector('pet-name')

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const petName = $("input[name='pet']").val();
	Tomagotchi.name = petName;
	console.log(petName, 'this is his / her name');
	console.log(e.target)
	//game.createPet();
})


// Buttons / Event Listeners
$('#feed').on('click', Tomagotchi.feed);
$('#light').on('click', Tomagotchi.light);
$('#play').on('click', Tomagotchi.play);















