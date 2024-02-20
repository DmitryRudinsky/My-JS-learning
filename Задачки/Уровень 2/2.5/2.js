'abcdefg'
"Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:"
'abdeg'


let string = "abcdefg";

function delThird1(str){
    str = str.split("");
    for(let i = 0; i < str.length + 1; i++){
        if (i % 3 == 0) str[i - 1] = "";
    }
    return str.join("");
}

console.log(delThird1(string)); //abdeg
