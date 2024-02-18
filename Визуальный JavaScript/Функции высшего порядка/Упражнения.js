const SCRIPTS = require("./scripts"); //Набор данных


"1 задание. Свёртка"

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((result, nextArray) => result.concat(nextArray), []));
// → [1, 2, 3, 4, 5, 6]


"2 задание: Ваш собственный цикл."

//1 вариант

function loop1(elem, condition, update, body){
    if(!condition(elem)) return false;
    body(elem);
    return loop1(update(elem), condition, update, body);
}

function loop2(elem, condition, update, body){
    for(let value = elem; condition(value); value = update(value)){
        body(value);
    }
}

loop1(3, n => n > 0, n => n - 1, console.log);
loop2(3, n => n > 0, n => n - 1, console.log);

"3 задание: метод every"

function every1(array, test) {
    for(let elem of array){
        if(!test(elem)) return false;
    }
    return true;
}

console.log(every1([1, 3, 5], n => n < 10));
// → true
console.log(every1([2, 4, 16], n => n < 10));
// → false
console.log(every1([], n => n < 10));
// → true

function every2(array, test) {
    return !array.some(elem => !test(elem));
}

console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true


"4 задание: Доминирующее направление письма."

function characterScript(code){
    for(let script of SCRIPTS){
        if(script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })){
            return script;
        }
    }
    return null;
}

function countBy(items, groupName){
    let counts = [];
    for(let item of items){
        let name = groupName(item); 
        let known = counts.findIndex(c => c.name == name); 
        if(known == -1){
            counts.push({name, count: 1});
        }else{
            counts[known].count++;
        }
    }
    return counts;
}

function dominantDirection(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
    if(scripts.length == 0) return "There is no scripts";
    return scripts.reduce((a, b) => a.count > b.count ? a : b).name;
}
  
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
console.log(dominantDirection("Приветик!, Hey, مساء الخير"));
// → ltr