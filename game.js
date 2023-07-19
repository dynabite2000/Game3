<script>
  // Game data
  const gameData = [
    {
      story: "You wake up in a dimly lit cave.",
      options: ["1. Search for a torch and light it up to explore the cave.",
                "2. Listen carefully for any sounds before deciding what to do next.",
                "3. Attempt to retrace your steps and find another way out of the cave."]
    },
    {
      story: "As you explore deeper, you encounter a fork in the path. Which way will you go?",
      options: ["1. Take the left path.",
                "2. Choose the right path."]
    },
    {
      story: "You take the left path.",
      options: []
    },
    {
      story: "You choose the right path.",
      options: []
    },
    {
      story: "You listen attentively, and faint whispers can be heard.",
      options: ["1. Follow the whispers and investigate their source.",
                "2. Ignore the whispers and continue exploring the cave."]
    },
    {
      story: "You decide to follow the whispers and investigate their source.",
      options: []
    },
    {
      story: "You decide to ignore the whispers and continue exploring the cave.",
      options: []
    },
    {
      story: "You try to find your way back, but the cave's twists confuse you.",
      options: ["1. Go forward instead."]
    },
    {
      story: "You keep going forward and encounter a giant spider!",
      options: ["1. Fight the spider.",
                "2. Try to sneak past the spider.",
                "3. Run away from the spider."]
    },
    {
      story: "You decide to fight the spider. It's a tough battle, but you manage to defeat it.",
      options: []
    },
    {
      story: "You attempt to sneak past the spider, but it spots you and attacks.",
      options: []
    },
    {
      story: "You run away from the spider and find yourself in a dark room.",
      options: ["1. Light a torch to see better.",
                "2. Feel around the walls to find an exit."]
    },
    {
      story: "You light a torch and discover a hidden passage.",
      options: []
    },
    {
      story: "You feel around the walls and find a secret door that leads to freedom!",
      options: []
    },
    {
      story: "As you explore the cave, you stumble upon a mysterious altar.",
      options: ["1. Examine the altar closely.",
                "2. Offer a small trinket as a tribute.",
                "3. Leave the area and continue exploring."]
    },
    {
      story: "You examine the altar closely and find an ancient artifact!",
      options: []
    },
    {
      story: "You offer a trinket as a tribute, and the altar glows with magic.",
      options: []
    },
    {
      story: "You leave the area and continue exploring the cave.",
      options: []
    },
    {
      story: "As you journey further, you come across a deep chasm.",
      options: ["1. Try to jump across the chasm.",
                "2. Look for a bridge or another way to cross.",
                "3. Turn back and explore a different path."]
    },
    {
      story: "You attempt to jump across the chasm but fall to your doom.",
      options: []
    },
    {
      story: "You find a bridge and cross the chasm safely.",
      options: []
    },
    {
      story: "You turn back and explore a different path in the cave.",
      options: []
    },
    {
      story: "After hours of exploring, you find a hidden room with a mysterious inscription.",
      options: ["1. Try to decipher the inscription.",
                "2. Search for a hidden mechanism in the room.",
                "3. Leave the room and continue exploring."]
    },
    {
      story: "You successfully decipher the inscription and unlock a secret passage.",
      options: []
    },
    {
      story: "You find a hidden mechanism in the room that reveals a hidden door.",
      options: []
    },
    {
      story: "You leave the room and continue exploring the cave.",
      options: []
    },
    {
      story: "As you delve deeper into the cave, you encounter a pack of hungry wolves.",
      options: ["1. Try to scare the wolves away.",
                "2. Attempt to sneak past the wolves.",
                "3. Find a way to climb out of their reach."]
    },
    {
      story: "You successfully scare the wolves away with a loud shout.",
      options: []
    },
    {
      story: "You manage to sneak past the wolves without them noticing you.",
      options: []
    },
    {
      story: "You climb up a ledge to get out of the wolves' reach and find a new path.",
      options: []
    },
    {
      story: "As you continue your journey, you find an old journal with cryptic notes.",
      options: ["1. Spend time deciphering the journal's secrets.",
                "2. Keep the journal with you and continue exploring.",
                "3. Ignore the journal and focus on finding the amulet."]
    },
    {
      story: "You spend time deciphering the journal's secrets and gain valuable insights.",
      options: []
    },
    {
      story: "You keep the journal with you, hoping it will aid you in your quest.",
      options: []
    },
    {
      story: "You choose to focus on finding the enchanted amulet and ignore the journal.",
      options: []
    },
    {
      story: "As you near the end of the cave, you encounter a locked door.",
      options: ["1. Try to pick the lock.",
                "2. Find a key to unlock the door.",
                "3. Use the journal's hints to unlock the door."]
    },
    {
      story: "You successfully pick the lock and open the door to a hidden chamber.",
      options: []
    },
    {
      story: "You find a key that fits the lock and unlock the door.",
      options: []
    },
    {
      story: "Using the hints from the journal, you figure out the door's combination.",
      options: []
    },
    {
      story: "Finally, after a long and treacherous journey, you discover the Enchanted Amulet!",
      options: []
    },
    {
      story: "Congratulations! You have completed the Quest for the Enchanted Amulet and emerged victorious!",
      options: []
    }
  ];

  // Variables to keep track of the current situation and collected items
  let currentSituation = 0;
  let collectedItems = [];

  // Function to display the current situation and available options
  function displaySituation() {
    const storyElement = document.getElementById("story");
    const optionsElement = document.getElementById("options");
    const currentGameData = gameData[currentSituation];

    storyElement.textContent = currentGameData.story;
    optionsElement.textContent = "";

    currentGameData.options.forEach((option, index) => {
      const optionNumber = index + 1;
      const optionText = option.split(".")[1].trim();
      optionsElement.innerHTML += `<button onclick="selectOption(${index})">${optionNumber}. ${optionText}</button><br>`;
    });
  }

  // Function to handle the selection of an option
  function selectOption(optionIndex) {
    const currentGameData = gameData[currentSituation];
    const selectedOption = currentGameData.options[optionIndex];

    if (selectedOption.includes("Enchanted Amulet")) {
      endGame("Congratulations! You have completed the Quest for the Enchanted Amulet and emerged victorious!");
    } else if (selectedOption.includes("Game Over")) {
      endGame("You got lost in the cave and couldn't find the way out. Game Over!");
    } else {
      currentSituation++;
      displaySituation();
    }
  }

  // Function to handle user input
  function handleUserInput() {
    const userInput = document.getElementById("user-input").value.toLowerCase();

    if (userInput.includes("torch") || userInput.includes("light")) {
      selectOption(0);
    } else if (userInput.includes("listen") || userInput.includes("whispers")) {
      selectOption(4);
    } else if (userInput.includes("retrace")) {
      selectOption(7);
    } else if (userInput.includes("left")) {
      selectOption(2);
    } else if (userInput.includes("right")) {
      selectOption(3);
    } else if (userInput.includes("follow") || userInput.includes("investigate")) {
      selectOption(5);
    } else if (userInput.includes("ignore")) {
      selectOption(6);
    } else if (userInput.includes("fight")) {
      selectOption(8);
    } else if (userInput.includes("sneak")) {
      selectOption(9);
    } else if (userInput.includes("run away") || userInput.includes("run")) {
      selectOption(10);
    } else if (userInput.includes("dark room") || userInput.includes("torch")) {
      selectOption(11);
    } else if (userInput.includes("go forward")) {
      selectOption(12);
    } else if (userInput.includes("altar") || userInput.includes("tribute")) {
      selectOption(13);
    } else if (userInput.includes("decipher")) {
      selectOption(21);
    } else if (userInput.includes("mechanism")) {
      selectOption(22);
    } else if (userInput.includes("wolves") || userInput.includes("scare")) {
      selectOption(24);
    } else if (userInput.includes("sneak past wolves") || userInput.includes("sneak")) {
      selectOption(25);
    } else if (userInput.includes("climb")) {
      selectOption(26);
    } else if (userInput.includes("journal") || userInput.includes("deciphering")) {
      selectOption(29);
    } else if (userInput.includes("keep the journal")) {
      selectOption(30);
    } else if (userInput.includes("enchanted amulet") || userInput.includes("final goal")) {
      selectOption(32);
    } else if (userInput.includes("pick the lock") || userInput.includes("pick lock")) {
      selectOption(33);
    } else if (userInput.includes("find a key") || userInput.includes("key")) {
      selectOption(34);
    } else if (userInput.includes("use the journal")) {
      selectOption(35);
    } else {
      alert("Invalid input. Please try again.");
    }

    document.getElementById("user-input").value = "";
  }

  // Function to handle the end of the game
  function endGame(message) {
    const storyElement = document.getElementById("story");
    const optionsElement = document.getElementById("options");
    const userInputElement = document.getElementById("user-input");
    const buttonContainerElement = document.getElementById("buttonContainer");
    const inventoryElement = document.getElementById("inventory");
    const inventoryListElement = document.getElementById("inventory-list");
    const restartButtonElement = document.getElementById("restartButton");

    storyElement.textContent = message;
    optionsElement.textContent = "";
    userInputElement.style.display = "none";
    buttonContainerElement.style.display = "none";

    if (message.includes("Congratulations")) {
      inventoryElement.style.display = "block";
      collectedItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        inventoryListElement.appendChild(listItem);
      });
    } else {
      restartButtonElement.style.display = "block";
    }
  }

  // Function to restart the game
  function restartGame() {
    currentSituation = 0;
    collectedItems = [];
    const userInputElement = document.getElementById("user-input");
    const buttonContainerElement = document.getElementById("buttonContainer");
    const inventoryElement = document.getElementById("inventory");
    const inventoryListElement = document.getElementById("inventory-list");
    const restartButtonElement = document.getElementById("restartButton");

    userInputElement.style.display = "block";
    buttonContainerElement.style.display = "block";
    inventoryElement.style.display = "none";
    restartButtonElement.style.display = "none";

    displaySituation();
  }

  // Initialize the game
  displaySituation();
</script>

