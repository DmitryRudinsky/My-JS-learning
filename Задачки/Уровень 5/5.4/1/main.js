"Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текстом становилось значение '!'."

let text = document.querySelectorAll(".text");

text.forEach(elem => {
    elem.addEventListener("click", function(){
        elem.innerHTML = "!";
    });
});