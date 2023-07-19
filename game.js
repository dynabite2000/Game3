// Game code with multiple-choice questions and random generated data

// Helper function to generate a random story situation
function generateRandomSituation() {
  const randomSituation = "You find yourself in a mysterious room. " + Math.random().toString(36).substring(2, 15);
  return randomSituation;
}

// Helper function to generate random multiple-choice options
function generateRandomOptions() {
  const randomOptions = [];
  for (let i = 0; i < 4; i++) {
    const randomOptionText = "Option " + (i + 1) + ": " + Math.random().toString(36).substring(2, 10);
    randomOptions.push({ text: randomOptionText, win: Math.random() < 0.2 }); // Approx. 20% chance of being a win option
  }
  return randomOptions;
}

// Generate random data for stories and options
var story = [];
var options = [];

for (let i = 0; i < 10; i++) {
  story.push(generateRandomSituation());
  options.push(generateRandomOptions());
}

// Variables to keep track of the current situation and items collected
var currentSituation = 0;
var collectedItems = [];

// Function to display the current situation and available options as multiple-choice questions
function displaySituation() {
  var situation = story[currentSituation];
  var optionsList = options[currentSituation];

  // Display the current situation
  document.getElementById("story").textContent = situation;

  // Clear the previous options
  var optionsElement = document.getElementById("options");
  optionsElement.innerHTML = "";

  // Display the available options as multiple-choice questions
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
  // Check if the option has a collectible item
  if (option.collect) {
    collectedItems.push(option.collect);
  }

  // Check if the option leads to a win situation
  if (option.win) {
    currentSituation = 4; // Set the win situation index
  } else {
    currentSituation++; // Move to the next situation
  }

  // Display the next situation
  displaySituation();
}

// Function to start the game
function startGame() {
  currentSituation = 0;
  collectedItems = [];
  displaySituation();
  document.getElementById("startButton").style.display = "none";
  document.getElementById("restartButton").style.display = "inline";
  document.getElementById("inventory").style.display = "block";
}

// Function to restart the game
function restartGame() {
  currentSituation = 0;
  collectedItems = [];
  displaySituation();
  document.getElementById("inventory-list").innerHTML = "";
}

// Display the initial situation and hide the restart button
displaySituation();
document.getElementById("restartButton").style.display = "none";
