const getTriviaButton = document.querySelector(".questions");
const h2 = document.querySelectorAll("h2");
const p = document.querySelectorAll(".qstn");
const a = document.querySelectorAll("article.card p.hidden")
let answerButton = document.querySelectorAll(".hidden");
getTriviaButton.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("https://opentdb.com/api.php?amount=10")
    .then((response) => response.json())
    .then((json) => {
      const results = json.results;
      let i = 0;
      for (let result of results) {
        if (i < h2.length) {
          h2[i].textContent = result.category;
          p[i].textContent = result.question;
          i++;
        }
        answerButton.forEach((answerButton, index) => {
            answerButton.addEventListener("click",(e) =>{
                e.preventDefault()
            })
            answerButton.textContent = results[index].correct_answer;
            answerButton.classList.remove("hidden");
          });
      }
    });
});

