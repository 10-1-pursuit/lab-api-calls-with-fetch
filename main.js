fetch("https://opentdb.com/api.php?amount=10&category=20")
    .then((response)=>response.json())
    .then((JSONresponse)=>{
        // console.log(JSONresponse.results)
        const resultsFirst = JSONresponse.results[0]
        const categoryOne = document.querySelector("#category-one")
        const questionOne = document.querySelector("#question-one")
            categoryOne.innerText = resultsFirst.category
            questionOne.innerText = resultsFirst.question
        const showAnswerOne = document.querySelector("#one")
            showAnswerOne.addEventListener("click", (event)=>{
            showAnswerOne.innerText = resultsFirst.correct_answer
        });

        const resultsSecond = JSONresponse.results[1]
        const categoryTwo = document.querySelector("#category-two")
        const questionTwo = document.querySelector("#question-two")
            categoryTwo.innerText = resultsSecond.category
            questionTwo.innerText = resultsSecond.question
        const showAnswerTwo = document.querySelector("#two")
            showAnswerTwo.addEventListener("click", (event)=>{
            showAnswerTwo.innerText = resultsSecond.correct_answer
        });

        const resultsThird = JSONresponse.results[2]
        const categoryThree = document.querySelector("#category-three")
        const questionThree = document.querySelector("#question-three")
            categoryThree.innerText = resultsThird.category
            questionThree.innerText = resultsThird.question
        const showAnswerThree = document.querySelector("#three")
            showAnswerThree.addEventListener("click", (event)=>{
            showAnswerThree.innerText = resultsThird.correct_answer
        });

        const resultsFourth = JSONresponse.results[3]
        const categoryFour = document.querySelector("#category-four")
        const questionFour = document.querySelector("#question-four")
            categoryFour.innerText = resultsFourth.category
            questionFour.innerText = resultsFourth.question
        const showAnswerFour = document.querySelector("#four")
            showAnswerFour.addEventListener("click", (event)=>{
            showAnswerFour.innerText = resultsSecond.correct_answer
        });

        const resultsFifth = JSONresponse.results[4]
        const categoryFive = document.querySelector("#category-five")
        const questionFive = document.querySelector("#question-five")
            categoryFive.innerText = resultsFifth.category
            questionFive.innerText = resultsFifth.question
        const showAnswerFive = document.querySelector("#five")
            showAnswerFive.addEventListener("click", (event)=>{
            showAnswerFive.innerText = resultsFifth.correct_answer
        });

        const resultsSixth = JSONresponse.results[5]
        const categorySix = document.querySelector("#category-six")
        const questionSix = document.querySelector("#question-six")
            categorySix.innerText = resultsSixth.category
            questionSix.innerText = resultsSixth.question
        const showAnswerSix = document.querySelector("#six")
            showAnswerSix.addEventListener("click", (event)=>{
            showAnswerSix.innerText = resultsSixth.correct_answer
        });

        const resultsSeventh = JSONresponse.results[6]
        const categorySeven = document.querySelector("#category-seven")
        const questionSeven = document.querySelector("#question-seven")
            categorySeven.innerText = resultsSeventh.category
            questionSeven.innerText = resultsSeventh.question
        const showAnswerSeven = document.querySelector("#seven")
            showAnswerSeven.addEventListener("click", (event)=>{
            showAnswerSeven.innerText = resultsSeventh.correct_answer
        });

        const resultsEigth = JSONresponse.results[7]
        const categoryEight = document.querySelector("#category-eight")
        const questionEight = document.querySelector("#question-eight")
            categoryEight.innerText = resultsEigth.category
            questionEight.innerText = resultsEigth.question
        const showAnswerEight = document.querySelector("#eight")
            showAnswerEight.addEventListener("click", (event)=>{
            showAnswerEight.innerText = resultsEigth.correct_answer
        });

        const resultsNinth = JSONresponse.results[8]
        const categoryNine = document.querySelector("#category-nine")
        const questionNine = document.querySelector("#question-nine")
            categoryNine.innerText = resultsNinth.category
            questionNine.innerText = resultsNinth.question
        const showAnswerNine = document.querySelector("#nine")
            showAnswerNine.addEventListener("click", (event)=>{
            showAnswerNine.innerText = resultsNinth.correct_answer
        });

        const resultsTenth = JSONresponse.results[9]
        const categoryTen = document.querySelector("#category-ten")
        const questionTen = document.querySelector("#question-ten")
            categoryTen.innerText = resultsTenth.category
            questionTen.innerText = resultsTenth.question
        const showAnswerTen = document.querySelector("#ten")
            showAnswerTen.addEventListener("click", (event)=>{
            showAnswerTen.innerText = resultsTenth.correct_answer
        });
    })

 