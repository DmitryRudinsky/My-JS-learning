"[1, 2, 3, 3, 4, 5]"
"Проверьте, что в этом массиве есть два одинаковых элемента подряд."

function checkEqual(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] == array[i + 1]) return true;
    }
    return false;
}

console.log(checkEqual([1, 2, 3, 3, 4, 5])); //true