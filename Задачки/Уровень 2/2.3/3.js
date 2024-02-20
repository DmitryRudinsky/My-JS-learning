"Даны числа, разделенные запятыми:"
"'12,34,56'"
"Найдите сумму этих чисел."

let res = "12,34,56"
function sumOfString(string){
    return string.split(",").reduce((a, b) => Number(a) + Number(b), 0);
}

console.log(sumOfString(res)); //102
