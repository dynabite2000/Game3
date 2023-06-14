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
    { text: "Whisper back and try to communicate", win: false }
  ],
  [
    { text: "Examine the dolls closely", win: false },
    { text: "Ignore the dolls and search for an exit", win: false },
    { text: "Knock the dolls over in frustration", win: false },
    { text: "Collect one of the dolls for protection", win: false },
    { text: "Use a nearby candle as a light source", win: false }
  ],
  [
    { text: "Fight the figure", win: Math.random() < 0.55 },
    { text: "Run for your life", win: false },
    { text: "Hide in the shadows", win: false },
    { text: "Confront the figure and demand answers", win: false },
    { text: "Use a silver crucifix from your pocket", win: false },
    { text: "Use a wooden stake from your bag", win: false },
    { text: "Use the lucky coin from your pocket", win: Math.random() < 0.55 }
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
    buttonsHTML += '<button onclick="selectOption(' + i + ')">' + currentOptions[i].text + '</button>';
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
    currentSituation++;
  }

  if (currentSituation === story.length - 2) {
    if (inventory.includes("Lucky Coin")) {
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

// Function to update the inventory display
function updateInventory() {
  var inventoryList = document.getElementById('inventory-list');
  inventoryList.innerHTML = '';

  inventory.forEach(function (item) {
    var listItem = document.createElement('li');
    listItem.textContent = item;
    inventoryList.appendChild(listItem);
  });

  if (inventory.length > 0) {
    inventoryElement.style.display = 'block';
  } else {
    inventoryElement.style.display = 'none';
  }
}

// Function to start the game
function startGame() {
  var startButton = document.getElementById('startButton');
  var gameContainer = document.querySelector('.container');

  startButton.style.display = 'none';
  gameContainer.classList.remove("game-lost");
  displaySituation();
}

// Function to move to the next situation
function nextSituation() {
  var nextButton = document.getElementById('nextButton');
  var gameContainer = document.querySelector('.container');

  if (currentSituation === story.length - 1 && !gameLost) {
    gameContainer.classList.remove("game-lost");
  }

  if (currentSituation === story.length) {
    restartGame();
  } else {
    currentSituation++;
    displaySituation();
  }
}

// Function to restart the game
function restartGame() {
  var submitButton = document.getElementById('submitButton');
  var restartButton = document.getElementById('restartButton');
  var gameContainer = document.querySelector('.container');

  currentSituation = 0;
  chosenOption = null;
  gameLost = false;
  inventory = [];
  updateInventory();
  displaySituation();
  submitButton.style.display = 'inline';
  restartButton.style.display = 'none';
  gameContainer.classList.remove("game-lost");
}

// Start the game
updateInventory();
