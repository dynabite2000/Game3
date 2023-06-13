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
  [] // Winning situation
];

var inventory = [];

function processAnswer(option) {
  if (option.win) {
    currentSituation = 4; // Winning situation
  } else {
    currentSituation++;
  }
  
  if (currentSituation === story.length - 1) {
    if (inventory.includes("Lucky Coin")) {
      gameLost = false;
    } else {
      gameLost = true;
    }
  }
  
  // Check if the option adds an item to the inventory
  if (option.item) {
    inventory.push(option.item);
  }
  
  displaySituation();
  chosenOption = null;
  submitButton.disabled = true;
  
  if (gameLost) {
    gameContainer.classList.add("game-lost");
  }
}
