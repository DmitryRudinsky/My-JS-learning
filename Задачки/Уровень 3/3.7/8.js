"Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке."


str = "I$ really# want% to^ stay& at* your/ house, my dear!";
function lastCharToUpperCase(string){
    string = string.split(" ");
    for(let i = 0; i < string.length; i++){
        for(let j = string[i].length - 1; j > 0; j--){
            if(string[i][j].toUpperCase() == string[i][j].toLowerCase()) continue;
            else{
                string[i] = string[i].slice(0, j) + string[i][j].toUpperCase() + string[i].slice(j + 1);
                break;
            }
        }
    }
    return string;
}

console.log(lastCharToUpperCase(str));