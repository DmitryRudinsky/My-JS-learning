// 1 задание

function ucFirst(str){
    return (str[0].toUpperCase() + str.slice(1));
}

alert(ucFirst("вася"));

// 2 задание

function checkSpam(str){
    str = str.toLowerCase();
    if(str.includes("viagra") || str.includes("xxx")){
        return true;
    } else{
        return false;
    }
}

alert(checkSpam('buy ViAgRA now')); //true
alert(checkSpam('free xxxxx')); //true
alert(checkSpam("innocent rabbit")); //false

// 3 задание

function truncate(str, maxlength){
    if (str.length <= maxlength){
        return str;
    }else{
        str = str.substr(0, maxlength -1) + "…";
        return str;
    }
}

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))
alert(truncate("Всем привет!", 20));


//4 задание

function extractCurrencyValue(str){
    let s = "";
    for (let char of str){
        if(isFinite(char)){
            s += char;
        }
    }
    return +s;
}

alert(extractCurrencyValue('$#@$g$120') === 120); //true