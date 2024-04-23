const questions = [
  {
    question: "What is the storage capacity of the phone?",
    choices: ["1T", "512GB", "265GB"],
    alert:
      "You can check the storage capacity by going to Settings > General > Storage",
  },

  {
    question: "Does the phone function normally?",
    choices: ["Yes", "No"],
    alert:
      "Does the phone turn on? Does it charge and connect to the cellular network?Note: We do not buy SIM-locked phones.",
  },
  {
    question: "Is the display fine and without damage?",
    choices: ["YES", "NO"],
    alert:
      "See if there are any cracks, light spots, or darker areas in the screen.",
  },
  {
    question: "What is the visual condition of the phone's screen and body?",
    choices: ["LIKE NEW", "VERYGOOD", "GOOD", " ACCEPT ABLE "],
    alert: "Check for any dents or scratches on the device's body and screen.",
  },
  {
    question: "What is the closest planet to the sun?",
    choices: ["YES", "NO"],
    alert:
      "You can check the storage capacity by going to Settings > General > Storage",
  },
  {
    question:
      "Are there any cracks in the glass parts (back glass, camera lens)?",
    choices: ["YES", "NO"],
    alert: "Check for any cracks in back glass or camera lens.",
  },
  {
    question:
      "Are there any cracks in the body or is it bent? Has the phone gotten wet or is the fingerprint sensor broken?",
    choices: ["YES", "NO"],
    alert:
      "You can check if the phone is bent by, for example, placing it against the edge of a table or by turning it sideways and inspecting it lengthwise.If the phone appears to be curving in one direction or another, it is most likely bent",
  },
  {
    question: "Does the battery have a maximum capacity of at least 85%?",
    choices: ["YES", "NO", "I'M NOT SURE"],
    alert:
      "You can check the battery capacity by going to Settings > Search for 'Battery' or just select Battery Health",
  },
  // Add more questions here...
];

let currentQuestion = 0;

function showQuestion() {
  const questionText = document.getElementById("question-text");
  const alert = document.getElementById("alert");
  questionText.textContent = questions[currentQuestion].question;
  alert.textContent = questions[currentQuestion].alert;

  const choices = document.querySelectorAll(".choice");
  choices.forEach((choice, index) => {
    choice.textContent = questions[currentQuestion].choices[index];

    if (choice.textContent == "") {
      choice.style.display = "none";
    } else {
      choice.style.display = "block";
    }
  });
  const arrow = document.getElementById("arrow");
  arrow.onclick = () => {
    questionText.textContent = questions[currentQuestion - 1].question;
    alert.textContent = questions[currentQuestion - 1].alert;
    choices.forEach((choice, index) => {
      choice.textContent = questions[currentQuestion - 1].choices[index - 1];
    });
  };
}
function checkAnswer(selected) {
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      window.location.href = "swappie.html";
      showQuestion();
    }
  }, 1000);
}

showQuestion();
