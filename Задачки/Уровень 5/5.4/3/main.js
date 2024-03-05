"Дан абзац и кнопка. По нажатию на кнопку сделайте в цикле строку '123456789' и запишите ее в абзац."

let getCycle = document.getElementById("getCycle");

getCycle.addEventListener("click", function(){
    let str = '', resultOutput = document.getElementById("resultOutput");
    for(let i = 1; i < 10; i++) str += String(i);
    resultOutput.innerText = str;
});