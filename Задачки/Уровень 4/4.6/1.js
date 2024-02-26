"Сделайте функцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами."

function genRandomStr(length){
    let setOfLit = new Set();
    while(setOfLit.size < length){
        setOfLit.add(String.fromCharCode(97 + Math.floor(Math.random() * 26)));
    }
    return [...setOfLit].join("");
}

console.log(genRandomStr(26)); //uwqdnycxehpasmlvrfbtzkogij