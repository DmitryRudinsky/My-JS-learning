"Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы."

function delNearDoubles(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] == array[i + 1]){
            array.splice(i, 2);
            i--;
        }
    }
    return array;
}

console.log(delNearDoubles([1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9, 9, 9, 9, 8, 7]));