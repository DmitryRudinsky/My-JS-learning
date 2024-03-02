let btn = document.querySelector("#absbutton");

btn.addEventListener("click", function(){
    let numberParagraph = document.querySelector("#numberParagraph");
    let currentNumber = parseFloat(numberParagraph.innerHTML);

    if(!isNaN(currentNumber)){
        let squredNumber = currentNumber * currentNumber;
        numberParagraph.innerHTML = squredNumber;
    }else{
        numberParagraph.innerHTML = "Введите число";
    }
});