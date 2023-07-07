const test = console.log
const main = document.querySelector("main")

fetch("https://opentdb.com/api.php?amount=10")
    .then((response) => response.json())
    .then((JSONresponse) => {
        test(JSONresponse.results)
        const results = JSONresponse.results
        for (let i = 0; i < results.length; i++) {
            displayCard(results[i])
        }
    }).catch((err) => test(err))


function displayCard(questionObject) {

    const cards = document.createElement("article")
    cards.classList.add("card")
   
    const h2 = document.createElement("h2");
    h2.innerHTML = questionObject.category;

    const pQuestion = document.createElement("p")
    pQuestion.innerHTML = questionObject.question
    test(questionObject.question)

    const pAnswer = document.createElement("p")
    pAnswer.classList.add("hidden")
    pAnswer.innerText = questionObject.correct_answer

    const answerButton = document.createElement("button")
    answerButton.innerText = "Show Answer"

    answerButton.addEventListener("click", (e) => {
        pAnswer.style.display = "block"
    })

    cards.append(h2, pQuestion, answerButton, pAnswer);
    main.append(cards);
    
}