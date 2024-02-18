const SCRIPTS = require("./scripts"); //Набор данных

"У нас есть функция characterScript и способ корректного перебора символов в цикле." 

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

"Следующий шаг - подсчитать количество символов, принадлежащих каждому набору."

function countBy(items, groupName){
    let counts = [];
    for(let item of items){ //item = 1, 2, 3, 4, 5
        let name = groupName(item); // name = false, false, true, true, true
        let known = counts.findIndex(c => c.name == name); //known = -1, 0, -1, 1, 1
        if(known == -1){
            counts.push({name, count: 1}); //counts = [{name: false, count: 1}], [{name: false, count: 2}, {name: true, count: 1}]
        }else{
            counts[known].count++; //counts = [{name: false, count: 2}], [{name: false, count: 2}, {name: true, count: 2}], [{name: false, count: 2}, {name: true, count: 3}]
        }
    }
    return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
//[ { name: false, count: 2 }, { name: true, count: 3 } ]

"Функция countBy принимает на вход коллекцию и функцию, вычисляющую имя группы для данного элемента."
"Функция countBy возвращает массив объектов, каждый из которых содержит имя группы и количество найденных для неё элементов."

"В этой функции использован ещё один метод для работы с массивами - findIndex."
"Данный метож чем-то похож на indexOf, но вместо поиска конкретного значения он находит первое значение,"
"для которого заданная функция возвращает true."

"Используя countBy, мы можем написать функцию, сообщающую, какие системы письма были задействованы в данном фрагменте текста."

function textScripts(text){
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "none");

    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";

    return scripts.map(({name, count}) => {
        return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(', ');
}

console.log(textScripts("woof, тяв"));

console.log("AB".codePointAt(0)); //65
console.log("AB".codePointAt(1)); //66