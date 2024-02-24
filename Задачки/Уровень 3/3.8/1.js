"Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3."

function every(array, test){
    for(let elem of array){
        if(!test(elem)) return false;
    }
    return true;
}

let arr1 = [3, 33, 3543, 345653425, 65432, 3245674623542, 87689098763456, 24565432, 333, 76543];
let arr2 = [3, 33, 3543, 345653425, 65432, 3245674623542, 87689098763456, 24565432, 333, 7654];

console.log(every(arr1, a => String(a).includes("3"))); //true
console.log(every(arr2, a => String(a).includes("3"))); //false