'aaa bbb ccc eee fff'
"Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее:"
'aaa Bbb ccc Eee fff'

function toUpperSecondCase(str){
    str = str.split(" ");
    let newString = "";
    for(let i = 1; i < str.length; i += 2){
        str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
}

console.log(toUpperSecondCase('aaa bbb ccc eee fff')); //aaa Bbb ccc Eee fff

