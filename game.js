var storyElement = document.getElementById('story');
var optionsElement = document.getElementById('options');
var submitButton = document.getElementById('submitButton');
var nextButton = document.getElementById('nextButton');
var backgroundMusic = document.getElementById('backgroundMusic');

var currentSituation = 0;
var chosenOption = null;

var story = [
  "You wake up in a dark room. It feels cold and damp.",
  "As you walk through the corridor, you hear eerie whispers.",
  "You enter a room filled with broken dolls and flickering lights.",
  "Suddenly, a figure jumps out from the shadows, startling you.",
  "Congratulations! You have survived the horror and emerged victorious!",
  "You bravely fight back against the figure, using all your strength and willpower...",
  "With a surge of adrenaline, you overpower the figure and escape its clutches!",
  "The figure overpowers you, its ferocity unmatched. You have met a gruesome fate."
];

var options = [
  [
    { text: "Look for a light switch", next: [0, 1, 2] },
    { text: "Feel your way around the room", next: [0, 1, 3] },
    { text: "Call out for help", next: [0, 1, 4] }
  ],
  [
    { text: "Follow the whispers", next: [1, 2, 5] },
    { text: "Run in the opposite direction", next: [1, 2, 6] },
    { text: "Stay rooted to the spot", next: [1, 2, 7] }
  ],
  [
    { text: "Examine the dolls closely", next: [2, 3, 8] },
    { text: "Ignore the dolls and search for an exit", next: [2, 3, 9] },
    { text: "Knock the dolls over in frustration", next: [2, 3, 10] }
  ],
  [
    { text: "Fight back with all your strength", next: [3, 4, 11] },
    { text: "Try to reason with the figure", next: [3, 4, 12] },
    { text: "Run away as fast as you can", next: [3, 4, 13] }
  ],
  [], // Winning situation
  [], // Fight successful
  []  // Fight unsuccessful
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
    processAnswer(chosenOption);
  }
}

function processAnswer(option) {
  var nextSituation = option.next[Math.floor(Math.random() * option.next.length)];
  currentSituation = nextSituation;
  displaySituation();
  chosenOption = null;
  submitButton.disabled = true;
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

function gameLost() {
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
