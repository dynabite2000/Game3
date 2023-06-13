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
    { text: "Look around", questions: [
      "You see a flickering light at the end of the room. What do you do?",
      "You notice a strange noise coming from behind a door. What do you do?"
    ]},
    { text: "Stay still", questions: [
      "You hear footsteps approaching. What do you do?",
      "You feel a cold breeze. What do you do?"
    ]}
  ],
  [
    { text: "Investigate the whispers", questions: [
      "You see a shadowy figure in the corner. What do you do?",
      "You hear a disembodied voice whispering your name. What do you do?"
    ]},
    { text: "Run away", questions: [
      "You come across a dead end. What do you do?",
      "You find a hidden passage. What do you do?"
    ]}
  ],
  [
    { text: "Examine the dolls", questions: [
      "One of the dolls starts moving. What do you do?",
      "You find a note hidden among the dolls. What do you do?"
    ]},
    { text: "Leave the room", questions: [
      "You encounter a locked door. What do you do?",
      "You find a staircase leading down. What do you do?"
    ]}
  ],
  [
    { text: "Fight the figure", questions: [
      "You grab a nearby weapon. What do you do next?",
      "The figure lunges at you. How do you react?"
    ]},
    { text: "Run for your life", questions: [
      "You sprint down the corridor. Where do you go?",
      "You stumble upon a hidden room. What do you do?"
    ]}
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
  var questions = option.questions;
  var randomIndex = Math.floor(Math.random() * questions.length);
  storyElement.textContent = questions[randomIndex];
  optionsElement.innerHTML = "";
  submitButton.style.display = "none";
  nextButton.style.display = "block";
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
