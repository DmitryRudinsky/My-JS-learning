"Дан массив:"
/*
[
	[2, 1, 4, 3, 5],
	[3, 5, 2, 4, 1],
	[4, 3, 1, 5, 2],
]
*/
"Отсортируйте элементы в каждом подмассиве."

function sortSubArray(array){
    for(let i = 0; i < array.length; i++){
        array[i] == array[i].sort(function (a, b){
            return a - b;
        });
    }
    return array;
}

console.log(sortSubArray([
	[2, 1, 4, 3, 5, 20, 21, 22, 30, 34, 65, 32, 100],
	[3, 5, 2, 4, 1],
	[4, 3, 1, 5, 2, 1, 2, 10, 21],
]))