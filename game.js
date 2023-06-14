// Empty array to store the story situations
var story = [
  "You wake up in a dark room. It feels cold and damp.",
  "As you walk through the corridor, you hear eerie whispers.",
  "You enter a room filled with broken dolls and flickering lights.",
  "Suddenly, a figure jumps out from the shadows, startling you.",
  "Congratulations! You have successfully defeated the figure and won the game!",
  "You have lost the game. Try again!",
  "You find yourself in a dusty library with shelves full of ancient books.",
  "A mysterious key catches your eye on a small table.",
  "The room is filled with mirrors reflecting distorted images.",
  "You encounter a riddle written on the wall.",
  "A locked chest stands in the center of the room.",
  "You step into a hidden chamber with an ominous atmosphere.",
  "You enter a room with a ticking clock on the wall.",
  "A trapdoor suddenly opens beneath your feet.",
  "You come across a shrine with strange symbols.",
  "A ghostly apparition appears in front of you.",
  "You find yourself in a maze of twisting corridors.",
  "A painting on the wall starts dripping blood.",
  "You stumble upon a room full of ancient artifacts.",
  "A gust of wind slams the door shut behind you."
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
    { text: "Use the Lucky Coin", item: "Lucky Coin", win: true },
    { text: "Use the Wooden Stake", item: "Wooden Stake", win: true }
  ],
  [], // Winning situation
  [], // Losing situation
  [
    { text: "Inspect the books for clues", win: false },
    { text: "Check the drawers of the desk", win: false },
    { text: "Pull a random book from the shelf", win: false },
    { text: "Take the mysterious key", item: "Mysterious Key", win: false }
  ],
  [
    { text: "Touch one of the mirrors", win: false },
    { text: "Search for hidden switches", win: false },
    { text: "Break the mirrors", win: false },
    { text: "Collect a Crystal Shard", item: "Crystal Shard", win: false },
    { text: "Use a Mirror Shard", item: "Mirror Shard", win: false }
  ],
  [
    { text: "Attempt to solve the riddle", win: false },
    { text: "Ignore the riddle and search elsewhere", win: false },
    { text: "Recite a cryptic phrase aloud", win: false },
    { text: "Collect a Riddle Scroll", item: "Riddle Scroll", win: false },
    { text: "Use the Quill Pen", item: "Quill Pen", win: false }
  ],
  [
    { text: "Try to open the locked chest", win: false },
    { text: "Look for a keyhole in the chest", win: false },
    { text: "Inspect the surrounding area", win: false },
    { text: "Collect a Rusty Key", item: "Rusty Key", win: false },
    { text: "Use the Mysterious Key", item: "Mysterious Key", win: false }
  ],
  [
    { text: "Explore the chamber", win: false },
    { text: "Check for hidden passages", win: false },
    { text: "Inspect the peculiar markings", win: false },
    { text: "Collect a Crystal Orb", item: "Crystal Orb", win: false },
    { text: "Use a Magic Wand", item: "Magic Wand", win: false }
  ],
  [
    { text: "Try to fix the clock mechanism", win: false },
    { text: "Search the room for a hidden key", win: false },
    { text: "Smash the clock to find something inside", win: false },
    { text: "Collect a Pocket Watch", item: "Pocket Watch", win: false },
    { text: "Use the Ticking Key", item: "Ticking Key", win: false }
  ],
  [
    { text: "Grab onto the ledge and climb back up", win: false },
    { text: "Examine the trapdoor for any mechanisms", win: false },
    { text: "Jump into the darkness below", win: false },
    { text: "Collect a Grappling Hook", item: "Grappling Hook", win: false },
    { text: "Use a Rope", item: "Rope", win: false }
  ],
  [
    { text: "Pray to the shrine", win: false },
    { text: "Study the symbols closely", win: false },
    { text: "Light the candles around the shrine", win: false },
    { text: "Collect a Sacred Amulet", item: "Sacred Amulet", win: false },
    { text: "Use a Holy Symbol", item: "Holy Symbol", win: false }
  ],
  [
    { text: "Approach the apparition calmly", win: false },
    { text: "Run away from the ghost", win: false },
    { text: "Try to communicate with the spirit", win: false },
    { text: "Collect a Spirit Bottle", item: "Spirit Bottle", win: false },
    { text: "Use the Ghost Whisperer", item: "Ghost Whisperer", win: false }
  ],
  [
    { text: "Choose a direction and start walking", win: false },
    { text: "Leave breadcrumbs to mark your path", win: false },
    { text: "Scream for help", win: false },
    { text: "Collect a Map", item: "Map", win: false },
    { text: "Use a Compass", item: "Compass", win: false }
  ],
  [
    { text: "Investigate the painting further", win: false },
    { text: "Cover the painting to stop the dripping", win: false },
    { text: "Leave the room immediately", win: false },
    { text: "Collect a Blood-Soaked Cloth", item: "Blood-Soaked Cloth", win: false },
    { text: "Use the Dripping Paintbrush", item: "Dripping Paintbrush", win: false }
  ],
  [
    { text: "Inspect the artifacts for any clues", win: false },
    { text: "Search for a hidden compartment", win: false },
    { text: "Arrange the artifacts in a specific order", win: false },
    { text: "Collect an Ancient Relic", item: "Ancient Relic", win: false },
    { text: "Use an Enchanted Scroll", item: "Enchanted Scroll", win: false }
  ],
  [
    { text: "Try to force the door open", win: false },
    { text: "Look for an alternative exit", win: false },
    { text: "Investigate the source of the gust of wind", win: false },
    { text: "Collect a Wind Catcher", item: "Wind Catcher", win: false },
    { text: "Use the Wind Whisperer", item: "Wind Whisperer", win: false }
  ]
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

  // Check if the chosen option leads to winning or losing
  if (chosenOption.win) {
    currentSituation = story.length - 2; // Winning situation index
  } else if (currentSituation !== story.length - 1) {
    currentSituation = story.length - 1; // Losing situation index
    gameLost = true;
  }

  displaySituation();
}

// Function to go to the next situation
function nextSituation() {
  currentSituation++;
  chosenOption = null;
  gameLost = false;
  displaySituation();
}

// Function to restart the game
function restartGame() {
  currentSituation = 0;
  chosenOption = null;
  gameLost = false;
  inventory = [];
  displaySituation();
}

// Function to update the inventory
function updateInventory() {
  var inventoryElement = document.getElementById('inventory');
  var inventoryHTML = "";

  if (inventory.length > 0) {
    inventoryHTML = "<strong>Inventory:</strong> ";
    inventoryHTML += inventory.join(", ");
  }

  inventoryElement.innerHTML = inventoryHTML;
}

displaySituation();
