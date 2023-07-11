// const showBtn = document.querySelector("button");
// showBtn.addEventListener("click", (event) => {
//   console.log(event.target);
// });

// const form = document.querySelector("form");
// form.id = "new-ques-holder";
// const selectMenu = document.createElement("select");
// for (let i = 1; i < selectMenu.length; i++) {
//   console.log(selectMenu[i]);
// }
// form.append(selectMenu);

// const promiseToWait = new Promise((resolve, reject) => {
//     const questions = fetch("https://opentdb.com/api.php?amount=10&category=26&difficulty=easy&type=boolean")

// })
// .then((response) => response.json()) //parse the resopnse
//   .then((JSONresponse) => console.log(JSONresponse.results)); //get that info from the json

let myFetchedData = fetch(
  "https://opentdb.com/api.php?amount=10&category=26&type=multiple"
  // "https://opentdb.com/api.php?amount=10"
  // &category=26&difficulty=easy&type=boolean
)
  .then((response) => response.json())
  .then((JSONResponse) => renderAPI(JSONResponse.results));
// .then((JSONResponse) => console.log(JSONResponse))

const formsButton = document.querySelector("form button");
console.log(formsButton);
const main = document.querySelector("main");

const articleForNewCard = document.createElement("article");

const h2ForNewCard = document.createElement("h2");
articleForNewCard.append(h2ForNewCard);

const pForNewCard = document.createElement("p");
articleForNewCard.append(pForNewCard);

const buttonForNewCard = document.createElement("button");
articleForNewCard.append(buttonForNewCard);

const p2ForNewCard = document.createElement("p");
articleForNewCard.append(p2ForNewCard);

main.append(articleForNewCard);
console.log("new card i made:", main);

function renderAPI(arrOfQuesObj) {
  //what do i want to happen here
  //every time 'get New qUESTIONS' is pressed, 10 random new queestions SHOW up
  //forEach question, CLICK event reveals ['correct-answer']
  formsButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event);
  });
}


// console.log(arrOfQuesObj)
//run it up w events and the  whole shabang

// fetch("https://opentdb.com/api.php?amount=10&category=26&difficulty=easy&type=boolean").then(res => res.ok ? res : false).then(res => {
//     if (res) {
//         //res ok
//         return form;
//     } else {
//        //res not ok
//        return err;
//     }

// });

// const newFetch = fetch("https://opentdb.com/api.php?amount=10&category=26&difficulty=easy&type=boolean")
// newFetch.results

/**
 * 
 * 
 * fetch(
  "https://opentdb.com/api.php?amount=10&category=26&difficulty=easy&type=boolean"
).then((response) => console.log(response.json()))
.then((JSONResponse) => console.log()
 add curly braces in or 
 replace console.log w a 
 * 
 * 
 * 
 */
