"Дан абзац, инпут и кнопка. В инпут вводится слово. По нажатию на кнопку переверните слово и запишите его в абзац."

let reverseButton = document.getElementById("reverseButton");

reverseButton.addEventListener("click", function(){
    let inputWord = document.getElementById("inputWord").value;
    let wordOutput = document.querySelector(".wordOutput");
    wordOutput.innerHTML = String(inputWord).split("").reverse().join("");
});