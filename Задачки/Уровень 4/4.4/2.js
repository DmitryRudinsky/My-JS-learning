"Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры."

function delEven(n){
    return Number(String(n).replace(/[02468]/g, ""));
}

console.log(delEven(1234567890)); //13579