"Дан некоторый массив, например, вот такой:"
"[1, 2, 3, 4, 5, 6]"
"По очереди выведите в консоль подмассивы из двух элементов нашего массива:"
"[1, 2]"
"[3, 4]"
"[5, 6]"

let array = [1, 2, 3, 4, 5, 6];
for(let i = 0; i < array.length; i += 2){
    let index = array.indexOf(array[i]);
    console.log(array.slice(index, index + 2));
}