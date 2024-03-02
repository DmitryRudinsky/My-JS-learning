"Дана кнопка и два инпута. В инпуты вводятся числа. По нажатию на кнопку найдите сумму введенных чисел."

let sumButton = document.querySelector(".sumButton");

sumButton.addEventListener("click", function(){
    let inputNumber1 = parseFloat(document.querySelector(".inputNumber1").value);
    let inputNumber2 = parseFloat(document.querySelector(".inputNumber2").value);
    if(!isNaN(inputNumber1) && !isNaN(inputNumber2)){
        console.log(inputNumber1 + inputNumber2);
    }else{
        console.log("Вы должны были ввести число, идиот!");
    }
});