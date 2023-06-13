var storyElement = document.getElementById('story');
var optionsElement = document.getElementById('options');
var answerInputElement = document.getElementById('answerInput');
var backgroundMusic = document.getElementById('backgroundMusic');

var currentSituation = 0;

var story = [
  "You wake up in a dark room. It feels cold and damp.",
  "As you walk through the corridor, you hear eerie whispers.",
  "You enter a room filled with broken dolls and flickering lights.",
  "Suddenly, a figure jumps out from the shadows, startling you."
];

var options = [
  [],
  ["Investigate the whispers", "Run away"],
  ["Examine the dolls", "Leave the room"],
  ["Fight the figure", "Run for your life"]
];

var answers = [
  "",
  "investigate",
  "examine",
  "fight"
];

function displaySituation() {
  storyElement.textContent = story[currentSituation];

  if (options[currentSituation].length > 0) {
    var buttonsHTML = "";
    for (var i = 0; i < options[currentSituation].length; i++) {
      buttonsHTML += "<button onclick='selectOption(" + i + ")'>" + options[currentSituation][i] + "</button>";
    }
    optionsElement.innerHTML = buttonsHTML;
  } else {
    optionsElement.innerHTML = "";
  }
}

function selectOption(option) {
  currentSituation++;
  displaySituation();
}

function submitAnswer() {
  var answer = answerInputElement.value.toLowerCase();

  if (answer === answers[currentSituation]) {
    currentSituation++;
  }

  answerInputElement.value = "";
  displaySituation();
}

// Play background music when the page loads
document.addEventListener('DOMContentLoaded', function() {
  backgroundMusic.play();
});

displaySituation();