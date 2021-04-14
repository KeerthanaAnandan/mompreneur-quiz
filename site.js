let questions = [
  {
    id: 1,
    question: "Which of the following words best reflect your brand?",

    options: [
      "Innovation, Creativity, Imagination",
      "Truth, Justice, Wisdom",
      "Vision, Growth, Solutions",
      "Impact, Meaning, Influence",
    ],
  },
  {
    id: 2,
    question:
      "Which statement best describes the vision you have for your personal brand?",

    options: [
      "I want to understand the world and share my knowledge with others.",
      "I want to change the world and build the next big thing.",
      "I want to impact the world and make people's lives better.",
      "I want to find beauty in the world and create a masterpiece.",
    ],
  },
  {
    id: 3,
    question: "Choose the answer that describes your work:",

    options: [
      "I search for inspiration. I use my artistic capabilities to bring key ideas into fruition.",
      "It never stops. I am always on the go- hustling and making things happen.",
      "I connect with people. I create content that will provide value to my audience.",
      "I remain informed. I educate myself on new developments in my line of work.",
    ],
  },
  {
    id: 4,
    question: "How do you want others to view your personal brand?",

    options: [
      "Inspiring, Thoughtful, Engaging.",
      "Hustler, Energetic, Self-disciplined.",
      "Empowering, Motivational, Valuable",
      "Cultured, Englightened, Educated.",
    ],
  },
  {
    id: 5,
    question: "How would you describe your social media presence?",

    options: ["Depends on my mood!", "Who has time for that?", "Social media is LIFE", "You'll find me there if i have something to say"],
  },
  {
    id: 6,
    question: "How do you want others to view your personal brand?",

    options: [
      "My life and work are intricately connected.",
      "Work is my #1 priority, all else comes second.",
      "I disconnected in order to retain a healthy work-life balance",
      "I get joy when i am finally able to leave the office and experience something new",
    ],
  },
  {
    id: 7,
    question: "Which answer best describes your personal mission?",

    options: [
      "Life is beautiful.", 
    "If you built it they will come.",
     "Leave a legacy.",
      "Knowledge is power."],
  },
];

let question_count = 0;
//let points = 0;
Max_Questions = 7;
let firstTypePoints = 0;
let secondTypePoints = 0;
let thirdTypePoints = 0;
let fourthTypePoints = 0;

window.onload = function () {
  show(question_count);
};

function next(e) {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    location.href = "end.html";
  }

  let user_answer = document.querySelector(".option.active").innerHTML;

  //check answer
  /////////////////////////first type - THE CREATIVE
  if (
    user_answer === "Innovation, Creativity, Imagination" ||
    user_answer === "I want to understand the world and share my knowledge with others." ||
    user_answer === "I search for inspiration. I use my artistic capabilities to bring key ideas into fruition." ||
    user_answer === "Inspiring, Thoughtful, Engaging." ||
    user_answer === "Depends on my mood!" ||
    user_answer === "My life and work are intricately connected." ||
    user_answer === "Life is beautiful."
  ) {
    firstTypePoints += 1;
  }

  ///////////////////second type - THE ENTREPRENEUR
  else if (
    user_answer === "Truth, Justice, Wisdom" ||
    user_answer === "I want to change the world and build the next big thing." ||
    user_answer === "It never stops. I am always on the go- hustling and making things happen." ||
    user_answer === "Hustler, Energetic, Self-disciplined." ||
    user_answer === "Who has time for that?" ||
    user_answer === "Work is my #1 priority, all else comes second." ||
    user_answer ===
      "If you built it they will come."
  ) {
    secondTypePoints += 1;
  }
  /////////////////third type- THE ENTREPRENEUR
  else if (
    user_answer === "Vision, Growth, Solutions" ||
    user_answer === "I want to impact the world and make people's lives better." ||
    user_answer === "I connect with people. I create content that will provide value to my audience." ||
    user_answer === "Empowering, Motivational, Valuable" ||
    user_answer === "Social media is LIFE" ||
    user_answer === "I disconnected in order to retain a healthy work-life balance" ||
    user_answer === "Leave a legacy."
  ) {
    thirdTypePoints += 1;
  }
  /////////////////fourth type - THE LEADER
  else if (
    user_answer === "Impact, Meaning, Influence" ||
    user_answer === "I want to find beauty in the world and create a masterpiece." ||
    user_answer === "I remain informed. I educate myself on new developments in my line of work." ||
    user_answer === "Cultured, Englightened, Educated." ||
    user_answer === "You'll find me there if i have something to say" ||
    user_answer === "I get joy when i am finally able to leave the office and experience something new" ||
    user_answer ===
      "Knowledge is power."
  ) {
    fourthTypePoints += 1;
  }

  sessionStorage.setItem("firstTypePoints", firstTypePoints);
  sessionStorage.setItem("secondTypePoints", secondTypePoints);
  sessionStorage.setItem("thirdTypePoints", thirdTypePoints);
  sessionStorage.setItem("fourthTypePoints", fourthTypePoints);

  //let coloranswer = document.querySelector("li.option.active");
  //e.target.coloranswer.classList.add("correct");

  question_count++;
  show(question_count);
  toggleActive();
  //Update the progress Bar

  const progressBarFull = document.getElementById("progressBarFull");

  progressBarFull.style.width = ` ${(question_count / Max_Questions) * 100}%`;
}

function show(count) {
  //progress text
  const progressText = document.getElementById("progressText");

  progressText.innerText = `Question ${count + 1}/${Max_Questions}`;

  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${question_count + 1}.${questions[count].question}</h2>
   <ul class="option_group">
  <li><span class="option">${first}</span></li>
  <li ><span class="option">${second}</span></li>
  <li ><span class="option">${third}</span></li>
  <li ><span class="option">${fourth}</span></li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll(".option");

  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
