"Дан следующая структура:"

let data = [
	{
		1: 11,
		2: 12,
		3: 13,
	},
	{
		1: 21,
		2: 22,
		3: 23,
	},
	{
		1: 24,
		2: 25,
		3: 26,
	},
];

"Найдите сумму элементов этой структуры."
let sm = 0;
for(let elem of Object.values(data)){
    sm += Object.values(elem).reduce((a, b) => a + b, 0);
}
console.log(sm);