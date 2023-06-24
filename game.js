// Game variables
var inventory = [];
var itemsToCollect = 3;

// Story situations
var story = [
  {
    text: "You wake up in a dark room. It feels cold and damp.",
    choices: [
      { text: "Look around", nextSituation: 1 },
      { text: "Stay still", nextSituation: 2 },
      { text: "Listen for any sounds", nextSituation: 3 },
      { text: "Light a match for illumination", nextSituation: 4 }
    ]
  },
  {
    text: "As you walk through the corridor, you hear eerie whispers.",
    choices: [
      { text: "Follow the whispers", nextSituation: 5 },
      { text: "Run in the opposite direction", nextSituation: 6 },
      { text: "Stay rooted to the spot", nextSituation: 7 },
      { text: "Whisper back and try to communicate", nextSituation: 8 },
      { text: "Collect a Lucky Coin", nextSituation: 9, collect: "Lucky Coin" }
    ]
  },
  // Add more story situations with choices here...
];

// Function to start the game
function startGame() {
  showSituation(0);
}

// Function to show a situation
function showSituation(situationIndex) {
  var situation = story[situationIndex];
  
  // Update story text
  var storyElement = document.getElementById("story");
  storyElement.textContent = situation.text;
  
  // Clear previous choices
  var optionsElement = document.getElementById("options");
  optionsElement.innerHTML = "";
  
  // Display choices for the current situation
  situation.choices.forEach(function(choice) {
    var button = document.createElement("button");
    button.textContent = choice.text;
    button.addEventListener("click", function() {
      selectChoice(choice, situationIndex);
    });
    optionsElement.appendChild(button);
  });
}

// Function to select a choice
function selectChoice(choice, situationIndex) {
  // Check if the choice collects an item
  if (choice.collect) {
    inventory.push(choice.collect);
    updateInventory();
    
    // Check if the player has collected all items
    if (inventory.length === itemsToCollect) {
      winGame();
      return;
    }
  }
  
  // Update the next situation based on the choice
  var nextSituation = choice.nextSituation;
  
  // Check if the game has been lost
  if (nextSituation === undefined) {
    loseGame();
    return;
  }
  
  // Display the next situation
  showSituation(nextSituation);
}

// Function to update the inventory list
function updateInventory() {
  var inventoryList = document.getElementById("inventory-list");
  inventoryList.innerHTML = "";
  inventory.forEach(function(item) {
    var listItem = document.createElement("li");
    listItem.textContent = item;
    inventoryList.appendChild(listItem);
  });
}

// Function to handle winning the game
function winGame() {
  var storyElement = document.getElementById("story");
  storyElement.textContent = "Congratulations! You have successfully collected all the items and won the game!";
  document.getElementById("options").innerHTML = "";
  document.getElementById("restartButton").style.display = "block";
}

// Function to handle losing the game
function loseGame() {
  var storyElement = document.getElementById("story");
  storyElement.textContent = "You have lost the game. Try again!";
  document.getElementById("options").innerHTML = "";
  document.getElementById("restartButton").style.display = "block";
}

// Function to restart the game
function restartGame() {
  inventory = [];
  updateInventory();
  startGame();
}
