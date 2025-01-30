// script.js

// Story content structured by choices
const storyContent = {
  1: {
    text: "You find yourself at the entrance of the Enchanted Forest. The trees seem to whisper as the cool breeze passes by. Do you want to 'enter' the forest or 'turn back'?",
    choices: {
      enter: 2,
      "turn back": 3,
      stop: null,
    },
  },
  2: {
    text: "You step into the forest. The path splits into two directions. To the left, you hear the sound of a flowing river. To the right, you see a faint glow of light. Do you go 'left' to the river or 'right' towards the light?",
    choices: {
      left: 4,
      right: 5,
      stop: null,
    },
  },
  3: {
    text: "You decide not to enter the forest. You feel safe, but a sense of curiosity lingers. Do you want to 'restart' or 'stop'?",
    choices: {
      restart: 1,
      stop: null,
    },
  },
  4: {
    text: "You arrive at the river. It's crystal clear and soothing. A mysterious boatman offers to take you across. Do you 'accept' his offer or 'stay' on this side?",
    choices: {
      accept: 6,
      stay: 7,
      explore: 10, 
      stop: null,
    },
  },
  5: {
    text: "You approach the glowing light and discover a magical lantern. It hums with energy. Do you 'take' the lantern or 'leave' it?",
    choices: {
      take: 8,
      leave: 9,
      investigate: 11,
      stop: null,
    },
  },
  6: {
    text: "The boatman takes you across the river, revealing a hidden village. The villagers welcome you as their hero. The end! Do you want to 'restart' or 'stop'?",
    choices: {
      restart: 1,
      stop: null,
    },
  },
  7: {
    text: "You decide to stay by the river, enjoying its calm. Time seems to stand still. Do you want to 'restart' or 'stop'?",
    choices: {
      restart: 1,
      stop: null,
    },
  },
  8: {
    text: "As you take the lantern, it glows brighter and whispers secrets of untold treasures. You are now the keeper of the lantern. The end! Do you want to 'restart' or 'stop'?",
    choices: {
      restart: 1,
      stop: null,
    },
  },
  9: {
    text: "You leave the lantern and continue deeper into the forest, wondering what could have been. Do you want to 'restart' or 'stop'?",
    choices: {
      restart: 1,
      stop: null,
    },
  },
  10: {
    text: "You decide to explore the forest instead of staying by the river. Deeper inside, you find an ancient waterfall, shimmering with mystical energy. Do you 'drink' the water or 'wash' your hands in it?",
    choices: {
      drink: 12,
      wash: 13,
      stop: null,
    },
  },
  11: {
    text: "You examine the glowing lantern carefully. Suddenly, a voice whispers from inside: 'Release me, and I shall grant you wisdom.' Do you 'open' the lantern or 'leave' it closed?",
    choices: {
      open: 14,
      leave: 9,
      stop: null,
    },
  },
  12: {
    text: "As you drink the water, you feel a surge of power. Your senses heighten, and you can now hear the whispers of the forest spirits. They tell you of a great secret hidden in the depths of the woods. Do you 'follow' their guidance or 'ignore' them?",
    choices: {
      follow: 15,
      ignore: 16,
      stop: null,
    },
  },
  13: {
    text: "You wash your hands in the enchanted water. Suddenly, the waterfall parts, revealing a hidden cave behind it. Do you 'enter' the cave or 'stay' outside?",
    choices: {
      enter: 17,
      stay: 18,
      stop: null,
    },
  },
  14: {
    text: "The lantern bursts open, and a glowing owl emerges. It thanks you for freeing it and offers to guide you to a hidden library filled with forgotten knowledge. Do you 'follow' the owl or 'decline'?",
    choices: {
      follow: 19,
      decline: 9,
      stop: null,
    },
  },
  15: {
    text: "You follow the spirits' guidance and uncover an ancient temple deep within the forest. Inside, you find a golden key. Do you 'take' the key or 'leave' it?",
    choices: {
      take: 20,
      leave: 9,
      stop: null,
    },
  },
  16: {
    text: "You ignore the spirits' whispers and walk away. The forest suddenly grows darker, and you realize you are lost. A shadow moves in the distance. Do you 'run' or 'hide'?",
    choices: {
      run: 21,
      hide: 22,
      stop: null,
    },
  },
  17: {
    text: "Inside the cave, you discover glowing crystals and a hidden treasure chest. Do you 'open' the chest or 'take' a crystal?",
    choices: {
      open: 23,
      take: 24,
      stop: null,
    },
  },
  18: {
    text: "You stay outside, feeling uneasy about the cave. Suddenly, the waterfall glows, and a voice speaks: 'You have chosen wisely.' A mysterious map appears in your hand. Do you 'read' the map or 'ignore' it?",
    choices: {
      read: 25,
      ignore: 9,
      stop: null,
    },
  },
  19: {
    text: "The owl leads you to a hidden library buried beneath the roots of an ancient tree. Inside, you find a book that reveals your destiny. The end! Do you want to 'restart' or 'stop'?",
    choices: {
      restart: 1,
      stop: null,
    },
  },
  20: {
    text: "As you take the key, the temple trembles. A secret door opens, leading to a new realm. You step through, and the adventure continues... The end! Do you want to 'restart' or 'stop'?",
    choices: {
      restart: 1,
      stop: null,
    },
  },
};


