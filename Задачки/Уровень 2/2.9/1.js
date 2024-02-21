"123456"
"Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:"
"12 + 34 + 56"

function sumPairs(array){
    let newArray = [];
    for(let i = 0; i < array.length; i+=2){
        newArray.push(Number(String(array[i]) + String(array[i + 1])));
    }
    return newArray.reduce((a, b) => a + b, 0);
}

console.log(sumPairs([1, 2, 3, 4, 5, 6]));