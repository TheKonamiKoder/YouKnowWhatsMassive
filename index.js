const AURA_PER_CHARACTER = 2.10;
const AURA_PER_SECOND = 4.20;
const AURA_PENALTY = 30;

const TIMER_STARTING = 69;	// for testing 
let remainingTime = TIMER_STARTING;
let timerIntervalID;

const REACTION_TIME = 200;
let lastTime = 0;

let username = "";
let aura = 0;
let level = "Noob";

let brainrotWords = [
	"skibidi",
	"skibidi toilet",
	"gyatt",
	"mewing",
	"mew",
	"rizz",
	"rizzing",
	"rizzler",
	"on Skibidi",
	"sigma",
	"what the sigma",
	"Ohio",
	"bussin",
	"cook",
	"cooking",
	"let him cook",
	"baddie",
	"Skibidi rizz",
	"fanum tax",
	"Fanum taxing",
	"drake",
	"nonchalant dread head",
	"aura",
	"grimace shake",
	"edging",
	"edge",
	"goon",
	"gooning",
	"looks maxing",
	"alpha",
	"griddy",
	"Chris Tyson",
	"diddy",
	"low taper fade",
	"massive",
	"crazy",
	"maxxing",
	"imagine if ninja got a low taper fade",
	"put the fries in the bag",
	"egypt property mogul",
	"john cena",
	"baby gronk",
	"livvy dunne",
	"on skib",
	"duke Dennis",
	"I see trees of breen",
	"oh when the saints go marching in",
	"blud",
	"lil bro",
	"bite the curb",
	"bazinga",
	"brisket song. English or Spanish",
	"5 nights at diddys",
	"devious lick",
	"Fanta in my system song",
	"Qaundale dingle",
	"Sus",
	"sussy",
	"imposter",
	"among us",
	"TikTok rizz party",
	"oi oi oi",
	"devious",
	"Ei ei ei",
	"ratio",
	"L",
	"L bozo",
	"L + ratio",
	"brain rot",
	"ishowspeed/ishowmeat",
	"bing chilling",
	"bombaclat",
	"what da dog doin",
	"mog",
	"mogging",
	"yap",
	"yapping",
	"yapper",
	"sticking out your gyatt for the rizzler",
	"caseoh",
	"goonmaxing",
	"Freddy fazbear",
	"Kai cenat",
	"Harlem shake",
	"glizzy",
	"Smurf cat",
	"Kai cenat rizz",
	"digital circus",
	"1 2 buckle my shoe",
	"oil up",
	"did you pray today",
	"cap",
	"stop the cap",
	"Ohio",
	"only in Ohio",
	"that feeling when you have knee surgery",
	"knee surgery",
	"diddy",
	"diddy party",
	"drake",
	"grinch",
	"knee surgery",
	"as the kids say",
	"ts pmo",
	"get out",
];
for (let i = 0; i < brainrotWords.length; i++) {
	brainrotWords[i] = brainrotWords[i].toLowerCase();
}

let usedBrainrotWords = [];

// Setup
let introduction = document.getElementById("introduction");

let loginForm = document.getElementById("login-form");

let userInformation = document.getElementById("user-information");
userInformation.style.display = "none";

let brainrotInput = document.getElementById("brainrot-input");
brainrotInput.parentElement.style.display = "none";

let timer = document.getElementById("timer");
timer.style.display = "none";

let gameOverMessage = document.getElementById("game-over-message");
gameOverMessage.style.display = "none";

function prettyPrintTime(time) {
	return `${Math.floor(time / 60)}:${(time % 60)
		.toLocaleString("en-UK", {minimumIntegerDigits: 2, useGrouping: false})}`
}

function decrementTimer() {
	if (remainingTime != 0) {
		remainingTime -= 1;
		
		document
			.getElementById("timer")
			.innerHTML = prettyPrintTime(remainingTime);
	} else {
		clearInterval(timerIntervalID);

		gameOver();
	}
}

function gameOver() {
	let currentTime = Date.now();
	console.log(currentTime);
	console.log(lastTime);
	let deltaTime = currentTime - lastTime;
	currentTime = lastTime;

	aura -= (AURA_PER_SECOND * ((deltaTime - REACTION_TIME) / 1000));

	console.log(deltaTime);
	console.log(AURA_PER_SECOND * ((deltaTime - REACTION_TIME) / 1000));

	document
		.getElementById("user-information")
		.innerHTML = `Username: ${username}<br>Aura: ${aura.toFixed(1)}<br>Level: ${level}<br>`;

	brainrotInput.parentElement.style.display = "none";
	timer.style.display = "none";
	
	gameOverMessage.style.display = "block";

	userInformation.className = "centered";
}

// Starts the game after the user creates their character
loginForm.addEventListener("submit", (e) => {
	e.preventDefault();
	
	username = document.getElementById("username-input").value;
	
	document
		.getElementById("user-information")
		.innerHTML = `Username: ${username}<br>Aura: ${aura}<br>Level: ${level}<br>`;
	
	introduction.style.display = "none";
	loginForm.style.display = "none";
	
	userInformation.style.display = "block";
	brainrotInput.parentElement.style.display = "block";
	timer.style.display = "block";

	document
		.getElementById("timer")
		.innerHTML = prettyPrintTime(remainingTime);

	timerIntervalID = setInterval(decrementTimer, 1000);

	lastTime = Date.now();
	console.log(lastTime)
});

// Checks if the user entered brainrot and calculates their aura loss/gain
brainrotInput.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		let word = brainrotInput.value.toLowerCase();
		
		if (brainrotWords.includes(word) && !usedBrainrotWords.includes(word)) {
			let currentTime = Date.now();
			let deltaTime = currentTime - lastTime;
			lastTime = currentTime;

			aura += (word.length * AURA_PER_CHARACTER) - (AURA_PER_SECOND * ((deltaTime - REACTION_TIME) / 1000));
			console.log((word.length * AURA_PER_CHARACTER) - (AURA_PER_SECOND * ((deltaTime - REACTION_TIME) / 1000)));
			console.log(aura);

			usedBrainrotWords.push(word);
		} else {
			aura -= AURA_PENALTY;
		}
		
		document
			.getElementById("user-information")
			.innerHTML = `Username: ${username}<br>Aura: ${aura.toFixed(1)}<br>Level: ${level}<br>`;
		
		brainrotInput.value = "";
	}
});