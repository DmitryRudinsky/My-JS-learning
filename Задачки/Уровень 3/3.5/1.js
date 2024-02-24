"Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'."

let str = "aboba, Fedya, Senya, Dima, Alexandro, Santyago, Ars, Aorta, bash, Pochechuha";

function pushToArray(string){
    let array = [];
    string = string.split(", ");
    for(let elem of string){
        if (elem[0] == "a" || elem[0] == "A") array.push(elem);
    }
    return array;
}

console.log(pushToArray(str));