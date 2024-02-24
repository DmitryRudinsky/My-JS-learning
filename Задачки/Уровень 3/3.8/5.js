"Сформируйте с помощью циклов следующий массив:"
/*
[
	[1, 2, 3],
	[1, 2, 3],
	[1, 2, 3],
	[1, 2, 3],
	[1, 2, 3],
]
*/

let arr = [];
for(let i = 0; i < 5; i++){
    let subArr = [];
    for(let j = 1; j < 4; j++){
        subArr.push(j);
    }
    arr.push(subArr);
}

console.log(arr);