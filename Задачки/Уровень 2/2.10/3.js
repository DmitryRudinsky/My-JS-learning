"Дана некоторая строка:"
'abcde abcde abcde'
"Замените в ней первый символ каждого слова на '!':"
'!bcde !bcde !bcde'


function changeSign(str){
    return str.split(" ").map(element => element = "!" + element.slice(1)).join(" ");
}

console.log(changeSign('abcde abcde abcde')); //'!bcde !bcde !bcde'