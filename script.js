const getTriviaButton = document.querySelector(".questions");
const h2 = document.querySelectorAll("h2");
const p = document.querySelectorAll(".qstn");
const a = document.querySelectorAll("article.card p.hidden")
getTriviaButton.addEventListener("click", (event) => {
  event.preventDefault();
  fetch("https://opentdb.com/api.php?amount=10")
    .then((response) => response.json())
    .then((json) => {
      const results = json.results;
      let i = 0;
      for (let result of results) {
        if (i < h2.length) {
          h2[i].textContent = result.category;
          p[i].textContent = result.question;
          a[i].textContent = result.correct_answer;
          i++;
        }
      }

    //   // answerButtons.forEach((answerButton, index) => {
    //   function questionTrivia() {
    //     let answerButton = document.querySelector("article.card button");
    //     let triviaArticle = document.querySelector("article.card");
    //     answerButton.addEventListener("click", (event) => {
    //       // event.preventDefault();
    //       // answerButton.textContent = results[index].correct_answer;
    //       // answerButton.classList.remove("hidden");
    //       let articleCard = document.querySelectorAll("article.card p.hidden");
    //       articleCard.className = "shown";
    //       triviaArticle.append[articleCard];
    //     });
    //   }
      questionTrivia()
    });
});
//});
