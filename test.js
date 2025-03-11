// script.js

// Story content structured by choices
const storyContent = {
    enchantedForest: {
      1: {
        text: "You find yourself at the entrance of the Enchanted Forest. The trees seem to whisper as the cool breeze passes by. Do you want to 'enter' the forest or 'turn back'?",
        choices: {
          enter: 2,
          "turn back": 3,
          stop: null,
          back: null,
        },
      },
      2: {
        text: "You step into the forest. The path splits into two directions. To the left, you hear the sound of a flowing river. To the right, you see a faint glow of light. Do you go 'left' to the river or 'right' towards the light?",
        choices: {
          left: 4,
          right: 5,
          stop: null,
          back: null,
        },
      },
      3: {
        text: "You decide not to enter the forest. You feel safe, but a sense of curiosity lingers. Do you want to 'restart' or 'stop'?",
        choices: {
          restart: 1,
          stop: null,
          back: null,
        },
      },
      4: {
        text: "You arrive at the river. It's crystal clear and soothing. A mysterious boatman offers to take you across. Do you 'accept' his offer or 'stay' on this side?",
        choices: {
          accept: 6,
          stay: 7,
          explore: 10,
          stop: null,
          back: null,
        },
      },
      5: {
        text: "You approach the glowing light and discover a magical lantern. It hums with energy. Do you 'take' the lantern or 'leave' it?",
        choices: {
          take: 8,
          leave: 9,
          investigate: 11,
          stop: null,
          back: null,
        },
      },
      6: {
        text: "The boatman takes you across the river, revealing a hidden village. The villagers welcome you as their hero. The end! Do you want to 'restart' or 'stop'?",
        choices: {
          restart: 1,
          stop: null,
          back: null,
        },
      },
      7: {
        text: "You decide to stay by the river, enjoying its calm. Time seems to stand still. The end! Do you want to 'restart' or 'stop'?",
        choices: {
          restart: 1,
          stop: null,
          back: null,
        },
      },
      8: {
        text: "As you take the lantern, it glows brighter and whispers secrets of untold treasures. You are now the keeper of the lantern. The end! Do you want to 'restart' or 'stop'?",
        choices: {
          restart: 1,
          stop: null,
          back: null,
        },
      },
      9: {
        text: "You leave the lantern and continue deeper into the forest, wondering what could have been. The end! Do you want to 'restart' or 'stop'?",
        choices: {
          restart: 1,
          stop: null,
          back: null,
        },
      },
      10: {
        text: "You decide to explore the forest instead of staying by the river. Deeper inside, you find an ancient waterfall, shimmering with mystical energy. Do you 'drink' the water or 'wash' your hands in it?",
        choices: {
          drink: 12,
          wash: 13,
          stop: null,
          back: null,
        },
      },
      11: {
        text: "You examine the glowing lantern carefully. Suddenly, a voice whispers from inside: 'Release me, and I shall grant you wisdom.' Do you 'open' the lantern or 'leave' it closed?",
        choices: {
          open: 14,
          leave: 9,
          stop: null,
          back: null,
        },
      },
      12: {
        text: "As you drink the water, you feel a surge of power. Your senses heighten, and you can now hear the whispers of the forest spirits. They tell you of a great secret hidden in the depths of the woods. Do you 'follow' their guidance or 'ignore' them?",
        choices: {
          follow: 15,
          ignore: 16,
          stop: null,
          back: null,
        },
      },
      13: {
        text: "You wash your hands in the enchanted water. Suddenly, the waterfall parts, revealing a hidden cave behind it. Do you 'enter' the cave or 'stay' outside?",
        choices: {
          enter: 17,
          stay: 18,
          stop: null,
          back: null,
        },
      },
      14: {
        text: "The lantern bursts open, and a glowing owl emerges. It thanks you for freeing it and offers to guide you to a hidden library filled with forgotten knowledge. Do you 'follow' the owl or 'decline'?",
        choices: {
          follow: 19,
          decline: 9,
          stop: null,
          back: null,
        },
      },
      15: {
        text: "You follow the spirits' guidance and uncover an ancient temple deep within the forest. Inside, you find a golden key. Do you 'take' the key or 'leave' it?",
        choices: {
          take: 20,
          leave: 9,
          stop: null,
          back: null,
        },
      },
      16: {
        text: "You ignore the spirits' whispers and walk away. The forest suddenly grows darker, and you realize you are lost. A shadow moves in the distance. Do you 'run' or 'hide'?",
        choices: {
          run: 21,
          hide: 22,
          stop: null,
          back: null,
    
        },
      },
      17: {
        text: "Inside the cave, you discover glowing crystals and a hidden treasure chest. Do you 'open' the chest or 'take' a crystal?",
        choices: {
          open: 23,
          take: 24,
          stop: null,
          back: null,
        },
      },
      18: {
        text: "You stay outside, feeling uneasy about the cave. Suddenly, the waterfall glows, and a voice speaks: 'You have chosen wisely.' A mysterious map appears in your hand. Do you 'read' the map or 'ignore' it?",
        choices: {
          read: 25,
          ignore: 9,
          stop: null,
          back: null,
        },
      },
      19: {
        text: "The owl leads you to a hidden library buried beneath the roots of an ancient tree. Inside, you find a book that reveals your destiny. The end! Do you want to 'restart' or 'stop'?",
        choices: {
          restart: 1,
          stop: null,
          back: null,
        },
      },
      20: {
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
    },
    cursedHollow: {
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
    },
    timeTraveler: {
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
          walkAway: null,
          stop: null,
          back: null,
        },
      },
      4: {
        text: "You land with a jolt, your feet sinking into soft, sun-warmed sand. Speaks: 'You are not from here, are you? The Rift is unstable. We hold an artifact that may stabilize the flow of time… or break it forever.' What do you do?",
        choices: {
          followScholar: 6,
          exploreAlone: 7,
          searchHome: 8,
          stop: null,
          back: null,
        },
      },
      5: {
        text: "The cityscape flares to life around you. A voice crackles through a hidden speaker: 'Gripping your arm: 'You shouldn’t be here… but since you are, we need your help. The AI overlord has taken control of time itself.' What do you do?",
        choices: {
          helpResistance: 9,
          surrenderAI: 10,
          exploreCity: 11,
          stop: null,
          back: null,
        },
      },
      6: {
        text: "You follow the scholar to a massive temple, where the artifact resides. They hand it to you and say: 'Use it wisely.' Do you use the artifact or leave it behind?",
        choices: {
          useArtifact: 12,
          leaveArtifact: 13,
          stop: null,
          back: null,
        },
      },
      7: {
        text: "You ignore the scholar and venture deeper into the ancient world. As you explore, you stumble upon a hidden cave. What do you do?",
        choices: {
          enterCave: 14,
          stayOutside: 15,
          stop: null,
          back: null,
        },
      },
      8: {
        text: "You attempt to activate your Chrono Device again, but nothing happens. Something has gone terribly wrong with the machine. Do you try again or leave?",
        choices: {
          tryAgain: 2,
          leave: null,
          stop: null,
          back: null,
        },
      },
      9: {
        text: "You join the resistance and begin your fight against the AI overlord. However, in doing so, you must make a difficult decision: destroy the AI or merge with it?",
        choices: {
          destroyAI: 16,
          mergeWithAI: 17,
          stop: null,
          back: null,
        },
      },
      10: {
        text: "You surrender to the AI overlord. Your physical form dissolves as you are absorbed into the digital consciousness of the AI. Do you accept digital immortality?",
        choices: {
          acceptImmortality: 18,
          rejectImmortality: 19,
          stop: null,
          back: null,
        },
      },
      11: {
        text: "You explore the city, looking for clues to reset time. As you venture deeper, you find a hidden 'Time Core' that could hold the key to saving reality. Do you interact with the Time Core?",
        choices: {
          useTimeCore: 20,
          ignoreTimeCore: 21,
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
          returnToScholar: 6,
          exploreMore: 7,
          stop: null,
          back: null,
        },
      },
      14: {
        text: "Inside the cave, you discover glowing crystals and a hidden treasure chest. Do you open the chest or take a crystal?",
        choices: {
          openChest: 24,
          takeCrystal: 25,
          stop: null,
          back: null,
        },
      },
      15: {
        text: "You decide to stay outside the cave. As the sun sets, you realize you might have missed something important. Do you try entering the cave again or leave?",
        choices: {
          enterCave: 14,
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
    }
  };