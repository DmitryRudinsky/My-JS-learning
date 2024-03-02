let numberInput = document.querySelectorAll("#numberInput");

numberInput.forEach(number => {
    number.addEventListener("blur", () => {
        let currentNumber = parseFloat(number.value);

        if(!isNaN(currentNumber)){
            number.value = currentNumber * currentNumber;
        }else{
            number.value = "Введите число!!!";
        }
    })
})