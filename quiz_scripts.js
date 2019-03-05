document.addEventListener("DOMContentLoaded", () => {

  // Define Questions
  const questions = [
    {
      question: "What is JavaScript for?",
      options: [
                "Both B and C", "Telling coffee what to say",
                "Writing Indonesian plays", "Making Stuff"
                ],
      correct: "Making Stuff",
    },
    {
      question: "Paper airplanes are illegal in Denmark.",
      options: ["True", "False"],
      correct: "False",
    },
    {
      question: "Who would win in a fight containing all of the following?",
      options: ["Chuck Norris", "Darth Vader", "Godzilla", "Superman"],
      correct: "Chuck Norris",
    },
    {
      question: "What makes plants green?",
      options: ["Magic", "Money", "Chlorophyll", "Paint"],
      correct: "Chlorophyll",
    },
    {
      question: "Did you breathe today?",
      options: ["Yes", "No"],
      correct: "Yes",
    },
  ];

  let question_number = 0;
  let correct_number = 0;

  let counter = 0;
  let isRunning = true;

  const questionElt = document.querySelector("#question");
  const optionsElt = document.querySelector("#options");
  const correctElt = document.querySelector("#correct");
  const counterElt = document.querySelector("#counter");

  function load_question() {
    questionElt.innerHTML = questions[question_number].question;

    optionsElt.innerHTML = "";
    for (const option of questions[question_number].options) {
      optionsElt.innerHTML += `<button class="option">${option}</button>`;
    }

  document.querySelectorAll(".option").forEach(option => {

      option.onclick = () => {

        if (option.textContent == questions[question_number].correct){
          correct_number++

        }

        question_number++;

        correctElt.innerHTML = `${correct_number} of ${question_number}`

        if (question_number < questions.length) {
          load_question();
        } else {

          isRunning = false;
          questionElt.innerHTML = "Quiz complete!";
          optionsElt.innerHTML = "";

          counterElt.innerHTML = `You finished in ${counter} seconds. Not too shabby!`

        }
      }
    });
  }

  function count() {
    // Keep updating this variable if the timer is running
    if(isRunning){
      counter++
      counterElt.innerHTML = `<u>${counter}</u>`;
    }

  }

  load_question();

  // Set up timer
  setInterval(count, 1000);

});
