// Define the story situations and options
var story = [
  "You find yourself in a dark and mysterious forest.",
  "You stumble upon an old abandoned cabin.",
  "A strange creature crosses your path.",
  "You discover a hidden treasure map.",
  "You encounter a rickety bridge over a deep chasm.",
  "A mysterious fog engulfs the area.",
  "You come across a cave entrance.",
  "A talking owl appears and offers guidance.",
  "You find a locked chest with a cryptic inscription.",
  "A gust of wind reveals a hidden passage.",
  "You reach a crossroads with multiple paths.",
  "A peculiar key lies on the ground."
];

var options = [
  [
    { text: "Follow a faint trail", scenario: 1 },
    { text: "Light a torch and explore", scenario: 2 },
    { text: "Stay put and wait for daylight", scenario: 3 }
  ],
  [
    { text: "Enter the cabin cautiously", scenario: 4 },
    { text: "Knock on the cabin door", scenario: 5 },
    { text: "Inspect the cabin's surroundings", scenario: 6 }
  ],
  [
    { text: "Approach the creature slowly", scenario: 7 },
    { text: "Run away as fast as you can", scenario: 8 },
    { text: "Observe the creature from a distance", scenario: 9 }
  ],
  // Add more scenarios and options here
  // ...
];

// Variables to keep track of the current situation and items collected
var currentSituation = 0;
var collectedItems = [];

// Function to display the current situation and available options
function displaySituation() {
  var situation = story[currentSituation];
  var optionsList = options[currentSituation];

  // Display the current situation
  document.getElementById("situation").textContent = situation;

  // Clear the previous options
  var optionsElement = document.getElementById("options");
  optionsElement.innerHTML = "";

  // Display the available options
  for (var i = 0; i < optionsList.length; i++) {
    var option = optionsList[i];
    var optionButton = document.createElement("button");
    optionButton.textContent = option.text;
    optionButton.addEventListener("click", selectOption.bind(null, option));
    optionsElement.appendChild(optionButton);
  }
}

// Function to handle the selection of an option
function selectOption(option) {
  // Update the current situation based on the selected option's scenario
  currentSituation = option.scenario;

  // Display the next situation
  displaySituation();
}

// Display the initial situation
displaySituation();
