"Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива"
"в виде следующего объекта:"
/*
{
	max: 9,
	min: 1,
}
*/
function maxAndMin(array){
    let mx = -Infinity, mn = Infinity, obj = {};
    for(let elem of array){
        if(elem > mx) mx = elem;
        if(elem < mn) mn = elem;
    }
    obj.max = mx;
    obj.min = mn;
    return obj; 
}

console.log(maxAndMin([1, 2, 3, -100, 100, -10, -100000, 100000000, 13, 43])); //{ max: 100000000, min: -100000 }