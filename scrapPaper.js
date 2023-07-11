// //Selecting Elements of the form and its class of 'card'
// const getForm = document.querySelector('form');
// const getEachCard = document.querySelectorAll(".card") //Will select all card classes despite being individually named (card1, card2, etc.)

// //Fetch the API to generate Trivia Ques
// function getTriviaQues() {

//     fetch("https://opentdb.com/api.php?amount=10")
//         .then(response => response.json())
//         .then((quesData) => {
//             const dataFullOfQues = data.results;
//             refreshCardsWithNewQues(dataFullOfQues);
//         })
//         .catch((error) => {
//             console.log("Error fetching trivia questions:", error)
//         })
// }

// //Create a Submit button event that when clickin generates a new set of questions

// getForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     getTriviaQues();
// })

// //Generate new questions onto the cards
// function refreshCardsWithNewQues(ques) {
//     getEachCard.forEach((card, index) => {
//         const dataOfQues = ques[index];

//         const categorySection = card.querySelector("h2");
//         const questionSection = card.querySelector("p");
//         const answerBtn = card.querySelector("button");
//         const answerSection = card.querySelector(".hidden");

//         categorySection.textContent = dataOfQues.category;
//         questionSection.textContent = dataOfQues.question;
//         answerSection.textContent = dataOfQues.correct_answer;

//         answerBtn.addEventListener("click", (event) => {
//             answerSection.classList.toggle("hidden");
//             answerBtn.textContent = answerSection.classList.contains("hidden")
//                 ? "Show Answer" : "Hide Answer";
//         });
//     });

// };


