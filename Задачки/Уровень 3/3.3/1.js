"Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов."

function delWords(array){
    return array.filter(a => a.length <= 3);
}

console.log(delWords(["ASF", "ASDF", "DRTFYGUHIJO", "S", "#$"]));