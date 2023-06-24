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
  {
    text: "The whispers grow louder as you approach a crossroad.",
    choices: [
      { text: "Take the left path", nextSituation: 10 },
      { text: "Take the right path", nextSituation: 11 },
      { text: "Go straight ahead", nextSituation: 12 },
      { text: "Turn back and return to the starting point", nextSituation: 13 },
      { text: "Collect a Rusty Key", nextSituation: 14, collect: "Rusty Key" }
    ]
  },
  {
    text: "You stumble upon a dimly lit room with a mysterious object on a pedestal.",
    choices: [
      { text: "Approach the object cautiously", nextSituation: 15 },
      { text: "Inspect the room further", nextSituation: 16 },
      { text: "Leave the room immediately", nextSituation: 17 },
      { text: "Examine the object from a distance", nextSituation: 18 },
      { text: "Collect an Ancient Amulet", nextSituation: 19, collect: "Ancient Amulet" }
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
    if (!inventory.includes(choice.collect)) {
      var button = document.createElement("button");
      button.textContent = choice.text;
      button.addEventListener("click", function() {
        selectChoice(choice, situationIndex);
      });
      optionsElement.appendChild(button);
    }
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
      showEnding("win");
      return;
    }
  }
  
  var nextSituationIndex = choice.nextSituation;
  
  // Check if the player has lost the game
  if (nextSituationIndex === undefined) {
    showEnding("lose");
    return;
  }
  
  showSituation(nextSituationIndex);
}

// Function to update the inventory
function updateInventory() {
  var inventoryList = document.getElementById("inventory-list");
  inventoryList.innerHTML = "";
  
  inventory.forEach(function(item) {
    var listItem = document.createElement("li");
    listItem.textContent = item;
    inventoryList.appendChild(listItem);
  });
}

// Function to show the ending
function showEnding(result) {
  var storyElement = document.getElementById("story");
  var optionsElement = document.getElementById("options");
  var restartButton = document.getElementById("restartButton");
  
  if (result === "win") {
    storyElement.textContent = "Congratulations! You have collected all the items and won the game.";
  } else {
    storyElement.textContent = "Game over. You have lost.";
  }
  
  optionsElement.innerHTML = "";
  restartButton.style.display = "block";
}

// Function to restart the game
function restartGame() {
  inventory = [];
  updateInventory();
  startGame();
  document.getElementById("restartButton").style.display = "none";
  document.getElementById("submitButton").style.display = "block";
}

// Function to start the game when the page loads
window.onload = function() {
  startGame();
};
