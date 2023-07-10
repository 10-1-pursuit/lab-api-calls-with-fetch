document.addEventListener("DOMContentLoaded", () => {
    fetch("https://opentdb.com/api.php?amount=10")
        .then(response => response.json())
        .then(JSONresponse => displayQuestions(JSONresponse.results))
        .catch(error => console.log(error));
});

function displayQuestions(questions) {
    const mainContainer = document.querySelector("main");
    mainContainer.innerHTML = "";

    questions.forEach(question => {
        const card = document.createElement("article");
        card.classList.add("card");

        const difficulty = document.createElement("p");
        difficulty.textContent = `Difficulty: ${question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}`;
        card.appendChild(difficulty);

        if (question.difficulty === "medium") {
            card.style.border = "3px solid yellow"
        } else if (question.difficulty === "hard") {
            card.style.border = "3px solid red"
        }

        const category = document.createElement("h2");
        category.textContent = question.category;

        const questionText = document.createElement("p");
        questionText.innerHTML = question.question;

        const answerButton = document.createElement("button");
        answerButton.textContent = "Show Answer";
        answerButton.addEventListener("click", () => {
            answerButton.nextElementSibling.classList.remove("hidden");
        });

        const answer = document.createElement("p");
        answer.innerHTML = question.correct_answer;
        answer.classList.add("hidden");

        card.appendChild(category);
        card.appendChild(questionText);
        card.appendChild(answerButton);
        card.appendChild(answer);

        mainContainer.appendChild(card);
    });
}


fetch("https://opentdb.com/api_category.php")
    .then((response) => response.json())
    .then((JSONresponse) => populateCategories(JSONresponse.trivia_categories))
    .catch((error) => console.log(error));

function populateCategories(categories) {
    const categorySelect = document.getElementById("category-select");

    categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category.id;
        option.textContent = category.name;
        categorySelect.appendChild(option);
    });
}

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedCategory = document.getElementById("category-select").value;

    let apiUrl = "https://opentdb.com/api.php?amount=10";
    if (selectedCategory) {
        apiUrl += `&category=${selectedCategory}`;
    }

    fetch(apiUrl)
        .then((response) => response.json())
        .then((JSONresponse) => displayQuestions(JSONresponse.results))
        .catch((error) => console.log(error));
});
