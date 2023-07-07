const getNewQuestions = document.querySelector(".centered");
getNewQuestions.addEventListener("submit", (event)=>{
    console.log("It works")   
});

const questionCard = document.querySelector(".card");
const showAnswer = document.querySelector("#one")
showAnswer.addEventListener("click", (event)=>{
    console.log("Still works")
});

fetch("https://opentdb.com/api.php")
    .then((response)=>console.log(response))