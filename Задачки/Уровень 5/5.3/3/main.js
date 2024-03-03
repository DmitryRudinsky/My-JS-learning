"Дана кнопка и инпут. В инпут вводится число. По нажатию на кнопку найдите сумму цифр введеного числа."

let digitSum = number => String(number).split("").reduce((a, b) => Number(a) + Number(b), 0);

let getDigitSum = document.getElementById("getDigitSum");
getDigitSum.addEventListener("click", function(){
    let inputNumber = parseFloat(document.getElementById("inputNumber").value);
    let resOutput = document.querySelector(".resOutput");
    if(!isNaN(inputNumber)){
        resOutput.innerHTML = digitSum(inputNumber);
    }else{
        resOutput.innerHTML = "ДА ВВЕДИ УЖЕ ЧИСЛО, БЕЗДАРЬ";
    }

});