"Дано некоторое слово:"
'abcba'
"Проверьте, что это слово читается одинаково с любой стороны."

function checkEqual(str){
    return str == str.split("").reverse().join("");
}

console.log(checkEqual("abcba")); //true
console.log(checkEqual("abcbac")); //false