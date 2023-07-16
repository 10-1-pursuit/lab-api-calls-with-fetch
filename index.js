fetch('https://opentdb.com/api.php?amount=10')
    .then((response) => response.json())
    .then((JsonResponse) => renderCards(JsonResponse.results))
// .then((JsonResponse) => console.log(JsonResponse.results) )

function renderCards(arrayOfQuestionObjs) {
    console.log(arrayOfQuestionObjs)



const cards = document.querySelector('main')
const articleCard = document.createElement('article')
const h2Card = document.createElement('h2')
h2Card.innerText = 'Entertainment'
articleCard.append(h2Card)
const questionz = document.createElement('p')
questionz.innerText = arrayOfQuestionObjs[1].question
articleCard.append(questionz)
const buttonCard = document.createElement('button')
buttonCard.innerText= 'Short Answer '
articleCard.append(buttonCard)
cards.append(articleCard)
}
