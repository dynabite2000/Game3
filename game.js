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
    { text: "Sing a lullaby to the dolls", win: false },
    { text: "Use the Lucky Coin", item: "Lucky Coin", win: true, collect: "Lucky Coin" }
  ],
  [
    { text: "Scream and run away", win: false },
    { text: "Fight back with all your strength", win: true },
    { text: "Freeze in terror", win: false },
    { text: "Close your eyes and hope it disappears", win: false }
  ],
  [
    { text: "Restart", win: false }
  ],
  [
    { text: "Restart", win: false }
  ],
  [
    { text: "Search for a book on ancient spells", win: false },
    { text: "Pull random books off the shelves", win: false },
    { text: "Dust off the shelves and organize the books", win: false },
    { text: "Leave the library and explore elsewhere", win: false }
  ],
  [
    { text: "Pick up the key", win: false, collect: "Key" },
    { text: "Leave the key and keep exploring", win: false }
  ],
  [
    { text: "Look at your reflection in the mirrors", win: false },
    { text: "Smash the mirrors to escape", win: false },
    { text: "Cover the mirrors with a cloth", win: false },
    { text: "Try to break the curse on the mirrors", win: false }
  ],
  [
    { text: "Solve the riddle", win: false },
    { text: "Ignore the riddle and move on", win: false }
  ],
  [
    { text: "Use the key to unlock the chest", win: false, collect: "Golden Key" },
    { text: "Leave the chest and continue exploring", win: false }
  ],
  [
    { text: "Investigate further into the chamber", win: false },
    { text: "Leave the chamber and go back", win: false }
  ],
  [
    { text: "Examine the clock", win: false },
    { text: "Wind up the clock", win: false },
    { text: "Break the clock", win: false },
    { text: "Leave the room and keep searching", win: false }
  ],
  [
    { text: "Try to grab onto something", win: false },
    { text: "Close your eyes and hope for the best", win: false },
    { text: "Scream for help", win: false }
  ],
  [
    { text: "Examine the strange symbols", win: false },
    { text: "Leave the shrine and explore further", win: false }
  ],
  [
    { text: "Talk to the ghostly apparition", win: false },
    { text: "Run away from the apparition", win: false },
    { text: "Ignore the apparition and keep searching", win: false },
    { text: "Try to banish the ghostly figure", win: false }
  ],
  [
    { text: "Navigate through the corridors carefully", win: false },
    { text: "Take random turns and hope for the best", win: false },
    { text: "Leave breadcrumbs to mark your path", win: false },
    { text: "Follow a faint light in the distance", win: false }
  ],
  [
    { text: "Leave the room immediately", win: false },
    { text: "Examine the painting more closely", win: false },
    { text: "Try to clean the painting", win: false },
    { text: "Cover the painting with a cloth", win: false }
  ],
  [
    { text: "Inspect the artifacts closely", win: false },
    { text: "Touch the artifacts", win: false },
    { text: "Take a photo of the artifacts", win: false },
    { text: "Leave the room and explore further", win: false }
  ],
  [
    { text: "Try to open the door", win: false },
    { text: "Look for another way out", win: false },
    { text: "Call for help", win: false }
  ]
];

// Variables to keep track of game progress
var situationIndex = 0;
var inventory = [];

// Function to start the game
function startGame() {
  // Hide the start button and show the submit button
  document.getElementById("startButton").style.display = "none";
  document.getElementById("submitButton").style.display = "block";
  
  // Play background music
  document.getElementById("backgroundMusic").play();
  
  // Display the first situation
  displaySituation();
}

// Function to display the current situation
function displaySituation() {
  // Get the current situation text
  var situationText = story[situationIndex];
  
  // Update the story element
  var storyElement = document.getElementById("story");
  storyElement.textContent = situationText;
  
  // Clear the options
  var optionsElement = document.getElementById("options");
  optionsElement.innerHTML = "";
  
  // Check if the game has been won or lost
  if (situationIndex === 4 || situationIndex === 5) {
    // Hide the submit button and show the restart button
    document.getElementById("submitButton").style.display = "none";
    document.getElementById("restartButton").style.display = "block";
  } else {
    // Show the submit button and hide the restart button
    document.getElementById("submitButton").style.display = "block";
    document.getElementById("restartButton").style.display = "none";
    
    // Display the options for the current situation
    var currentOptions = options[situationIndex];
    currentOptions.forEach(function(option) {
      var button = document.createElement("button");
      button.textContent = option.text;
      button.onclick = function() {
        selectOption(option);
      };
      optionsElement.appendChild(button);
    });
  }
}

// Function to select an option
function selectOption(option) {
  // Check if the option collects an item
  if (option.collect) {
    inventory.push(option.collect);
    updateInventory();
  }
  
  // Update the situation index based on the option
  if (option.win) {
    situationIndex = 4;
  } else {
    situationIndex = 5;
  }
  
  // Display the next situation
  displaySituation();
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

// Function to restart the game
function restartGame() {
  // Reset the game variables
  situationIndex = 0;
  inventory = [];
  
  // Update the inventory
  updateInventory();
  
  // Display the first situation
  displaySituation();
}
