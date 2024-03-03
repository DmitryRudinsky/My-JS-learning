let numberParagraphs = document.querySelectorAll("#numberParagraph");

numberParagraphs.forEach(paragraph => {
    paragraph.addEventListener("click", function(){
        let currentNumber = paragraph.innerHTML;
        if(!isNaN(currentNumber)){
            paragraph.innerHTML = currentNumber * currentNumber;
        }else{
            paragraph.innerHTML = "Введите число!!!";
        }
    })
})
