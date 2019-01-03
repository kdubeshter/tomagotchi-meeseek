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
	};	

};

// createBtn.addEventListener('click', meeseek.render);
// removed code related to additional creation of pet (hide / visible elements)


const game = {
	pet: 1,
	name: '',
	hunger: 1,
	sleepiness: 1,
	boredom: 1,
	age: 0,
	createPet(petName){
	 	$('#init-pet').css('visibility', 'visible');
	 	$('#feed').css('visibility', 'visible');
	 	$('#light').css('visibility', 'visible');
	 	$('#play').css('visibility', 'visible');

		petName = this.name;	
	 	$('#speak').html("Hi! I'm Mr. " + petName + " look at me");
	 	console.log("Hi! I'm Mr. " + petName + " look at me");
 		
		$('form').remove();

	 	const pet = new Tomagotchi();
	 	this.render();
	},
	render(){ 
		$('#hungry').val(`Hunger: ${this.hunger} out of 10`);
		$('#bored').val(`Boredom: ${this.boredom} out of 10`);
		$('#sleepy').val(`Sleepiness: ${this.sleepiness} out of 10`);
		$('#age').val(`Age: ${this.age}`);
	},
	feed(){
		this.hunger--;
	},
	light(){
		let light = false;
		if(!light){
			$('body').css('background-color','darkgrey');
			this.sleepiness--;
			light = true;
		} else {
			$('body').css('background-color','lightyellow');
			this.sleepiness++;
			light = false;
		}
	},
	play(){
		this.boredom--;
	}	
}

// Event Listeners

$('form').on('submit', (e) => {
	e.preventDefault();
	
	const petName = $("input[name='name']").val();
	game.name = petName;

	game.createPet();
})


// Buttons / Event Listeners
$('#feed').on('click', game.feed);
$('#light').on('click', game.light);
$('#play').on('click', game.play);



$('img').velocity({
	rotateX: 30,
	translateX: 60,
}, {
	duration: 5000,
	loop: 3,
	deplay: 10
})











