const showBtn = document.querySelector("button");
showBtn.addEventListener("click", (event) => {
  console.log(event.target);
});

const form = document.querySelector("form");
form.id = "new-ques-holder";
const selectMenu = document.createElement("select");
for (let i = 1; i < selectMenu.length; i++) {
  console.log(selectMenu[i]);
}
form.append(selectMenu);

// const promiseToWait = new Promise((resolve, reject) => {
//     const questions = fetch("https://opentdb.com/api.php?amount=10&category=26&difficulty=easy&type=boolean")

// })
// .then((response) => response.json()) //parse the resopnse
//   .then((JSONresponse) => console.log(JSONresponse.results)); //get that info from the json

// fetch(
//   "https://opentdb.com/api.php?amount=10&category=26&difficulty=easy&type=boolean"
// ).then((response) => console.log(response.json()))
// .then()

fetch("https://opentdb.com/api.php?amount=10&category=26&difficulty=easy&type=boolean").then(res => res.ok ? res : false).then(res => {
    if (res) {
        //res ok
        return form;
    } else {
       //res not ok
       return err;
    }

});