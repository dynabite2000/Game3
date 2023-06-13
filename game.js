var storyElement = document.getElementById('story');
var optionsElement = document.getElementById('options');
var submitButton = document.getElementById('submitButton');
var nextButton = document.getElementById('nextButton');
var backgroundMusic = document.getElementById('backgroundMusic');
var gameContainer = document.getElementById('gameContainer');

var currentSituation = 0;
var chosenOption = null;
var clickCount = 0;
var gameLost = false;

var story = [
  "You wake up in a dark room. It feels cold and damp.",
  "As you walk through the corridor, you hear eerie whispers.",
  "You enter a room filled with broken dolls and flickering lights.",
  "Suddenly, a figure jumps out from the shadows, startling you.",
  "Congratulations! You have survived the horror and emerged victorious!"
];

var options = [
  [
    { text: "Look around", win: false },
    { text: "Stay still", win: false },
    { text: "Listen for any sounds", win: false }
  ],
  [
    { text: "Follow the whispers", win: false },
    { text: "Run in the opposite direction", win: false },
    { text: "Stay rooted to the spot", win: false }
  ],
  [
    { text: "Examine the dolls closely", win: false },
    { text: "Ignore the dolls and search for an exit", win: false },
    { text: "Knock the dolls over in frustration", win: false }
  ],
  [
    { text: "Fight the figure", win: true },
    { text: "Run for your life", win: false },
    { text: "Hide in the shadows", win: false }
  ],
  [] // Winning situation
];

function displaySituation() {
  storyElement.textContent = story[currentSituation];

  optionsElement.innerHTML = "";
  if (options[currentSituation].length > 0) {
    var optionsHTML = "";
    for (var i = 0; i < options[currentSituation].length; i++) {
      optionsHTML += `<button onclick="selectOption(${i})">${options[currentSituation][i].text}</button>`;
    }
    optionsElement.innerHTML = optionsHTML;
    submitButton.style.display = "block";
    nextButton.style.display = "none";
  } else {
    submitButton.style.display = "none";
    nextButton.style.display = "block";
  }
}

function selectOption(option) {
  chosenOption = options[currentSituation][option];
  submitButton.disabled = false;
}

function submitAnswer() {
  if (chosenOption) {
    clickCount++;
    processAnswer(chosenOption);
  }
}

function processAnswer(option) {
  if (option.win) {
    currentSituation = 4; // Winning situation
  } else {
    currentSituation++;
  }
  
  if (currentSituation === story.length - 1) {
    gameLost = true;
  }
  
  displaySituation();
  chosenOption = null;
  submitButton.disabled = true;
  
  if (gameLost) {
    gameContainer.classList.add("game-lost");
  }
}

function nextSituation() {
  currentSituation++;
  displaySituation();
}

function gameWon() {
  storyElement.textContent = story[currentSituation];
  optionsElement.innerHTML = "";
  submitButton.style.display = "none";
  nextButton.style.display = "none";
}

// Play background music when the page loads
document.addEventListener('DOMContentLoaded', function() {
  backgroundMusic.play();
});

displaySituation();
