function displayCard({ results }) {
  for (let trivia of results) {
    let card = document.createElement("article");
    card.classList.add("card");
    let level = document.createElement("small");
    level.innerText = trivia.difficulty.toUpperCase();
    let category = document.createElement("h2");
    category.innerText = trivia.category;

    let question = document.createElement("p");
    question.innerText = trivia.question;

    let button = document.createElement("button");
    button.innerText = "Show Answer";

    let correctAnswer = document.createElement("p");
    correctAnswer.classList.add("hidden");
    correctAnswer.setAttribute("display", "none");

    correctAnswer.innerText = trivia["correct_answer"];

    button.addEventListener("click", () => {
      correctAnswer.style.display = "block";
      correctAnswer.innerText = trivia["correct_answer"];
    });

    card.append(level, category, question, button, correctAnswer);

    document.querySelector("main").append(card);

    let small = document.querySelectorAll("small");

    for (let color of small) {
      if (color.innerText === "EASY") {
        card.style.border = "3px solid green";
      } else if (color.innerText === "MEDIUM") {
        card.style.border = "3px solid yellow";
      } else {
        card.style.border = "3px solid red";
      }
    }
  }
}

fetch("https://opentdb.com/api.php?amount=10")
  .then((response) => response.json())
  .then((JSONresponse) => displayCard(JSONresponse))
  .catch((err) => {
    console.log(err);
  });
