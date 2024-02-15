"Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html."


let array = [".html", "google.html", "H", "vk.html", ".html.http://telegram", "Yandex.html", "Beeline.html", "A", "V", "B", "C"];
for(let i = 0; i < array.length; i++){
    if(!array[i].endsWith(".html")){
        let indx = array.indexOf(array[i]);
        array.splice(indx, 1);
        i -=  1;
    }
}

console.log(array);
