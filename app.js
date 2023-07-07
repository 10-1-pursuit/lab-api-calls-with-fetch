const test = console.log
const main = document.querySelector("main")

fetch("https://opentdb.com/api.php?amount=10")
    .then((response) => response.json())
    .then((JSONresponse) => {
        test(JSONresponse.results)
        const results = JSONresponse.results
        for (let i = 0; i < results.length; i++) {
            displayCard(results[i])
            test(results[i])
        }
    }).catch((err) => test(err))


function displayCard(questionObject) {

    const cards = document.createElement("article")
    cards.classList.add("card")
   
    if(questionObject.difficulty === "medium"){
        cards.style.border = "3px solid #e4e005";
    }

    if(questionObject.difficulty === "hard"){
        cards.style.border = "3px solid #F01313"
    }
    const h4Rating = document.createElement("h4")
    h4Rating.innerText = questionObject.difficulty

    const h2 = document.createElement("h2");
    h2.innerHTML = questionObject.category;

    const pQuestion = document.createElement("p")
    pQuestion.innerHTML = questionObject.question

    const pAnswer = document.createElement("p")
    pAnswer.classList.add("hidden")
    pAnswer.innerText = questionObject.correct_answer

    const answerButton = document.createElement("button")
    answerButton.innerText = "Show Answer"

    answerButton.addEventListener("click", (e) => {
        pAnswer.style.display = "block"
    })

    cards.append(h4Rating,h2, pQuestion, answerButton, pAnswer);
    main.append(cards);
    
}