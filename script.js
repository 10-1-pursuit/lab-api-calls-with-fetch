fetch('https://opentdb.com/api.php?amount=10')
	.then((response) => response.json())
	.then((JSONresponse) => {
		const form = document.querySelector('form');
		form.addEventListener('submit', (event) => {
			event.preventDefault();

			displayCards(JSONresponse, createCard);
		});
		console.log(JSONresponse.results);
	})
	.catch(displayError);

const main = document.querySelector('main');

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
	const questionP = document.createElement('p');
	const btnShowAnswer = document.createElement('button');
	const answerP = document.createElement('p');

	h2.textContent = triviaQuestion.category;
	questionP.textContent = triviaQuestion.question;
	answerP.textContent = triviaQuestion.correct_answer;
	btnShowAnswer.textContent = 'Show Answer';

	article.setAttribute('class', 'card');
	questionP.classList.add('question-para');
	answerP.classList.add('answer-para', 'hidden');

	const newArticle = article;

	newArticle.append(h2, questionP, btnShowAnswer, answerP);

	return newArticle;
}

function displayCards({ results }, createCard) {
	const [...questions] = results;

	questions.forEach((question) => {
		main.append(createCard(question));
	});
}
console.log(main);
