"Дан следующий объект:"

let obj = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}
"Найдите сумму элементов этого объекта."

let sm = 0;
for(let elem1 of Object.values(obj)){
	for(let elem2 of Object.values(elem1)){
		for(let elem3 of Object.values(elem2)){
			sm += elem3;
		}
	}
}

console.log(sm);