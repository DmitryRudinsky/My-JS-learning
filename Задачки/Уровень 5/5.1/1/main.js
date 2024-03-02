let btn = document.querySelector("#sumbutton");

btn.addEventListener("click", getSum);

function getSum(){
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);
    let res = document.getElementById("result");
    if(!isNaN(num1) && !isNaN(num2)){
        res.innerText = `Сумма двух элементов равна ${num1 + num2}`;
    }else{
        res.innerText = "Пожалуйста, введите число";
    }
}