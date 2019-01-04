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
	sleepy: 1,
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
	checkHealth(){
		if(this.hunger < 0){
			this.hunger = 0;
		};
		if(this.boredom < 0){
			this.boredom = 0;
		};
		if(this.sleepy < 0){
			this.sleep = 0;
		};
		if(this.hunger >= 10){
			this.dead();
		};
		if(this.boredom >= 10){
			this.dead();
		};
		if(this.sleepy >= 10){
			this.dead();
		}
	},
	render(){ 
		this.checkHealth();
		$('#hungry').html(`Hunger: ${this.hunger} out of 10`);
		$('#bored').html(`Boredom: ${this.boredom} out of 10`);
		$('#sleepy').html(`Sleepiness: ${this.sleepy} out of 10`);
		$('#age').html(`Age: ${this.age}`);
	},
	feed(){
		game.hunger -= 1;
		game.render();
		
		$('body').css('background-color','white');

		// each time feed is selected, create more pets
		const $initPet = $('<img id="init-pet"></img>');
		$initPet.attr('src', 'https://steemitimages.com/DQmfHedFJStzXRDC2R5fnWrAiYJqWaknPaYTfeQWQe8Boxh/flat%2C800x800%2C075%2Cf.u1.jpg');
		$('#pet-img').append($initPet);
		
		$('#init-pet').velocity({
			rotateX: 30,
			translateX: 60,
		}, {
			duration: 5000,
			loop: 1,
			deplay: 10
		});

		// remove other pet images
		$('#play-pet').remove();
		$('#happy-pet').remove();

		// check pet hungry levels
		if(game.hunger > 0){
			$('#speak').html(`mr. ${game.name} is hunnggrrryyy`);
		};	
		if(game.hunger < 5){
			$('#speak').html(`Hi! I'm mr. ${game.name} look at me!`);
		}
	},
	light(){
		//let light = false;
		
		game.sleepy -= 1;
		game.render();		
		
		// pet sleepiness levels
		if(game.sleepy < 0){
			game.sleepy = 0;
		};

		$('#speak').html(`mr. ${game.name} IS TIRED!! Please turn off the light Jerry`);
		$('body').css('background-color','rgb(169,169,169)');

		// change pet img
		$('#init-pet').remove();
		$('#happy-pet').remove();
		$('#init-pet').remove();
		$('#happy-pet').remove();
		$('#init-pet').remove();
		$('#happy-pet').remove();
		$('#init-pet').remove();
		$('#happy-pet').remove();

		const $happyPet = $('<img id="happy-pet"></img>');
		$happyPet.attr('src', 'https://m4gnation.files.wordpress.com/2018/04/mrmeeseeks.png')
		$('#pet-img').append($happyPet);
	},
	play(){
		game.boredom -= 1;
		game.render();

		$('body').css('background-color','white');
		$('#speak').html(`mr. ${game.name} loves to play`);

		const $playImg = $('<img id="play-pet"></img>');
		$playImg.attr('src', 'https://m4gnation.files.wordpress.com/2018/04/mrmeeseeks.png');
		$('#pet-img').append($playImg);

		$('#play-pet').velocity({
			rotateX: "+=360",
			translateX: 100,
		}, 	{
			duration: 2000,
			loop: 2,
			easing: "linear",
			deplay: 5,
		});
		

		$('#init-pet').remove();
		$('#happy-pet').remove();
		$('#init-pet').remove();
		$('#happy-pet').remove();
		$('#init-pet').remove();
		$('#happy-pet').remove();
		$('#init-pet').remove();
		$('#happy-pet').remove();
	},
	aging(){
		// pet shrinks
//		$('img').velocity({width: "-=500"}, 7000);
		if(this.age >= 0){
			this.interval = setInterval( () => {
				if(this.hunger < 0){
					this.hunger = 0;
				}
				this.hunger += 1;
				if(this.sleepy < 0){
					this.sleepy = 0;
				}
				this.sleepy += 1.5;
				if(this.boredom < 0){
					this.boredom = 0;
				}
				this.boredom += 0.25;
				this.age += 2;
				this.render();
			}, 5000);
		if(this.hunger >= 10 || this.sleepy >= 10 || this.boredom >= 10) {
				this.dead();
			}
		}	
	},
	dead(){
		$('#init-pet').remove();
		$('button').remove();
		$('div').remove();


		if($('#dead-img').attr('src') === "https://cdn.dribbble.com/users/4971/screenshots/2846308/mr-meeseeks.png"){

		} else {
			const $deadImg = $('<img id="dead-pet"></img>');
			$deadImg.attr('src', 'https://cdn.dribbble.com/users/4971/screenshots/2846308/mr-meeseeks.png');
			$('body').append($deadImg);
			$('body').css('background-color', 'white');
		}

		$('#speak').remove();
	}
}

// EVENT LISTENERS

// Start game: initial form to enter pet name
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










