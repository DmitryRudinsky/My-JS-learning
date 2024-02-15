"Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://."


let array = ["http://", "http://google", "H", "http://vk", "http://telegram", "Yandex", "Beeline", "A", "V", "B", "C"];
for(let i = 0; i < array.length; i++){
    if(!array[i].startsWith("http://")){
        let indx = array.indexOf(array[i]);
        array.splice(indx, 1);
        i -=  1;
    }
}

console.log(array);
