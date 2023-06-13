var storyElement = document.getElementById('story');
var optionsElement = document.getElementById('options');
var optionsForm = document.getElementById('optionsForm');
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
  ]
];

function displaySituation() {
  storyElement.textContent = story[currentSituation];

  optionsElement.innerHTML = "";
  if (options[currentSituation].length > 0) {
    var optionsHTML = "";
    for (var i = 0; i < options[currentSituation].length; i++) {
      optionsHTML += `<label><input type="radio" name="option" value="${options[currentSituation][i].answer}">${options[currentSituation][i].text}</label>`;
    }
    optionsElement.innerHTML = optionsHTML;
  }
}

function submitOptions(event) {
  event.preventDefault();
  var selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    var answer = selectedOption.value;
    processAnswer(answer);
  }
}

function processAnswer(answer) {
  if (answer === options[currentSituation][0].answer) {
    currentSituation++;
  }

  displaySituation();
}

// Play background music when the page loads
document.addEventListener('DOMContentLoaded', function() {
  backgroundMusic.play();
});

optionsForm.addEventListener('submit', submitOptions);

displaySituation();
