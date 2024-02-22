/*
[
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
*/
"Найдите сумму элементов этого массива."

function sumOfArray(array){
    let sm = 0;
    for(let elem of array){
        sm += elem.reduce((a, b) => a + b, 0);
    }
    return sm;
}

console.log(sumOfArray([
	[1, 2, 3], 
	[4, 5, 6], 
	[7, 8, 9], 
]))

