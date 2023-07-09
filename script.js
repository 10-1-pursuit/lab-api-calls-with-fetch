const BASE_URL = 'https://opentdb.com/api.php?amount=10&encode=base64';

fetch(BASE_URL)
	.then((response) => response.json())
	.then((JSONresponse) => {
		const form = document.querySelector('form');
		form.addEventListener('submit', (event) => {
			event.preventDefault();

			const select = document.querySelector('#difficulty-level');
			select.addEventListener('click', (event) => {
				console.log(event.target.value);
			});

			displayCards(JSONresponse, createCard);
		});
		console.log(JSONresponse.results);
	})
	.catch(displayError);

const main = document.querySelector('main');
const cards = document.querySelectorAll('.card');

function displayError(error) {
	main.style.display = 'block';

	const paragraph = document.createElement('p');
	paragraph.textContent = 'Something went wrong!';

	const errorMessage = document.createElement('p');
	errorMessage.classList.add('error-message');
	errorMessage.textContent = error;

	main.append(paragraph, errorMessage);
}

function createCard(triviaQuestion) {
	const article = document.createElement('article');
	const h2 = document.createElement('h2');
	const h4 = document.createElement('h4');
	const questionP = document.createElement('p');
	const btnShowAnswer = document.createElement('button');
	const answerP = document.createElement('p');

	h2.textContent = atob(triviaQuestion.category);
	questionP.textContent = atob(triviaQuestion.question);
	h4.textContent = atob(triviaQuestion.difficulty);
	if (h4.textContent === 'easy') {
		h4.style.color = 'green';
	} else if (h4.textContent === 'medium') {
		h4.style.color = 'goldenrod';
		article.style.borderColor = 'goldenrod';
	} else {
		h4.style.color = 'red';
		article.style.borderColor = 'red';
	}

	btnShowAnswer.textContent = 'Show Answer';
	answerP.textContent = atob(triviaQuestion.correct_answer);

	article.setAttribute('class', 'card');
	questionP.classList.add('question-para');
	answerP.classList.add('answer-para', 'hidden');

	const newArticle = article;

	newArticle.append(h2, questionP, h4, btnShowAnswer, answerP);

	return newArticle;
}

function displayCards({ results }, createCard) {
	const [...questions] = results;

	questions.forEach((question) => {
		main.append(createCard(question));
	});
}

main.addEventListener('click', (event) => {
	if (
		event.target.textContent === 'Show Answer' &&
		event.target.nextSibling.classList.contains('hidden')
	) {
		event.target.nextSibling.classList.remove('hidden');
	} else if (
		event.target.textContent === 'Show Answer' &&
		!event.target.nextSibling.classList.contains('hidden')
	) {
		event.target.nextSibling.classList.add('hidden');
	}
});

const btnReset = document.querySelector('#btn-reset');

btnReset.addEventListener('click', () => {
	document.location.reload();
});