// Initialize the story
function startStory(startPoint) {
  if (!storyContent[startPoint]) {
      console.error(`Error: Story point ${startPoint} is undefined.`);
      return;
  }

  const main = document.querySelector("main");
  const choicesHTML = generateChoicesHTML(startPoint);

  main.innerHTML = `
      <div id="story-container">
          <p id="story-text">${storyContent[startPoint].text}</p>
          <p id="choices-text"><strong>Story Choices:</strong><br> ${choicesHTML}</p>
      </div>
      <div id="input-container">
          <label for="user-input">What would you like to choose?</label>
          <input type="text" id="user-input" placeholder="Type your choice here..." />
          <button id="submit-button">Submit</button>
      </div>
  `;

  const inputField = document.getElementById("user-input");
  const submitButton = document.getElementById("submit-button");

  submitButton.addEventListener("click", () => handleUserInput(startPoint));
  inputField.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
          handleUserInput(startPoint);
      }
  });
}


// Generate the choices in HTML format
function generateChoicesHTML(currentPoint) {
  if (!storyContent[currentPoint] || !storyContent[currentPoint].choices) {
      return "No choices available."; // Prevents crashing
  }

  let choices = storyContent[currentPoint].choices;
  let choicesList = Object.keys(choices)
      .map((choice) => `- <strong>${choice}</strong>`)
      .join("<br>");
  return choicesList;
}


// Handle user input and update the story
let userChoices = [];
let userStoryData = {}; // Stores text descriptions

function handleUserInput(currentPoint) {
  const userInput = document.getElementById("user-input").value.toLowerCase().trim();

  if (userInput === "stop") {
      alert("Thank You for playing this story!");
      localStorage.setItem("userChoices", JSON.stringify(userChoices));
      localStorage.setItem("storyData", JSON.stringify(userStoryData));
      window.location.href = "thankyou.html";
      return;
  }

  if (!storyContent[currentPoint] || !storyContent[currentPoint].choices[userInput]) {
      alert("Invalid choice. Please try again.");
      return;
  }

  const nextPoint = storyContent[currentPoint].choices[userInput];

  userChoices.push(userInput);
  userStoryData[userInput] = storyContent[currentPoint];

  if (nextPoint === null) {
      alert("Thank You for playing this story!");
      localStorage.setItem("userChoices", JSON.stringify(userChoices));
      localStorage.setItem("storyData", JSON.stringify(userStoryData));
      window.location.href = "thankyou.html";
  } else if (!storyContent[nextPoint]) {
      alert("An error occurred: Next story step is undefined.");
  } else {
      startStory(nextPoint);
  }

  document.getElementById("user-input").value = "";
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("question");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

