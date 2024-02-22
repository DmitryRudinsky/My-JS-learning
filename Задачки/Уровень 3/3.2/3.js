let num = 5;
"Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка:"
'00000'

function zeroPad(n){
    let s = '';
    for(let i = 0; i < n; i++){
        s += '0';
    }
    return s;
}

console.log(zeroPad(5))