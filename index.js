// function displayCard({results}) {
//     const [trivia] = results;
//     let category = document.querySelector("h2")
//     category.innerText = trivia.category
//     let question = document.querySelector(".question")
//     question.innerText = trivia.question
//     let correctAnswer = document.querySelector(".hidden")
//     correctAnswer.innerText = trivia["correct_answer"]

// }


// let trivia = fetch("https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=boolean")
// .then((response)=>response.json())
// .then( (JSONresponse) => {
//     console.log(JSONresponse.results)
// })
// .catch((err) =>{
//     console.log(err)
// })





function displayCard({results}) {
    
    for(let trivia of results){

  
    let card = document.createElement("article")
    card.classList.add("card")

    let category = document.createElement("h2")
    category.innerText = trivia.category

    let question = document.createElement("p")
    question.innerText = trivia.question

    let button = document.createElement("button")
    button.innerText = "Show Answer"
 
    let correctAnswer = document.createElement("p")
    correctAnswer.classList.add("hidden")
   correctAnswer.setAttribute("display", "none")
 
    correctAnswer.innerText = trivia["correct_answer"]


    button.addEventListener("click",()=>{
     
       correctAnswer.style.display = "block"
       correctAnswer.innerText = trivia["correct_answer"]

    })
  
    card.append(category, question, button, correctAnswer)

   document.querySelector("main").append(card)

}

}

fetch("https://opentdb.com/api.php?amount=10&category=32&type=boolean")
.then((response)=>response.json())
.then((JSONresponse) => displayCard(JSONresponse))
.catch((err) =>{
    console.log(err)
})

