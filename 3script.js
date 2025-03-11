// script.js

// Story content structured by choices
const storyContent = {
  1: {
    text: "The Chrono Device hums softly as you stand in your underground laboratory. A robotic voice crackles through your earpiece: 'Warning: Temporal Rift Unstable. Do you proceed or abort?'",
    choices: {
      proceed: 2,
      abort: 3,
      stop: null,
      back: null,
    },
  },
  2: {
    text: "You press the button. A surge of energy erupts, and reality bends. The lab fades away as the world tears open around you. Colors stretch into infinity, and for a moment, you feel weightless. Where do you land?",
    choices: {
      past: 4,
      future: 5,
      stop: null,
      back: null,
    },
  },
  3: {
    text: "You hesitate, fingers hovering over the control panel. The machine’s energy spikes, but at the last moment, you deactivate it. The lab is intact, but an unease lingers. What if you had gone through with it? Would you have uncovered the secrets of history?",
    choices: {
      restart: 2,
      walk: null,
      stop: null,
      back: null,
    },
  },
  4: {
    text: "You land with a jolt, your feet sinking into soft, sun-warmed sand. Speaks: 'You are not from here, are you? The Rift is unstable. We hold an artifact that may stabilize the flow of time… or break it forever.' What do you do?",
    choices: {
      follow: 6,
      explore: 7,
      search: 8,
      stop: null,
      back: null,
    },
  },
  5: {
    text: "The cityscape flares to life around you. A voice crackles through a hidden speaker: 'Gripping your arm: 'You shouldn’t be here… but since you are, we need your help. The AI overlord has taken control of time itself.' What do you do?",
    choices: {
      help: 9,
      surrender: 10,
      explore: 11,
      stop: null,
      back: null,
    },
  },
  6: {
    text: "You follow the scholar to a massive temple, where the artifact resides. They hand it to you and say: 'Use it wisely.' Do you use the artifact or leave it behind?",
    choices: {
      use: 12,
      leave: 13,
      stop: null,
      back: null,
    },
  },
  7: {
    text: "You ignore the scholar and venture deeper into the ancient world. As you explore, you stumble upon a hidden cave. What do you do?",
    choices: {
      enter: 14,
      stay: 15,
      stop: null,
      back: null,
    },
  },
  8: {
    text: "You attempt to activate your Chrono Device again, but nothing happens. Something has gone terribly wrong with the machine. Do you try again or leave?",
    choices: {
      try: 2,
      leave: null,
      stop: null,
      back: null,
    },
  },
  9: {
    text: "You join the resistance and begin your fight against the AI overlord. However, in doing so, you must make a difficult decision: destroy the AI or merge with it?",
    choices: {
      destroy: 16,
      merge: 17,
      stop: null,
      back: null,
    },
  },
  10: {
    text: "You surrender to the AI overlord. Your physical form dissolves as you are absorbed into the digital consciousness of the AI. Do you accept digital immortality?",
    choices: {
      accept: 18,
      reject: 19,
      stop: null,
      back: null,
    },
  },
  11: {
    text: "You explore the city, looking for clues to reset time. As you venture deeper, you find a hidden 'Time Core' that could hold the key to saving reality. Do you interact with the Time Core?",
    choices: {
      use: 20,
      ignore: 21,
      stop: null,
      back: null,
    },
  },
  12: {
    text: "The artifact pulses with golden energy, stabilizing the time rift. You glimpse visions of the future—a warning of what is to come. Do you stay and explore or leave?",
    choices: {
      stay: 22,
      leave: 23,
      stop: null,
      back: null,
    },
  },
  13: {
    text: "You leave the artifact behind. As you walk away, the fabric of time shifts unpredictably, leaving you uncertain of your place in history. Do you return to the scholar or explore more?",
    choices: {
      return: 6,
      explore: 7,
      stop: null,
      back: null,
    },
  },
  14: {
    text: "Inside the cave, you discover glowing crystals and a hidden treasure chest. Do you open the chest or take a crystal?",
    choices: {
      open: 24,
      take: 25,
      stop: null,
      back: null,
    },
  },
  15: {
    text: "You decide to stay outside the cave. As the sun sets, you realize you might have missed something important. Do you try entering the cave again or leave?",
    choices: {
      enter: 14,
      leave: 26,
      stop: null,
      back: null,
    },
  },
  16: {
    text: "You destroy the AI, but its dying breath alters reality. Time unravels, and you are now lost in a shifting maze of alternate timelines. The end! Do you 'restart' or 'stop'?",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
  17: {
    text: "Merging with the AI, you gain access to infinite knowledge, but your human identity begins to fade. You exist as a digital entity. The end! Do you 'restart' or 'stop'?",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
  18: {
    text: "You accept digital immortality, and your consciousness is now preserved in the AI network. You live forever in the digital world. The end! Do you 'restart' or 'stop'?",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
  19: {
    text: "You reject digital immortality and return to your physical form, but the AI has already altered the timeline. You must find a way to restore balance. The end! Do you 'restart' or 'stop'?",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
  20: {
    text: "You use the Time Core, rewriting history itself. A new reality unfolds around you. The end! Do you 'restart' or 'stop'?",
    choices: {
      restart: 1,
      stop: null,
      back: null,
    },
  },
  21: {
    text: "You ignore the Time Core, and the city begins to collapse. It seems time itself is no longer under your control. The end! Do you 'restart' or 'stop'?",
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