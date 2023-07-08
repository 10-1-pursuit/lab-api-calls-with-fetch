fetch("https://opentdb.com/api.php?amount=10")
.then(response => response.json())
.then((JSONresponse) => {
  // console.log("json response", JSONresponse);
  const fetchQuestion = JSONresponse;
  console.log(fetchQuestion.results)
  //do something aka make a function
  const otherpromiseToWait2 = new Promise((resolve, reject) => {
    setTimeout(() => {
  for (let ques in fetchQuestion){
    if (true) {
              resolve("I promise to wait");
            }
            {
              reject("Error: Something went wrong");
            }console.log(otherpromiseToWait2)
   } }, 1000)
  //change the dom
  
})
.catch((err) => {
  console.log("error", err);

})})