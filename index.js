const AURA_PER_CHARACTER = 0.420;
const AURA_PER_SECOND = 4.20;
const AURA_PENALTY = 21;

const REACTION_TIME = 200;
const date = new Date();
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
	"cap/stop the cap",
	"Ohio",
	"only in Ohio",
	"that feeling when you have knee surgery",
	"knee surgery",
	"diddy",
	"diddy party",
	"drake",
];
for (let i = 0; i < brainrotWords.length; i++) {
	brainrotWords[i] = brainrotWords[i].toLowerCase();
}

let usedBrainrotWords = [];

// Setup
let loginForm = document.getElementById("login-form");

let userInformation = document.getElementById("user-information");
userInformation.style.display = "none";

let brainrotInput = document.getElementById("brainrot-input");
brainrotInput.parentElement.style.display = "none";

loginForm.addEventListener("submit", (e) => {
	e.preventDefault();
	
	username = document.getElementById("username-input").value;
	
	document
		.getElementById("user-information")
		.innerHTML = `Username: ${username}<br>Aura: ${aura}<br>Level: ${level}<br>`;
	
	loginForm.style.display = "none";
	userInformation.style.display = "block";
	brainrotInput.parentElement.style.display = "block";
	lastTime = date.getTime();
});

brainrotInput.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		let word = brainrotInput.value.toLowerCase();
		
		if (brainrotWords.includes(word) && !usedBrainrotWords.includes(word)) {
			let currentTime = date.getTime();
			let deltaTime = currentTime - lastTime;
			currentTime = lastTime;

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