// script.js

// Story content structured by choices
const storyContent = {
  1: {
    text: "You stand at the entrance of Cursed Hollow. The air is thick with the scent of damp earth and decay, and the trees seem unnaturally tall, their twisted branches clawing at the sky. Whispers call you to step inside. Do you dare enter or turn back?",
    choices: {
      enter: 2,
      "turn back": 3,
      stop: null,
      back: null,
    },
  },
  2: {
    text: "You step into the Hollow, and a gust of wind slams the entrance shut behind you. The path splits. To the left, the sound of running water calls, and to the right, a flickering glow breaks through the fog. Which way will you go?",
    choices: {
      left: 4,
      right: 5,
      stop: null,
      back: null,
    },
  },
  3: {
    text: "You turn back, but as you leave, the whispers stop abruptly. That night, something scratches at your window. Do you open the window to investigate or ignore the noise?",
    choices: {
      open: 6,
      ignore: 7,
      stop: null,
      back: null,
    },
  },
  4: {
    text: "The sound of rushing water leads you to a blackened river. A hooded boatman stands ready, extending his bony hand toward you. Do you accept his ride or stay on the shore?",
    choices: {
      accept: 8,
      stay: 9,
      stop: null,
      back: null,
    },
  },
  5: {
    text: "A flickering glow pulses in the distance, and as you approach, you find an old lantern. Its flame moves unnaturally, like something alive. Do you take the lantern or leave it?",
    choices: {
      take: 10,
      leave: 11,
      stop: null,
      back: null,
    },
  },
  6: {
    text: "You open the window, and a skeletal hand shoots through the glass, grabbing your wrist. The darkness pulls you in, and you vanish without a trace. (Vanished Ending)",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
  7: {
    text: "Ignoring the noise seems to be the safer option. But when you wake up, your arms are covered in long, blackened fingernail marks. Something followed you home, and it will never leave. (Marked Ending)",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
  8: {
    text: "As you step into the boat, the river vanishes beneath you. You are pulled under, surrounded by bloated, lifeless faces. You drown in the cold water. (Drowning Ending)",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
  9: {
    text: "You stay on the shore, but the water begins to distort. Something climbs out, its face a perfect mirror of your own. It smiles at you with an unnerving grin. (Wander Deeper Ending)",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
  10: {
    text: "As your fingers wrap around the lantern, a searing pain spreads up your arm. The whispers grow louder, and the Hollow’s secrets crawl into your mind. (Cursed Ending)",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
  11: {
    text: "You leave the lantern, but as you step back, the ground disappears. You feel yourself falling through an endless abyss. Something catches you before you hit the ground.",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
  12: {
    text: "Deeper into the Hollow, you hear the sound of a cascading waterfall. When you reach it, the water runs red, and you find a hidden cave behind it. Do you enter the cave or stay outside?",
    choices: {
      enter: 13,
      stay: 14,
      stop: null,
      back: null,
    },
  },
  13: {
    text: "Inside the cave, an ancient coffin shakes as though something inside is trying to break free. Do you open the coffin or leave it?",
    choices: {
      open: 15,
      leave: 16,
      stop: null,
      back: null,
    },
  },
  14: {
    text: "You decide to stay outside the cave. The waterfall seems to speak in a language you don’t understand. Suddenly, a mysterious map appears in your hands, showing a way out. But something shifts in the trees around you.",
    choices: {
      read: 17,
      ignore: 18,
      stop: null,
      back: null,
    },
  },
  15: {
    text: "You open the coffin, and a corpse gasps for air, its eyes wide and filled with rage. It grabs you, pulling you into the grave. (Buried Alive Ending)",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
  16: {
    text: "You turn to leave, only to find the corpse already standing behind you. It lets out a bone-chilling laugh. (Consumed Ending)",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
  17: {
    text: "The map shows a way out, but as you follow it, the trees around you start to shift. The path seems endless. You are lost in the Hollow forever. (Lost Ending)",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
  18: {
    text: "You ignore the map, but the whispers grow louder. The trees start to move around you, trapping you in an endless labyrinth. (Endless Paths Ending)",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
  19: {
    text: "You find a journal nailed to a tree, its pages fluttering in the still air. The words are written in your own handwriting, describing your every move so far. The final entry describes your death. The ink is still wet. (Predestined Doom Ending)",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
  20: {
    text: "You drop the journal, and the tree begins to bleed. The whispers grow louder as the tree calls your name. (Torn Apart Ending)",
    choices: {
      restart: 1,
      stop: null,
      back: null,
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