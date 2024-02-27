"Сделайте функцию, которая параметром будет принимать слово и возвращать массив его слогов."

function getSyllable(str){
    let arr = [], vowels = ["а", "у", "о", "и", "э", "ы", "е", "и"];
    let syllable = "";
    for(let elem of str){
        if(vowels.includes(elem.toLowerCase())){
            syllable += elem
            arr.push(syllable);
            syllable = "";
        }else{
            syllable += elem;
        }
    }
    return arr;
}

console.log(getSyllable("Однако"));//[ 'О', 'дна', 'ко' ]
console.log(getSyllable("аббревиатура"));//[ 'а', 'ббре', 'ви', 'а', 'ту', 'ра' ]