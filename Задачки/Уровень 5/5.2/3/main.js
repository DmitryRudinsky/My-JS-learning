"Даны абзацы, кнопка и див. По нажатию на кнопку найдите количество абзацев и выведите это значение в див."

let countButton = document.querySelector(".countButton");
let paragraphs = document.querySelectorAll("#numberParagraph");


countButton.addEventListener("click", () => {
    let resultCount = document.querySelector(".resultCount");
    resultCount.innerHTML = paragraphs.length;
})