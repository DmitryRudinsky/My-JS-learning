"'abcde'"
"Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:"
"'AbCdE'"

function toUpperOdd(string){
    let newString = ""
    for(let i = 0; i < string.length; i++){
        if(i % 2 == 0) newString += string[i].toUpperCase();
        else newString += string[i];
    }
    return newString;
}

console.log(toUpperOdd("abcde"));


let string = "abcde";
newString = "";
for(let i = 0; i < string.length; i++){
    if (i % 2 == 0) newString += string[i].toUpperCase();
    else newString += string[i];
}

console.log(newString);

