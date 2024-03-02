"Дан абзац и кнопка. По нажатию на кнопку найдите сумму чисел от 1 до 100 и запишите результат в абзац."

let sumButton = document.querySelector(".sumButton");

let sm = 0;
for(let i = 1; i < 101; i++){
    sm += i;
}

sumButton.addEventListener("click", () => {
    let resultParagraph = document.querySelector(".resultParagraph");
    resultParagraph.innerHTML = sm;
})