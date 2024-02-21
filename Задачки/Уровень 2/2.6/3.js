'1234567'
"Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:"
'1 234 567'

function spaces(str){
    str = str.split("").reverse();
    let newString = "";
    for(let i = 0; i < str.length; i++){
        if (i % 3 == 0){
            newString += " ";
        };
        newString += str[i];
    }
    return newString.split("").reverse().join("");
}

console.log(spaces("1234"));