"Даны пустые абзацы и кнопка. По нажатию на кнопку заполните абзацы числами по порядку."

let getNumbers = document.getElementById("getNumbers");
let wordOutput = document.querySelectorAll("#wordOutput");

console.log(wordOutput);
getNumbers.addEventListener("click", function(){
    let cnt = 1;
    wordOutput.forEach(elem => {
        elem.innerHTML = cnt;
        cnt+=1;
    })
});
