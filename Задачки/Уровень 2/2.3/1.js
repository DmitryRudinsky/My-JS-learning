"Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова."

function equalityOfChars(firstLetter, secondLetter){
    return firstLetter[firstLetter.length- 1] == secondLetter[0];
}

console.log(equalityOfChars("ABC", "CBA")); //true
console.log(equalityOfChars("ABCD", "CBA")); //false