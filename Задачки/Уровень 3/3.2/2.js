"Дан массив. Удалите из него каждый пятый элемент."

let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "21"];

function delFifth(array){
    for(let i = 0; i < array.length; i++){
        if((i + 1) % 5 == 0) array[i] = "";
    }
    return array.filter(a => a != '');
}

console.log(delFifth(arr));