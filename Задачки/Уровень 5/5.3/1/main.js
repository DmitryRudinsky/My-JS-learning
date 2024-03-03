"Дан абзац, инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал введенного числа."

function fact(n){
    if(n <= 1) return n
    else return n * fact(n - 1)
}

let getFact = document.getElementById("getFact");

getFact.addEventListener("click", function(){
    let inputNum = parseFloat(document.getElementById("inputNum").value);
    let paragraphResult = document.getElementById("paragraphResult");
    if(!isNaN(inputNum)){
        paragraphResult.innerHTML = fact(inputNum);
    }else{
        paragraphResult.innerHTML = "Введи число, дурак...";
    }
});