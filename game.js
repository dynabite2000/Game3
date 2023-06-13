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
  "You are paralyzed with fear as the figure reveals its sharp teeth and claws, lunging towards you...",
  "The whispers grow louder and closer, overwhelming your senses...",
  "The dolls come to life, their glassy eyes fixated on you as they advance menacingly...",
  "You find yourself cornered by the figure, unable to escape its grasp..."
];

var options = [
  [
    { text: "Look around", answer: "look" },
    { text: "Stay still", answer: "stay" }
  ],
  [
    { text: "Investigate the whispers", answer: "investigate" },
    { text: "Run away", answer: "run away" }
  ],
  [
    { text: "Examine the dolls", answer: "examine" },
    { text: "Leave the room", answer: "leave" }
  ],
  [
    { text: "Fight the figure", answer: "fight" },
    { text: "Run for your life", answer: "run" }
  ],
  [], // Dead end 1
  [], // Dead end 2
  [], // Dead end 3
  []  // Dead end 4
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
    processAnswer(chosenOption.answer);
  }
}

function processAnswer(answer) {
  if (currentSituation >= story.length - 1) {
    gameOver();
    return;
  }

  if (answer === options[currentSituation][0].answer) {
    currentSituation++;
  }

  chosenOption = null;
  submitButton.disabled = true;
  displaySituation();
}

function nextSituation() {
  currentSituation++;
  displaySituation();
}

function gameOver() {
  storyElement.textContent = "Game Over. You have met a gruesome fate.";
  optionsElement.innerHTML = "";
  submitButton.style.display = "none";
  nextButton.style.display = "none";
}

// Play background music when the page loads
document.addEventListener('DOMContentLoaded', function() {
  backgroundMusic.play();
});

displaySituation();
