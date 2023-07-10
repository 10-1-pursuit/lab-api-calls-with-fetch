const test = console.log;

const mainSection = document.querySelector("main")
const categorySection = document.querySelector("h2");
const questionSection = document.querySelector("p");
const answerBtn = document.querySelector("button");
const answerSection = document.querySelector(".hidden");


fetch("https://opentdb.com/api.php?amount=10")
    .then((response) => response.json())
    .then((JSONresponse) => {
        const cardData = JSONresponse.results
        cardData.forEach((card) => {
            displayCard(card);
        });
    }).catch((error) => test(error))



function displayCard(cardsOfQues) {

    const cardSection = document.createElement("article");
    cardSection.classList.add("card");

    const h2 = document.createElement("h2");
    h2.textContent = cardsOfQues.category;

    const questions = document.createElement("p");
    questions.textContent = cardsOfQues.question;

    const answers = document.createElement("p");
    answers.classList.add("hidden")
    answers.innerText = cardsOfQues.correct_answer;

    const answrBtn = document.createElement("button");
    answrBtn.innerText = "Reveal Answer";
    answrBtn.addEventListener("click", (event) => {

        answers.style.display = "block";
    })

    mainSection.append(h2, questions, answers, answrBtn);
    mainSection.append(cardsOfQues);
}



function displayError(error) {
    const section = document.querySelector("div");
    // const section = document.querySelector("section.error");
    section.style.display = "block";

    const paragraph = document.createElement("p");
    paragraph.textContent = "Something went wrong!";

    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = error;

    section.append(paragraph, errorMessage);
}

