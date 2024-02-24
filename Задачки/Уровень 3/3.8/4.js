"Дана строка в формате:"
'camelCase'
"Преобразуйте ее в формат:"
'snake_case'

function camelToSnake(str){
    str = str.split("");
    for(let i = 0; i < str.length; i++){
        if(str[i] == str[i].toUpperCase() && str[i].toUpperCase() != str[i].toLowerCase()){
            str[i] = str[i].toLowerCase();
            str.splice(i, 0, "_");
        }
    }
    return str.join("");
}

console.log(camelToSnake("camelCase"))