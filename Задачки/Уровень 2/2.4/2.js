"Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения."

let object = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
    key5: "value5"
}

let keysArray1 = Object.keys(object);
let valuesArray1 = Object.values(object);
console.log(keysArray1);
console.log(valuesArray1);

let keysArray2 = Object.keys(object);
let valuesArray2 = Object.values(object);
console.log();
for(let key in object){
    if(keysArray2.indexOf(key) == -1) keysArray2.push(key);
    if(valuesArray2.indexOf(object[key]) == -1) valuesArray2.push(object[key]);
}

console.log(keysArray2);
console.log(valuesArray2);