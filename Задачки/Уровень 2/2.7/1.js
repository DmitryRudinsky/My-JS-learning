'a bc def ghij'
"Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:"
'A BC DEF ghij'

function toUpperCaseIf(string, condition){
    string = string.split(" ");
    for(let i = 0; i < string.length; i++){
        if (string[i].length <= condition){
            string[i] = string[i].toUpperCase();
        }
    }
    return string.join(" ");
}

console.log(toUpperCaseIf('a bc def ghij', 3));