"Дано число, например, вот такое:"
"let num = 12345;"
"Проверьте, что все цифры этого числа больше нуля."

function every(array, test) {
    for(let elem of array){
        if(!test(elem)) return false;
    }
    return true;
}

function checkZeros(number){
    return every(String(number).split(""), a => a != '0');
}

console.log(checkZeros(12345)); //true
console.log(checkZeros(123045)); //false