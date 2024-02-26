"Сделайте функцию, которая заполнит массив случайными латинскими буквами."


console.log(String.fromCharCode(97 + Math.floor(Math.random() * 26)));

function randomChar(length){
    let setOfLet = new Set();
    while (setOfLet.size < length){
        setOfLet.add(String.fromCharCode(97 + Math.floor(Math.random() * 26)))
    }
    return [...setOfLet];
}

console.log(randomChar(26));
/*
[
  'v', 'd', 'a', 'w', 'c', 'g',
  'q', 'b', 'o', 'j', 'p', 'i',
  'h', 'k', 'e', 'f', 'z', 'x',
  'm', 'n', 'u', 't', 'r', 's',
  'y', 'l'
]
*/