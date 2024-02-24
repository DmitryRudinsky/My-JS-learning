"Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр."

let arr = [1, 2, 3, 12, 145, 43, 1234354, 43321, 65432, 21, 414, 65432, 55]; //[1, 2, 3, 12, 145, 43, 21, 414, 55]


function delFromArray(array){
    array = array.map(a => String(a));
    for(let i = 0; i < array.length; i++){
        if(array[i].length > 3){
            array.splice(i, 1).concat(array.slice(i));
            i--;
        }
    }
    return array.map(a => Number(a));
}

console.log(delFromArray(arr));
/*
[
   1,  2,   3, 12, 145,
  43, 21, 414, 55
]
*/