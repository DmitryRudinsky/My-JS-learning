"[1, 2, 3, 4, 5, 6]"
"Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях."

function sm(array){
    let sumEven = 0, sumOdd = 0;
    for(let i = 0; i < array.length; i++){
        if(i % 2 == 1) sumEven += array[i];
        else sumOdd += array[i];
    }
    return sumEven / sumOdd;
}

console.log(sm([1, 2, 3, 4, 5, 6]));