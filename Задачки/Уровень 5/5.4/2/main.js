"Даны ссылки и кнопка. По нажатию на кнопку получите массив атрибутов href ссылок."

let get_href = document.getElementById("get_href");
let linksArray = document.querySelectorAll(".link");
let hrefArr = [];
get_href.addEventListener("click", function(){
    linksArray.forEach(elem => hrefArr.push(elem.href));
    console.log(hrefArr);
});