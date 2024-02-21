'1 22 333 4444 22 5555 1'
"Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее:"
'1 22 333 22 1'

function delSubStr(str){
    str = str.split(" ");
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        if (str[i].length <= 3) newStr += str[i] + " ";
    }
    return newStr;
}

console.log(delSubStr('1 22 333 4444 22 5555 1'));