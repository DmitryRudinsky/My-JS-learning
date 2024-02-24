"Дан следующая структура:"

let data = [
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
];

"Найдите сумму элементов этой структуры."
let sm = 0;
for(let elem of Object.values(data)){
    for(let values of Object.values(elem)){
        sm += values.reduce((a, b) => a + b, 0);
    }
}

console.log(sm);