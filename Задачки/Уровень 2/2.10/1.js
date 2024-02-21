"Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв."

function letterCntCheck(str){
    let cnt = 0;
    for(let elem of str){
        if(isNaN(Number(elem))) cnt++;
        if(cnt == 3) return false;
    }
    return true;
}

console.log(letterCntCheck("12345r2345"));