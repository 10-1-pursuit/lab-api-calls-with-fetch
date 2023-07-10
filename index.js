fetch('https://opentdb.com/api.php?amount=10')
    .then((response) => response.json())
    .then((JsonResponse) => renderCards(JsonResponse.results))
// .then((JsonResponse) => console.log(JsonResponse.results) )

function renderCards(arrayOfQuestionObjs) {
    console.log(arrayOfQuestionObjs.question)

}

const cards = document.querySelector('main')
const articleCard = document.createElement('article')
const h2Card = document.createElement('h2')
articleCard.append(h2Card)
const buttonCard = document.createElement('button')
articleCard.

