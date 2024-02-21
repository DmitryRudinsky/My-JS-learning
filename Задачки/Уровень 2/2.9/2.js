"[1, 2, 3, 4, 5]"
"Выведите в консоль элементы этого массива в обратном порядке."


function consoleLogReverse1(array){
    return array.reverse().forEach(element => {
        console.log(element);
    });
    return;
}

function consoleLogReverse2(array){
    for(let i = array.length - 1; i >= 0; i--){
        console.log(array[i]);
    }
    return;
}

consoleLogReverse1([1, 2, 3, 4, 5]);
console.log();
consoleLogReverse2([1, 2, 3, 4, 5]);