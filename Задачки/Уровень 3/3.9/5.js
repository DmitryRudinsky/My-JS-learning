"Сформируйте с помощью циклов следующий массив:"
/*
[
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
*/

let arr = [];
let j = 1
for(let i = 0; i < 3; i++){
    let subArr = [];
    while(subArr.length != 3){
        subArr.push(j);
        j++;
    }
    arr.push(subArr);
    subArr = []
}
console.log(arr);