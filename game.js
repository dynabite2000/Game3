// Empty array to store the story situations
var story = [
  "You wake up in a dark room. It feels cold and damp.",
  "As you walk through the corridor, you hear eerie whispers.",
  "You enter a room filled with broken dolls and flickering lights.",
  "Suddenly, a figure jumps out from the shadows, startling you.",
  "Congratulations! You have successfully defeated the figure and won the game!",
  "You have lost the game. Try again!"
];

// Empty array to store the options for each situation
var options = [
  [
    { text: "Look around", win: false },
    { text: "Stay still", win: false },
    { text: "Listen for any sounds", win: false },
    { text: "Light a match for illumination", win: false }
  ],
  [
    { text: "Follow the whispers", win: false },
    { text: "Run in the opposite direction", win: false },
    { text: "Stay rooted to the spot", win: false },
    { text: "Whisper back and try to communicate", win: false },
    { text: "Collect a Lucky Coin", item: "Lucky Coin", win: false }
  ],
  [
    { text: "Examine the dolls closely", win: false },
    { text: "Ignore the dolls and search for an exit", win: false },
    { text: "Knock the dolls over in frustration", win: false },
    { text: "Collect a Wooden Stake", item: "Wooden Stake", win: false },
    { text: "Use a nearby candle as a light source", win: false }
  ],
  [
    { text: "Fight the figure", win: false },
    { text: "Run for your life", win: false },
    { text: "Hide in the shadows", win: false },
    { text: "Confront the figure and demand answers", win: false },
    { text: "Use a Silver Crucifix", item: "Silver Crucifix", win: false },
    { text: "Use the Lucky Coin", item: "Lucky Coin", win: false },
    { text: "Use the Wooden Stake", item: "Wooden Stake", win: false }
  ],
  [], // Winning situation
  [] // Losing situation
];

// Empty array to store the player's inventory
var inventory = [];

// Variable to track the current situation index
var currentSituation = 0;

// Variable to store the chosen option
var chosenOption = null;

// Variable to track if the game is lost
var gameLost = false;

// Function to display the current situation
function displaySituation() {
  var storyElement = document.getElementById('story');
  var optionsElement = document.getElementById('options');
  var submitButton = document.getElementById('submitButton');
  var nextButton = document.getElementById('nextButton');
  var inventoryElement = document.getElementById('inventory');
  var restartButton = document.getElementById('restartButton');
  var gameContainer = document.querySelector('.container');

  storyElement.textContent = story[currentSituation];

  var buttonsHTML = "";
  var currentOptions = options[currentSituation];

  for (var i = 0; i < currentOptions.length; i++) {
    var option = currentOptions[i];
    var disabled = option.item && !inventory.includes(option.item) ? 'disabled' : '';

    buttonsHTML += '<button onclick="selectOption(' + i + ')" ' + disabled + '>' + option.text + '</button>';
  }

  optionsElement.innerHTML = buttonsHTML;
  nextButton.style.display = 'none';
  submitButton.disabled = false;

  updateInventory();

  if (gameLost) {
    gameContainer.classList.add("game-lost");
  }

  if (currentSituation === story.length - 1 || currentSituation === story.length) {
    submitButton.style.display = 'none';
    nextButton.style.display = 'none';
    restartButton.style.display = 'inline';
  }
}

// Function to select an option
function selectOption(optionIndex) {
  var submitButton = document.getElementById('submitButton');
  var nextButton = document.getElementById('nextButton');

  chosenOption = options[currentSituation][optionIndex];
  submitButton.disabled = true;
  nextButton.style.display = 'inline';

  // Check if the option adds an item to the inventory
  if (chosenOption.item) {
    inventory.push(chosenOption.item);
    updateInventory();
  }
}

// Function to process the chosen option
function processAnswer(option) {
  var nextButton = document.getElementById('nextButton');
  var restartButton = document.getElementById('restartButton');
  var gameContainer = document.querySelector('.container');

  if (option.win) {
    currentSituation = 4; // Winning situation
  } else {
    currentSituation = 5; // Losing situation
  }

  if (currentSituation === story.length - 2) {
    if (inventory.includes("Lucky Coin") && inventory.includes("Wooden Stake")) {
      gameLost = false;
    } else {
      gameLost = true;
    }
  }

  displaySituation();

  if (gameLost) {
    gameContainer.classList.add("game-lost");
  }

  if (currentSituation === story.length - 1 || currentSituation === story.length) {
    submitButton.style.display = 'none';
    nextButton.style.display = 'none';
    restartButton.style.display = 'inline';
  }
}

// Function to go to the next situation
function nextSituation() {
  currentSituation++;
  chosenOption = null;

  displaySituation();
}

// Function to restart the game
function restartGame() {
  currentSituation = 0;
  chosenOption = null;
  inventory = [];
  gameLost = false;

  var gameContainer = document.querySelector('.container');
  var submitButton = document.getElementById('submitButton');
  var nextButton = document.getElementById('nextButton');
  var restartButton = document.getElementById('restartButton');

  gameContainer.classList.remove("game-lost");
  submitButton.style.display = 'inline';
  nextButton.style.display = 'none';
  restartButton.style.display = 'none';

  displaySituation();
}

// Function to update the inventory
function updateInventory() {
  var inventoryList = document.getElementById('inventory-list');
  var inventoryText = document.getElementById('inventory-text');
  inventoryList.innerHTML = "";

  for (var i = 0; i < inventory.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = inventory[i];
    inventoryList.appendChild(listItem);
  }

  if (inventory.length > 0) {
    inventoryText.textContent = "Items collected:";
  } else {
    inventoryText.textContent = "";
  }
}

// Function to start the game
function startGame() {
  var startButton = document.getElementById('startButton');
  startButton.style.display = 'none';

  displaySituation();
}
