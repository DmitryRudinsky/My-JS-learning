"Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву."

let word1 = "КОНЬ";
let word2 = "ТЕСТ"

if(word1[word1.length - 1] != "Ь") console.log(word1[word1.length - 1]);
else console.log(word1[word1.length - 2]);

if(word2[word2.length - 1] != "Ь") console.log(word2[word2.length - 1]);
else console.log(word2[word2.length - 2]);