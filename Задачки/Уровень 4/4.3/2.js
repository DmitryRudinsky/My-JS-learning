"Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз."

function delThreeDoubles(array){
    let obj = {}, toDelete = [];
    for(let elem of array){
        if(!obj[elem]) obj[elem] = 1;
        else obj[elem] += 1;
        if(obj[elem] > 3 && !toDelete.includes(elem)) toDelete.push(elem);
    }
    for(let elem of toDelete){
        for(let i = 0; i < array.length; i++){
            if(array[i] == elem){
                array.splice(i, 1);
                i--;
            }
        }
    }
    return array;
}

console.log(delThreeDoubles(["A", "B", "B", "C", "D", "D", "D", "E", "E", "E", "E", "F", "F", "F", "F", "F", "F"]))
/*
[
  'A', 'B', 'B',
  'C', 'D', 'D',
  'D'
]
*/