'aaa bbb ccc eee fff'
"Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:"
'aaa ccc fff'

function delSecond(str){
    str = str.split(" ");
    for(let i = 1; i < str.length; i+=2){
        str[i] = "";
    }
    return str.filter(a => a != '');
}

console.log(delSecond('aaa bbb ccc eee fff'));