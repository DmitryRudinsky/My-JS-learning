"Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв."

function checkUpperCase(str){
    let cnt = 0;
    for(let elem of str){
        if(elem == elem.toUpperCase()) cnt += 1;
        if(cnt > 2) return false;
    }
    return true;
}

console.log(checkUpperCase("asdfgh")); //true
console.log(checkUpperCase("asdfghGHjhg")); //true
console.log(checkUpperCase("asdfghGTYUGIHjhg")); //false


