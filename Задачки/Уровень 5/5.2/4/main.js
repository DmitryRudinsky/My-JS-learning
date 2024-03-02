"Дана кнопка и инпут. В инпут вводится строка. По нажатию на кнопку определите, сколько символов в введенной строке."

let getLength = document.querySelector("#getLength");

getLength.addEventListener("click", () => {
    console.log(document.querySelector("#setString").value.length);
})