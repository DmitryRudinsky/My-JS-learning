let sumBtn = document.getElementById("sumButton");

sumBtn.addEventListener("click", function(){
    let numParagraph1 = document.getElementById("numberParagraph1");
    let numParagraph2 = document.getElementById("numberParagraph2");
    let resultParagraph = document.querySelector(".resultParagraph");
    let num1 = parseFloat(numParagraph1.innerHTML);
    let num2 = parseFloat(numParagraph2.innerHTML);

    if(!isNaN(num1) && !isNaN(num2)){
        resultParagraph.innerHTML = `Сумма двух элементов: ${num1 + num2}`;
    }else{
        resultParagraph.innerHTML = `Введите числа`;
    }
});