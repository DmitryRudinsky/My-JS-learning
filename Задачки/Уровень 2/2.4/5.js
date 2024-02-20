"'aaa bbb ccc'"
"Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:"
"'Aaa Bbb Ccc'"

function capitalLetter(str){
    let arr = str.split(' '), newString ="";
    for(let elem of arr){
        newString += elem[0].toUpperCase() + elem.slice(1)
        newString += " ";
    }
    return newString;
}

console.log(capitalLetter("aaa bbb ccc"));