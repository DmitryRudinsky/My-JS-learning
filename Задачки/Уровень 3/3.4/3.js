"Дан следующий объект:"
let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}
"Найдите сумму элементов этого объекта."

let sm = 0;
for(let elem of Object.values(obj)){
    sm += Object.values(elem).reduce((a, b) => a + b, 0);
}

console.log(sm);