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
  "A gust of wind slams the door shut behind you.",
  "You discover a secret passage behind a bookshelf.",
  "You find a small potion bottle on a dusty shelf.",
  "The room is filled with spider webs and creepy crawlies.",
  "You encounter a talking skull with glowing red eyes.",
  "A hidden message is revealed when lightning strikes.",
  "You enter a room with a broken staircase.",
  "A strange, glowing portal appears in front of you.",
  "You discover a hidden room with a crystal ball.",
  "A swarm of bats flies out of a nearby chamber.",
  "You stumble upon a locked door with a cryptic code.",
  "A faded journal lies on a table, filled with clues.",
  "You encounter a mystical fountain with glowing water.",
  "A cursed treasure chest glimmers in the dim light.",
  "You find yourself in a room with an eerie silence.",
  "A haunting melody fills the air, mesmerizing you.",
  "You discover a secret path hidden behind a waterfall."
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
    { text: "Attack the figure with a nearby object", win: false },
    { text: "Hide and observe the figure's movements", win: false },
    { text: "Try to reason with the figure", win: false }
  ],
  [
    { text: "Start a new game", win: false }
  ],
  [
    { text: "Start a new game", win: false }
  ],
  [
    { text: "Search for a book about magic spells", win: false },
    { text: "Check if any books are missing from the shelves", win: false },
    { text: "Read a random book to pass the time", win: false },
    { text: "Dust off the books and arrange them neatly", win: false },
    { text: "Collect a Magic Wand", item: "Magic Wand", win: false }
  ],
  [
    { text: "Pick up the key", win: false, collect: "Key" },
    { text: "Leave the key and continue exploring", win: false }
  ],
  [
    { text: "Look at your reflection in the mirrors", win: false },
    { text: "Break the mirrors in frustration", win: false },
    { text: "Cover the mirrors with cloth", win: false },
    { text: "Try to communicate with your reflection", win: false }
  ],
  [
    { text: "Decipher the riddle", win: false },
    { text: "Ignore the riddle and search the room", win: false },
    { text: "Recite a riddle in response", win: false },
    { text: "Use the Magic Wand", item: "Magic Wand", win: true, collect: "Magic Wand" }
  ],
  [
    { text: "Try to unlock the chest with the key", win: false },
    { text: "Inspect the chest for any traps", win: false },
    { text: "Give up and continue exploring", win: false },
    { text: "Use the Magic Wand", item: "Magic Wand", win: false }
  ],
  [
    { text: "Investigate the source of the ominous atmosphere", win: false },
    { text: "Leave the chamber and continue exploring", win: false },
    { text: "Search for hidden compartments or doors", win: false },
    { text: "Perform a ritual to dispel the atmosphere", win: false },
    { text: "Collect a Crystal Shard", item: "Crystal Shard", win: false }
  ],
  [
    { text: "Try to fix the ticking clock", win: false },
    { text: "Smash the clock to make it stop", win: false },
    { text: "Ignore the clock and continue exploring", win: false },
    { text: "Listen carefully to the ticking sound", win: false }
  ],
  [
    { text: "Try to grab onto something", win: false },
    { text: "Freefall and see where you land", win: false },
    { text: "Use the Crystal Shard", item: "Crystal Shard", win: false },
    { text: "Scream for help", win: false }
  ],
  [
    { text: "Examine the symbols closely", win: false },
    { text: "Touch the symbols in a specific order", win: false },
    { text: "Leave the shrine and continue exploring", win: false },
    { text: "Collect a Sacred Amulet", item: "Sacred Amulet", win: false }
  ],
  [
    { text: "Try to communicate with the apparition", win: false },
    { text: "Run away from the ghostly figure", win: false },
    { text: "Stay and observe the ghost's behavior", win: false },
    { text: "Use the Sacred Amulet", item: "Sacred Amulet", win: true, collect: "Sacred Amulet" }
  ],
  [
    { text: "Follow a random corridor", win: false },
    { text: "Leave breadcrumbs to mark your path", win: false },
    { text: "Hug the right wall and keep walking", win: false },
    { text: "Use the Crystal Shard", item: "Crystal Shard", win: false },
    { text: "Collect a Compass", item: "Compass", win: false }
  ],
  [
    { text: "Examine the painting more closely", win: false },
    { text: "Cover the painting with a cloth", win: false },
    { text: "Leave the room and continue exploring", win: false },
    { text: "Use the Magic Wand", item: "Magic Wand", win: false }
  ],
  [
    { text: "Inspect the artifacts for any hidden clues", win: false },
    { text: "Take one of the artifacts with you", win: false },
    { text: "Leave the room and continue exploring", win: false },
    { text: "Use the Crystal Shard", item: "Crystal Shard", win: false },
    { text: "Collect an Ancient Relic", item: "Ancient Relic", win: false }
  ],
  [
    { text: "Try to force the door open", win: false },
    { text: "Look for another way to exit the room", win: false },
    { text: "Bang on the door and shout for help", win: false },
    { text: "Use the Sacred Amulet", item: "Sacred Amulet", win: false }
  ],
  [
    { text: "Pull random books to see if any open a secret passage", win: false },
    { text: "Recite an incantation to reveal the passage", win: false },
    { text: "Inspect the bookshelf for any hidden switches", win: false },
    { text: "Give up and continue exploring", win: false },
    { text: "Collect a Book of Spells", item: "Book of Spells", win: false }
  ],
  [
    { text: "Inspect the potion bottle more closely", win: false },
    { text: "Drink the potion without hesitation", win: false },
    { text: "Leave the potion bottle and continue exploring", win: false },
    { text: "Use the Crystal Shard", item: "Crystal Shard", win: false },
    { text: "Collect a Healing Potion", item: "Healing Potion", win: false }
  ],
  [
    { text: "Try to clear the spider webs from your path", win: false },
    { text: "Walk carefully through the spider-infested room", win: false },
    { text: "Use the Book of Spells to repel the spiders", win: false },
    { text: "Scream and panic", win: false }
  ],
  [
    { text: "Try to have a conversation with the talking skull", win: false },
    { text: "Throw the talking skull across the room", win: false },
    { text: "Ignore the talking skull and continue exploring", win: false },
    { text: "Use the Sacred Amulet", item: "Sacred Amulet", win: false }
  ],
  [
    { text: "Examine the message revealed by lightning", win: false },
    { text: "Try to decipher the hidden message", win: false },
    { text: "Leave the room and continue exploring", win: false },
    { text: "Use the Crystal Shard", item: "Crystal Shard", win: false },
    { text: "Collect a Lightning Rod", item: "Lightning Rod", win: false }
  ],
  [
    { text: "Try to repair the broken staircase", win: false },
    { text: "Jump across the broken steps", win: false },
    { text: "Search for an alternate route", win: false },
    { text: "Use the Book of Spells", item: "Book of Spells", win: false },
    { text: "Collect a Grappling Hook", item: "Grappling Hook", win: false }
  ],
  [
    { text: "Step through the glowing portal", win: false },
    { text: "Avoid the portal and continue exploring", win: false },
    { text: "Investigate the portal for any clues", win: false },
    { text: "Use the Crystal Shard", item: "Crystal Shard", win: false },
    { text: "Collect a Portal Key", item: "Portal Key", win: false }
  ],
  [
    { text: "Peer into the crystal ball for insights", win: false },
    { text: "Shake the crystal ball to see what happens", win: false },
    { text: "Leave the crystal ball and continue exploring", win: false },
    { text: "Use the Magic Wand", item: "Magic Wand", win: false },
    { text: "Collect a Vision Scroll", item: "Vision Scroll", win: false }
  ],
  [
    { text: "Try to shoo the bats away", win: false },
    { text: "Run through the swarm of bats", win: false },
    { text: "Use the Lightning Rod to scare the bats", win: false },
    { text: "Cower in fear and wait for the bats to disperse", win: false }
  ],
  [
    { text: "Try different combinations of the code", win: false },
    { text: "Search for clues that might reveal the code", win: false },
    { text: "Give up and continue exploring", win: false },
    { text: "Use the Book of Spells", item: "Book of Spells", win: false },
    { text: "Collect a Decoder Ring", item: "Decoder Ring", win: false }
  ],
  [
    { text: "Read the journal to gather information", win: false },
    { text: "Ignore the journal and continue exploring", win: false },
    { text: "Search the table for any hidden compartments", win: false },
    { text: "Use the Magic Wand", item: "Magic Wand", win: false },
    { text: "Collect a Journal Page", item: "Journal Page", win: false }
  ],
  [
    { text: "Inspect the fountain and take a sip", win: false },
    { text: "Fill a bottle with the glowing water", win: false },
    { text: "Leave the fountain and continue exploring", win: false },
    { text: "Use the Crystal Shard", item: "Crystal Shard", win: false },
    { text: "Collect a Fountain Ring", item: "Fountain Ring", win: false }
  ],
  [
    { text: "Try to open the cursed treasure chest", win: false },
    { text: "Leave the chest and continue exploring", win: false },
    { text: "Use the Magic Wand", item: "Magic Wand", win: false },
    { text: "Use the Decoder Ring to decipher the curse", win: false }
  ],
  [
    { text: "Listen carefully for any sounds", win: false },
    { text: "Search the room for any hidden clues", win: false },
    { text: "Leave the room and continue exploring", win: false },
    { text: "Use the Sacred Amulet", item: "Sacred Amulet", win: false }
  ],
  [
    { text: "Try to resist the melody's influence", win: false },
    { text: "Dance to the haunting melody", win: false },
    { text: "Leave the room to escape the melody", win: false },
    { text: "Use the Crystal Shard", item: "Crystal Shard", win: false },
    { text: "Collect a Melody Whistle", item: "Melody Whistle", win: false }
  ],
  [
    { text: "Follow the secret path behind the waterfall", win: false },
    { text: "Avoid the secret path and continue exploring", win: false },
    { text: "Inspect the waterfall for any hidden passages", win: false },
    { text: "Use the Magic Wand", item: "Magic Wand", win: false },
    { text: "Collect a Waterfall Gem", item: "Waterfall Gem", win: false }
  ]
];

// Variables to keep track of the current situation and items collected
var currentSituation = 0;
var collectedItems = [];

// Function to display the current situation and available options
function displaySituation() {
  var situation = story[currentSituation];
  var optionsList = options[currentSituation];

  // Display the current situation
  document.getElementById("situation").textContent = situation;

  // Clear the previous options
  var optionsElement = document.getElementById("options");
  optionsElement.innerHTML = "";

  // Display the available options
  for (var i = 0; i < optionsList.length; i++) {
    var option = optionsList[i];
    var optionButton = document.createElement("button");
    optionButton.textContent = option.text;
    optionButton.addEventListener("click", selectOption.bind(null, option));
    optionsElement.appendChild(optionButton);
  }
}

// Function to handle the selection of an option
function selectOption(option) {
  // Check if the option has a collectible item
  if (option.collect) {
    collectedItems.push(option.collect);
  }

  // Check if the option leads to a win situation
  if (option.win) {
    currentSituation = 4; // Set the win situation index
  } else {
    currentSituation++; // Move to the next situation
  }

  // Display the next situation
  displaySituation();
}

// Display the initial situation
displaySituation();
