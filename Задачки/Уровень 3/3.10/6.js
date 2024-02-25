"Дан массив:"
/*
[
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
Слейте элементы этого массива в один одномерный массив:
*/
"[1, 2, 3, 4, 5, 6, 7, 8, 9]"

let arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
let newArr = []
for(let elem of Object.values(arr)){
    newArr = newArr.concat(elem);
}
console.log(newArr);