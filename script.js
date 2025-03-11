// script.js

// Story content structured by choices
const storyContent = {
  1: {
    // Starting Page: Introduction to the story
    text: "You find yourself at the entrance of the Enchanted Forest. The trees seem to whisper as the cool breeze passes by. Do you want to 'enter' the forest or 'turn back'?",
    choices: {
      enter: 2, // If the player chooses 'enter', go to page 2
      "turn back": 3, // If the player chooses 'turn back', go to page 3
      stop: null, // Stops the game
      enter: 2,
      "turn back": 3,
      stop: null,
      back: null,
    },
  },
  2: {
    // Decision Point: Inside the forest with two paths
    text: "You step into the forest. The path splits into two directions. To the left, you hear the sound of a flowing river. To the right, you see a faint glow of light. Do you go 'left' to the river or 'right' towards the light?",
    choices: {
      left: 4, // Choosing left leads to the river (page 4)
      right: 5, // Choosing right leads to the glowing light (page 5)
      stop: null, // Stops the game
      left: 4,
      right: 5,
      stop: null,
      back: null,
    },
  },
  3: {
    // Decision to turn back instead of entering the forest
    text: "You decide not to enter the forest. You feel safe, but a sense of curiosity lingers. Do you want to 'restart' or 'stop'?",
    choices: {
      restart: 1, // Restarting brings the player back to page 1
      stop: null, // Stops the game
      restart: 1,
      stop: null,
      back: null,
    },
  },
  4: {
    // At the river with a mysterious boatman
    text: "You arrive at the river. It's crystal clear and soothing. A mysterious boatman offers to take you across. Do you 'accept' his offer or 'stay' on this side?",
    choices: {
      accept: 6, // Choosing to accept the boatman's offer (page 6)
      stay: 7, // Staying at the river (page 7)
      explore: 10, // Exploring the forest near the river (page 10)
      stop: null, // Stops the game
      accept: 6,
      stay: 7,
      explore: 10,
      stop: null,
      back: null,
    },
  },
  5: {
    // Discovering a magical lantern
    text: "You approach the glowing light and discover a magical lantern. It hums with energy. Do you 'take' the lantern or 'leave' it?",
    choices: {
      take: 8, // Taking the lantern (page 8)
      leave: 9, // Leaving the lantern and moving on (page 9)
      investigate: 11, // Investigating the lantern further (page 11)
      stop: null, // Stops the game
      take: 8,
      leave: 9,
      investigate: 11,
      stop: null,
      back: null,
    },
  },
  6: {
    // Crossing the river to a hidden village
    text: "The boatman takes you across the river, revealing a hidden village. The villagers welcome you as their hero. The end! Do you want to 'restart' or 'stop'?",
    choices: {
      restart: 1, // Restarting the game
      stop: null, // Stops the game
      restart: 1,
      stop: null,
      back: null,
    },
  },
  7: {
    // Choosing to stay by the river
    text: "You decide to stay by the river, enjoying its calm. Time seems to stand still. Do you want to 'restart' or 'stop'?",
    text: "You decide to stay by the river, enjoying its calm. Time seems to stand still. The end! Do you want to 'restart' or 'stop'?",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
  8: {
    // Gaining the lantern’s power
    text: "As you take the lantern, it glows brighter and whispers secrets of untold treasures. You are now the keeper of the lantern. The end! Do you want to 'restart' or 'stop'?",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
  9: {
    // Moving deeper into the forest without taking the lantern
    text: "You leave the lantern and continue deeper into the forest, wondering what could have been. Do you want to 'restart' or 'stop'?",
    text: "You leave the lantern and continue deeper into the forest, wondering what could have been. The end! Do you want to 'restart' or 'stop'?",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
  10: {
    // Exploring the forest further
    text: "You decide to explore the forest instead of staying by the river. Deeper inside, you find an ancient waterfall, shimmering with mystical energy. Do you 'drink' the water or 'wash' your hands in it?",
    choices: {
      drink: 12, // Drinking the magical water (page 12)
      wash: 13, // Washing hands in the water (page 13)
      stop: null,
      back: null,
    },
  },
  11: {
    // Investigating the glowing lantern
    text: "You examine the glowing lantern carefully. Suddenly, a voice whispers from inside: 'Release me, and I shall grant you wisdom.' Do you 'open' the lantern or 'leave' it closed?",
    choices: {
      open: 14, // Opening the lantern (page 14)
      leave: 9, // Leaving it closed (page 9)
      stop: null,
      back: null,
    },
  },
  12: {
    // Drinking from the enchanted waterfall
    text: "As you drink the water, you feel a surge of power. Your senses heighten, and you can now hear the whispers of the forest spirits. They tell you of a great secret hidden in the depths of the woods. Do you 'follow' their guidance or 'ignore' them?",
    choices: {
      follow: 15, // Following the spirits' guidance (page 15)
      ignore: 16, // Ignoring them (page 16)
      stop: null,
      back: null,
    },
  },
  13: {
    // Washing hands in the enchanted water
    text: "You wash your hands in the enchanted water. Suddenly, the waterfall parts, revealing a hidden cave behind it. Do you 'enter' the cave or 'stay' outside?",
    choices: {
      enter: 17, // Entering the hidden cave (page 17)
      stay: 18, // Staying outside (page 18)
      stop: null,
      back: null,
    },
  },
  14: {
    // Releasing an owl spirit from the lantern
    text: "The lantern bursts open, and a glowing owl emerges. It thanks you for freeing it and offers to guide you to a hidden library filled with forgotten knowledge. Do you 'follow' the owl or 'decline'?",
    choices: {
      follow: 19, // Following the owl (page 19)
      decline: 9, // Declining the owl's offer (page 9)
      stop: null,
      back: null,
    },
  },
  15: {
    // Finding a hidden temple and a golden key
    text: "You follow the spirits' guidance and uncover an ancient temple deep within the forest. Inside, you find a golden key. Do you 'take' the key or 'leave' it?",
    choices: {
      take: 20, // Taking the key (page 20)
      leave: 9, // Leaving the key (page 9)
      stop: null,
      back: null,
    },
  },
  16: {
    // Getting lost in the dark forest
    text: "You ignore the spirits' whispers and walk away. The forest suddenly grows darker, and you realize you are lost. A shadow moves in the distance. Do you 'run' or 'hide'?",
    choices: {
      run: 21, // Running (page 21)
      hide: 22, // Hiding (page 22)
      stop: null,
      back: null,

    },
  },
  17: {
    // Discovering a treasure chest in a cave
    text: "Inside the cave, you discover glowing crystals and a hidden treasure chest. Do you 'open' the chest or 'take' a crystal?",
    choices: {
      open: 23, // Opening the chest (page 23)
      take: 24, // Taking a crystal (page 24)
      stop: null,
      back: null,
    },
  },
  18: {
    // Choosing to stay outside the cave
    text: "You stay outside, feeling uneasy about the cave. Suddenly, the waterfall glows, and a voice speaks: 'You have chosen wisely.' A mysterious map appears in your hand. Do you 'read' the map or 'ignore' it?",
    choices: {
      read: 25, // Reading the map (page 25)
      ignore: 9, // Ignoring it (page 9)
      stop: null,
      back: null,
    },
  },
  19: {
    // Finding the hidden library
    text: "The owl leads you to a hidden library buried beneath the roots of an ancient tree. Inside, you find a book that reveals your destiny. The end! Do you want to 'restart' or 'stop'?",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
  20: {
    // Unlocking a new realm with the golden key
    text: "As you take the key, the temple trembles. A secret door opens, leading to a new realm. You step through, and the adventure continues... The end! Do you want to 'restart' or 'stop'?",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
  21: {
    text: "You run as fast as you can, but the shadow follows. Suddenly, you trip over a root, and the darkness engulfs you. The end! Do you want to 'restart' or 'stop'?",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
  22: {
    text: "You hide behind a tree, holding your breath. The shadow passes, whispering in an ancient tongue. You remain hidden until dawn, but you will never forget its words. The end! Do you want to 'restart' or 'stop'?",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
  23: {
    text: "You open the chest, revealing piles of gold and jewels. However, a curse is unleashed, and you are forever bound to guard the treasure. The end! Do you want to 'restart' or 'stop'?",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
  24: {
    text: "You take a glowing crystal, feeling its warmth. Suddenly, you are transported to another realm, a land of endless light. The end! Do you want to 'restart' or 'stop'?",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
  25: {
    text: "The map reveals the location of a hidden kingdom. You follow its path and become the first traveler to rediscover a forgotten civilization. The end! Do you want to 'restart' or 'stop'?",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
};

// Initialize the story with a given starting point
function startStory(startPoint) {
  // Check if the provided startPoint exists in the storyContent object
  if (!storyContent[startPoint]) {
      console.error(`Error: Story point ${startPoint} is undefined.`);
      return; // Exit the function if the start point is invalid
  }

  // Select the main content area where the story will be displayed
  const main = document.querySelector("main");
  
  // Generate the HTML for story choices based on the current story point
  const choicesHTML = generateChoicesHTML(startPoint);

  // Inject the story text and choice options into the main content area
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

  // Get the input field and submit button for user interaction
  const inputField = document.getElementById("user-input");
  const submitButton = document.getElementById("submit-button");

  // Add event listener to handle user input when the submit button is clicked
  submitButton.addEventListener("click", () => handleUserInput(startPoint));

  // Allow user to submit their choice by pressing "Enter" instead of clicking the button
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

let historyStack = []; // Stack to track previous story points

function handleUserInput(currentPoint) {
  const userInput = document.getElementById("user-input").value.toLowerCase().trim();

  if (userInput === "stop") {
      alert("Thank You for playing this story!");
      localStorage.setItem("userChoices", JSON.stringify(userChoices));
      localStorage.setItem("storyData", JSON.stringify(userStoryData));
      window.location.href = "thankyou.html";
      return;
  }

  if (userInput === "back") {
      if (historyStack.length > 0) {
          let previousPoint = historyStack.pop(); // Go back to the previous choice
          startStory(previousPoint);
      } else {
          alert("You are already at the beginning.");
      }
      return;
  }

  if (!storyContent[currentPoint] || !storyContent[currentPoint].choices[userInput]) {
      alert("Invalid choice. Please try again.");
      return;
  }

  const nextPoint = storyContent[currentPoint].choices[userInput];

  userChoices.push(userInput);
  userStoryData[userInput] = storyContent[currentPoint];
  
  // Store the current point before moving to the next
  historyStack.push(currentPoint);

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

new Vue({
  el: '#app',
  data: {
    showModal: false
  }
});
